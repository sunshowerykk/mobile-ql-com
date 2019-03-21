<template>
  <div class="font-box">
    <TopBack>
      <span slot="headerTxt">{{ courseVideo.course.course_name }}</span>
    </TopBack>
    <div class="detailImg">
      <div class="img-box">
        <div class="classname">
          <h5>{{ courseVideo.course.course_name }}</h5>
          <strong>{{ courseVideo.course.course_name }}</strong>
          <div class="school">
            <span>{{ courseVideo.teacher.unit}}</span>
            <span>{{ courseVideo.teacher.username}} 等</span>
          </div>
        </div>
      </div>
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
      <div v-if="indexActive == 0" key="0">

        <group title="" class="class-group">
          <div v-for="Chapter, index_1 in courseVideo.course.courseChapters">
            <div v-for="Section, index_2 in Chapter.courseSections">
              <cell
                class="cell-class"
                :title="Chapter.name + ':' + Section.name"
                :key="index_1 + index_2"
                is-link
                :border-intent="false"
                :arrow-direction="flag ? 'up' : 'down'"
                @click.native="flag = upDownControl(index_1, index_2)"
              ></cell>
              <template v-if="flagArray['show' + index_1 + index_2]">
                <dl class="class-item">

                  <dd v-for="coursePoint in Section.courseSectionPoints">
                    <a href="#" @click="openCheck(Section.id, coursePoint.id, coursePoint.name)">
                      <div class="item clearfix">
                        <div class="left">
                          <span class="type">视频</span>
                          <span class="name">{{coursePoint.name}}</span>
                        </div>
                        <div class="right">
                          <span class="already">已学0%</span>
                          <span class="time"><i></i>{{ coursePoint.duration }}</span>
                        </div>
                      </div>
                    </a>
                  </dd>

                </dl>
              </template>
            </div>
          </div>

        </group>
      </div>

      <!--<div v-else-if="indexActive == 1" key="1">-->
        <!--<div class="tab-pal">-->
          <!--<div class="workDetail">-->
            <!--<span>应交作业<strong class="must">{{ courseHomework.homeworks }}</strong>次，实交作业<strong class="real">{{ courseHomework.submit_num }}</strong>次</span>-->
          <!--</div>-->
          <!--<div class="submitDltList">-->
            <!--<ul>-->
              <!--<div v-for="chapter in courseHomework.course.courseChapters">-->
                <!--<div v-for="section in chapter.courseSections">-->
                  <!--<li v-if="section.homework != '' && section.homework != null">-->
                    <!--<div class="item">-->
                      <!--<h5>{{ chapter.name + ':  ' + section.name }}</h5>-->
                      <!--<div class="workName clearfix">-->
                        <!--<span class="fl">作业</span>-->
                        <!--<strong class="fr" v-html="section.homework"></strong>-->
                      <!--</div>-->
                      <!--<div class="submitDlt clearfix">-->
                        <!--<span class="fl">提交</span>-->
                        <!--<div class="dlt fr">-->
                          <!--<div class="pic">-->
                            <!--<img :src="section.userHomework.length == 0 ? require('../../../assets/img/img26.png') : section.userHomework[0].pic_url" alt="上传作业" />-->
                          <!--</div>-->
                          <!--<span class="tip">{{ section.userHomework.length == 0 ? '未提交' : section.userHomework[0].status == 1 ? '已提交' : section.userHomework[0].status == 2 ? '审核通过' : '审核未通过' }}</span>-->
                          <!--<a href="#" class="viedo">视频讲解</a>-->
                        <!--</div>-->
                      <!--</div>-->
                    <!--</div>-->
                  <!--</li>-->
                <!--</div>-->
              <!--</div>-->
            <!--</ul>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
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
                      <h5>{{ chapter.name + ':  ' + section.name }}</h5>
                      <div class="workName clearfix">
                        <span class="fl">作业</span>
                        <strong class="fr" v-html="section.homework"></strong>
                      </div>
                      <div class="submitDlt clearfix">
                        <span class="fl">提交</span>
                        <div class="dlt fr">
                          <div class="pic" v-if="section.userHomework.length === 0 || section.userHomework[0].status == 3">
                            <Upload
                              name="homeworkImg"
                              multiple
                              :format="['jpg','jpeg','png']"
                              :max-size="7024"
                              :action="uploadUrl + '&section_id=' + section.id + '&course_id=' + id"
                              :on-success="uploadSuccess"
                              :on-error="uploadError">
                              <i-button type="info" icon="ios-cloud-upload-outline">上传作业</i-button>
                            </Upload>
                          </div>
                          <div v-if="section.userHomework.length != 0 && section.userHomework[0].status != 3">
                            <div class="pic" v-for="pic in section.userHomework[0].pic_url.split(';').filter(function (pics) { return !(pics === ''); })">
                              <img :src="pic" alt="上传作业" />
                            </div>
                          </div>
                          <span class="tip">{{ section.userHomework.length === 0 ? '未提交' : section.userHomework[0].status == 1 ? '已提交' : section.userHomework[0].status == 2 ? '审核通过' : '审核未通过' }}</span>
                          <router-link
                            :to="{'name': 'QualityCourseVideo', params:{title: chapter.name + ':  ' + section.name + '-习题讲解', video_url: section.explain_video_url}}"
                            class="viedo">
                            视频讲解
                          </router-link>
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
              <li v-for="test, index in courseTest.list">
                <div class="item">
                  <h5>第{{ index+1 }}单元<span>{{ test.chapterName }}</span></h5>
                  <div class="test">
                    <strong>{{ test.examName }}</strong>
                    <a href="https://exam.kaoben.top" class="look">查看答卷</a>
                    <span class="tip">已通关</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div v-else-if="indexActive == 3" key="3">
        <div class="tab-pal">
          <div class="workDetail">
            <span>应考<strong class="must">18</strong>次，已通关<strong class="real">12</strong>次</span>
          </div>
          <div class="submitDltList">
            <ul>
              <li>
                <div class="item">
                  <h5>第一单元<span>计算机应用</span></h5>
                  <div class="test">
                    <strong>计算机网络及应用基础</strong>
                    <a href="#" class="look">查看答卷</a>
                    <span class="tip">已通关</span>
                  </div>
                </div>
              </li>
              <li>
                <div class="item">
                  <h5>第一单元<span>计算机应用</span></h5>
                  <div class="test">
                    <strong>计算机网络及应用基础</strong>
                    <a href="#" class="look">查看答卷</a>
                    <span class="tip">已通关</span>
                  </div>
                </div>
              </li>
              <li>
                <div class="item">
                  <h5>第一单元<span>计算机应用</span></h5>
                  <div class="test">
                    <strong>计算机网络及应用基础</strong>
                    <a href="#" class="look">进入测试</a>
                    <span class="tip un">未通关</span>
                  </div>
                </div>
              </li>
              <li>
                <div class="item">
                  <h5>第一单元<span>计算机应用</span></h5>
                  <div class="test">
                    <strong>计算机网络及应用基础</strong>
                    <a href="#" class="look">查看答卷</a>
                    <span class="tip un">未通关</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </transition>

  </div>
