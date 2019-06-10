<template>
  <div class="font-box myclass-detail" v-loading="loading">
    <TopBack>
      <span slot="headerTxt">{{ courseVideo.course.course_name }}</span>
    </TopBack>
    <div class="detailImg">
      <img :src="courseVideo.course.home_pic" class="img"  />
      <!-- <div class="img-box">
        <div class="classname">
          <h5>{{ courseVideo.course.course_name }}</h5>
          <strong>{{ courseVideo.course.course_name }}</strong>
          <div class="school">
            <span>{{ courseVideo.teacher.unit}}</span>
            <span>{{ courseVideo.teacher.username}} 等</span>
          </div>
        </div>
      </div> -->
    </div>

    <!--<sticky>
      <tab :line-width=2 active-color="#DB2C1B">
        <tab-item selected>视频</tab-item>
        <tab-item >视频</tab-item>
      </tab>
    </sticky>-->
    <sticky>
      <tab active-color="#DB2C1B" default-color="#333333" :line-width="2" class="class-detail-tab-box">
        <tab-item selected @on-item-click="onItemClick">视频</tab-item>
        <tab-item @on-item-click="onItemClick">作业</tab-item>
        <tab-item @on-item-click="onItemClick">测验</tab-item>
        <tab-item @on-item-click="onItemClick">答疑</tab-item>
      </tab>
    </sticky>

    <transition name="fade" mode="out-in">
      <div v-if="indexActive == 0" key="0" class="video-list">
        <div v-for="chapter in courseVideo.course.courseChapters" :key="chapter.id">
          <Collapse v-model="showSection" simple>
            <Panel v-for="section in chapter.courseSections" :key="section.id"
              :name="section.id">
              {{section.name}}
              <div slot="content">
                <Collapse v-model="showPoint">
                  <Panel v-for="coursePoint in section.courseSectionPoints" :key="coursePoint.id"
                    name="1">
                    {{coursePoint.name}}
                    <div slot="content">
                      <div class="class-item clearfix" @click="openCheck(section.id, coursePoint.id, coursePoint.name)">
                        <span class="already">已学{{studyLog[chapter.id][section.id][coursePoint.id]}}</span>
                        <span class="time"><i></i>{{ coursePoint.duration }}</span>
                        <span v-if="coursePoint.paid_free === '0'" style="float: right; color: green">免费</span>
                      </div>
                    </div>
                  </Panel>
                </Collapse>
              </div>
            </Panel>
          </Collapse>
        </div>
      </div>

      <div v-else-if="indexActive == 1" key="1">
        <div class="tab-pal">
          <div class="workDetail">
            <span>应交作业<strong class="must">{{ courseHomework.homeworks }}</strong>次，实交作业<strong class="real">{{ courseHomework.submit_num }}</strong>次</span>
          </div>
          <div class="submitDltList">
            <ul>
              <div v-for="chapter in courseHomework.course.courseChapters">
                <div v-for="section in chapter.courseSections">
                  <li v-if="section.homework != '' && section.homework != null">
                    <div class="item">
                      <h5>{{ section.name }}</h5>
                      <div class="workName clearfix">
                        <span class="fl">作业</span>
                        <strong class="fr" v-html="section.homework" @click="homeworkContent(section.homework)"></strong>

                      </div>
                      <div class="submitDlt clearfix">
                        <span class="fl">提交</span>
                        <div class="dlt fr">
                          <div class="pic" v-if="section.userHomework.length === 0 || section.userHomework[0].status == 3">
                            <!--<Upload-->
                              <!--name="homeworkImg"-->
                              <!--:format="['jpg','jpeg','png']"-->
                              <!--:max-size="5120"-->
                              <!--:action="uploadUrl + '&section_id=' + section.id + '&course_id=' + id"-->
                              <!--:on-success="uploadSuccess"-->
                              <!--:on-error="uploadError"-->
                              <!--:on-exceeded-size="outSize">-->
                              <!--<i-button type="info" icon="ios-cloud-upload-outline">上传作业</i-button>-->
                            <!--</Upload>-->
                            <Button @click="uploadImg(section.id, id)">上传作业</Button>
                          </div>
                          <div v-if="section.userHomework.length != 0 && section.userHomework[0].status != 3">
                            <div class="pic" v-for="pic in section.userHomework[0].pic_url.split(';').filter(function (pics) { return !(pics === ''); })">
                              <img :src="pic" alt="上传作业" @click="showHomework(pic)" />
                            </div>
                          </div>
                          <span class="tip">{{ section.userHomework.length === 0 ? '未提交' : section.userHomework[0].status == 1 ? '已提交' : section.userHomework[0].status == 2 ? '审核通过' : '审核未通过' }}</span>
                          <span class="viedo" @click="homeworkExplain(section.explain_video_url, section.userHomework[0].status)">
                            视频讲解
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>

      <div v-else-if="indexActive == 2" key="2">
        <div class="tab-pal">
          <div class="workDetail">
            <span>应考<strong class="must">{{ courseTest.examnum }}</strong>次，已通关<strong class="real">{{ courseTest.examuser }}</strong>次</span>
          </div>
          <div class="submitDltList">
            <ul>
              <li v-for="(test, index) in courseTest.list" :key="test.id">
                <div class="item">
                  <h5>第{{ index+1 }}单元<span>{{ test.chapterName }}</span></h5>
                  <div class="test">
                    <strong>{{ test.examName }}</strong>
                    <a :href="test.link + '&token=' + token" class="look">查看答卷</a>
                    <span class="tip">已通关</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </transition>

    <div class="viedoCont" v-show="videoData.isAuth">
      <div class="cont">
        <div class="close-video-btn">
          <img src="../../../assets/img/close-video-btn.png"  @click="hideModal" >
        </div>
        <video class="video" id="video" :src="videoData.video_url" :poster="videoData.pic" controls="controls" autoplay>
        </video>
      </div>
    </div>

    <Modal
      v-model="homework_detail"
      title="作业详情"
      @on-ok=""
      @on-cancel="">
      <p v-html="homework_content"></p>
    </Modal>

    <Modal
      v-model="homework_show"
      title="作业展示"
      @on-ok=""
      @on-cancel="">
      <img :src="homework_url" alt="错误" width="100%" height="100%" />
    </Modal>

    <SubmitJob :homeworkInfo="homeworkInfo" v-show="showUpload" :showUpload="showUpload" @changeShowUpload="changeShowUpload($event)"></SubmitJob>

  </div>