</template>

<script>
  import { Tab, TabItem, Sticky, Cell, Group } from 'vux'
  import service from "@/http/services/personal";
  import service_course from "@/http/services/course";
  export default {
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
          teacher: ''
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
        uploadUrl: 'http://api.ql.com/personal/homework-upload?access-token=',
      }
    },
    created() {
      this.id = this.$route.params.id;
      console.log("id",this.id);
      this.uploadUrl = this.uploadUrl + this.$cookies.get('access_token');
    },
    components: {
      Tab,
      TabItem,
      Cell,
      Group,
      Sticky
    },
    methods:{
      onItemClick(index){
        this.indexActive = index;
        if (index == 1) {
          service.personalService.courseHomework({'access-token': this.$cookies.get('access_token'), 'course_id': this.id}).then(res => {
            if (res.status === 200) {
              this.courseHomework.course = res.data.course;
              this.courseHomework.homeworks = res.data.homeworks;
              this.courseHomework.submit_num = res.data.submit_num;
              console.log(this.courseHomework);
            }
          })
        } else if (index == 2) {
          service.personalService.courseTestList({'access-token': this.$cookies.get('access_token'), 'course_id': this.id}).then(res => {
            if (res.status === 200) {
              this.courseTest.examnum = res.data.examnum;
              this.courseTest.examuser = res.data.examuser;
              this.courseTest.list = res.data.list;
              console.log(this.courseTest);
            }
          })
        }
      },
      getCourseVideo() {
        service.personalService.courseVideo({'access-token': this.$cookies.get('access_token'), 'course_id': this.id}).then(res => {
          if (res.status === 200) {
            this.courseVideo.course = res.data.course;
            this.courseVideo.teacher = res.data.course.teacher;
            for (var i = 0; i < this.courseVideo.course.courseChapters.length; i++) {
              for (var j = 0; j < this.courseVideo.course.courseChapters[i].courseSections.length; j++) {
                this.flagArray['show' + i + j] = false;
              }
            }
            console.log(this.courseVideo);
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
        service_course.courseService.check({'access-token': this.$cookies.get('access_token') ? this.$cookies.get('access_token') : '',
          'course_id': this.id, 'section_id': section_id,
          'point_id': point_id}).then(res => {

          if (res.data.status === 0) {
            this.$Message.info(res.data.message);
            this.$router.push({path: '/Login'});
          } else if (res.data.status === 3) {
            this.$Message.warning(res.data.message);
          } else {
            this.$Message.success(res.data.message);
            this.$router.push({name: 'QualityCourseVideo', params:{title: title, video_url: res.data.url}});
          }
        })
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
        console.log('failed');
      }
    },
    mounted: function () {
      this.getCourseVideo();
    }
  }
</script>