</template>

<script>
  import { Tab, TabItem, Sticky, Cell, Group } from 'vux'
  import service from "@/http/services/personal";
  import service_course from "@/http/services/course";
  import SubmitJob from '../../../components/SubmitJob'
  import $ from 'jquery'
  export default {
    inject: ['reload'],
    name: "MyClassDetail",
    data(){
      return{
        id: '',
        indexActive: 0,
        course_id: '',
        showContent001: false,
        showContent002: false,
        showContent003: false,
        courseVideo: {
          course: '',
          teacher: '',
          studyLog: ''
        },
        courseHomework: {
          course: '',
          homeworks: '',
          submit_num: ''
        },
        courseTest: {
          examnum: 0,
          examuser: 0,
          list: ''
        },
        flagArray: [],
        flag: false,
        uploadUrl: 'https://api.kaoben.top/personal/homework-upload?access-token=',
        showPoint: '1',
        showChapter: '',
        showSection: '',
        videoData: {
          pic: '',
          video_url: '',
          isAuth: false,
          currentTime: 0
        },
        count_down_int: 0,
        loading: false,
        homework_detail: false,
        homework_show: false,
        homework_content: '',
        homework_url: '',
        showUpload: false,
        showBg: false,
        showClipImg: false,
        homeworkInfo: {
          section_id: 0,
          course_id: 0
        }
      }
    },
    created() {
      this.id = this.$route.params.id;
      this.uploadUrl = this.uploadUrl + this.$cookies.get('access_token');
      this.token = this.$cookies.get('access_token');
    },
    components: {
      Tab,
      TabItem,
      Cell,
      Group,
      Sticky,
      SubmitJob
    },
    methods:{
      addPlayLog() {
        service_course.courseService.addnetlog({
          courseId: this.id,
          pointId: this.point_id,
          currentTime: this.videoData.currentTime,
        }, this.$cookies.get('access_token')).then(res => {
          if (res.status === 200) {
            
          }
        })
      },
      hideModal() {
        this.videoData.isAuth = false;
        this.videoData.video_url = '';
        clearInterval(this.count_down_int);
      },
      onItemClick(index) {
        if (this.indexActive === index) {
          return false;
        }
        this.indexActive = index;
        if (index == 1) {
          service.personalService.courseHomework({'access-token': this.$cookies.get('access_token'), 'course_id': this.id}).then(res => {
            if (res.status === 200) {
              this.courseHomework.course = res.data.course;
              this.courseHomework.homeworks = res.data.homeworks;
              this.courseHomework.submit_num = res.data.submit_num;
            }
          })
        } else if (index == 2) {
          service.personalService.courseTestList({'access-token': this.$cookies.get('access_token'), 'course_id': this.id}).then(res => {
            if (res.status === 200) {
              this.courseTest.examnum = res.data.examnum;
              this.courseTest.examuser = res.data.examuser;
              this.courseTest.list = res.data.list;
            }
          })
        } else if (index == 3) {
          window.location.href="https://exam.kaoben.top/index.php?r=login/ajaxlogin&from=qa&access-token=" + this.$cookies.get('access_token');
        }
      },
      getCourseVideo() {
        service.personalService.courseVideo({'access-token': this.$cookies.get('access_token'), 'course_id': this.id}).then(res => {
          if (res.status === 200) {
            this.courseVideo.course = res.data.course;
            this.courseVideo.teacher = res.data.course.teacher;
            this.studyLog = res.data.studyLog;
            for (var i = 0; i < this.courseVideo.course.courseChapters.length; i++) {
              for (var j = 0; j < this.courseVideo.course.courseChapters[i].courseSections.length; j++) {
                this.flagArray['show' + i + j] = false;
              }
            }
          }
        })
      },
      upDownControl(index1, index2) {
        this.flagArray['show' + index1 + index2] = !this.flagArray['show' + index1 + index2]
        this.flag = this.flagArray['show' + index1 + index2];
        console.log(this.flagArray);
        return this.flag;
      },
      openCheck(section_id, point_id, title) {
        this.loading = true;
        service_course.courseService.check({
          'access-token': this.$cookies.get('access_token') ? this.$cookies.get('access_token') : '',
          'course_id': this.id, 'section_id': section_id,
          'point_id': point_id
          }).then(res => {
          if (res.data.status === 0) {
            this.$Message.info(res.data.message);
            this.$router.push({path: '/Login'});
          } else if (res.data.status === 3) {
            this.$Message.warning(res.data.message);
          } else {
            this.videoData.pic = res.data.pic;
            this.videoData.video_url = res.data.url;
            this.videoData.isAuth = true;
            this.point_id = point_id;
            $('#video').get(0).currentTime = res.data.current_time;
          }
          this.loading = false;
        })
      },

      // 视频讲解
      homeworkExplain(url, status) {
        if (status == 2) {
          this.videoData.video_url = url;
          this.videoData.isAuth = true;
        } else {
          this.$Message.info('作业审核通过后才可观看讲解~');
        }

      },

      uploadSuccess(res, file) {
        if (res.status == 0) {
          this.$Message.success('上传成功！');
          this.reload();
        } else {
          this.$Message.warning(res.message);
        }
      },
      uploadError(res, file) {
        this.$Message.warning('上传失败！');
      },
      outSize(res, file) {
        this.$Message.info('最大上传5M的图片呦！');
      },
      homeworkContent(content) {
        this.homework_detail = !this.homework_detail;
        this.homework_content = content;
      },
      showHomework(src) {
        this.homework_show = !this.homework_show;
        this.homework_url = src;
      },

      // 照片上传
      uploadImg(section_id, course_id){
        this.homeworkInfo.section_id = section_id;
        this.homeworkInfo.course_id = course_id;
        this.showBg = true;
        this.showUpload = true;
      },
      closeModal(){
        this.showBg = false;
        this.showUpload = false;
      },
      changeShowUpload(val){
        this.showUpload = val;
        //console.log(this.showUpload);
        console.log(val);
      }
    },
    mounted: function () {
      this.getCourseVideo();
      let self = this;
      /* 免费试听 */
      $('#video').on("play", function() {
        if (self.indexActive == 0) {
          /* 获取当前播放位置 */
          $('#video').on('timeupdate', function() {
            self.videoData.currentTime = this.currentTime;
          });
          /*启动定时器*/
          self.count_down_int = setInterval(self.addPlayLog, 1000);
        }
      });
      $('#video').on("pause", function() {
        clearInterval(self.count_down_int);
      });
    }
  }
</script>

