<template>
  <div class="font-box bg">

    <div class="detailImg" v-if="courseInfo">
      <a class="goback" @click="goBack"></a>
      <a class="share" @click="shareFn"></a>
      <img :src="courseInfo.course.home_pic" class="img"  />
      <div class="classname">
        <strong>{{ courseInfo.course.course_name }}</strong>
        <div class="school" >
          <span>{{ courseInfo.teacher[0].unit }}</span>
          <span>{{ courseInfo.teacher[0].teacher_name }} 等</span>
        </div>
      </div>
    </div>

    <div class="course">
      <!--&lt;!&ndash;tabs&ndash;&gt;-->
      <!--<tab active-color="#DB2C1B" default-color="#333333" :line-width="2" class="class-detail-tab-box" v-if="!pay">-->
      <!--<tab-item selected @on-item-click="onItemClick">课程介绍</tab-item>-->
      <!--<tab-item @on-item-click="onItemClick">视频</tab-item>-->
      <!--</tab>-->


      <sticky>
        <tab active-color="#DB2C1B" default-color="#333333" :line-width="2" class="class-detail-tab-box">
          <tab-item selected @on-item-click="onItemClick">简介</tab-item>
          <tab-item @on-item-click="onItemClick">视频</tab-item>
          <tab-item @on-item-click="onItemClick" v-if="pay" v-show="pay">作业</tab-item>
          <tab-item @on-item-click="onItemClick" v-if="pay" v-show="pay">测验</tab-item>
          <tab-item @on-item-click="onItemClick" v-if="pay" v-show="pay">答疑</tab-item>
        </tab>
      </sticky>

      <transition-group name="fade" mode="out-in">

        <div v-if="indexActive == 0" key="0">
          <div class="tab-bd">
            <div class="tab-pal">
              <div class="courseLst">
                <h3>简介</h3>
                <div class="main" v-html="courseInfo.course.intro"></div>
              </div>
            </div>
          </div>
        </div>

        <div v-if="indexActive == 1" key="1">

          <group title="" class="class-group">

            <div v-for="Chapter, index_1 in courseVideo.courseChapters">
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
                            <span class="already" v-if="pay">已学0%</span>
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

        <div v-else-if="indexActive == 2" key="2">
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
                              :disabled="!pay"
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

        <div v-else-if="indexActive == 3" key="3">
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

      </transition-group>

    </div>

    <Share v-if="share" :share="share" @changeShare="changeShare($event)"></Share>

    <div class="botFixed">
      <div class="cont clearfix">
        <div class="left">
          <ul class="clearfix">
            <li>
              <a href="javascript:;">
                <i class="consult"></i>
                <span>咨询</span>
              </a>
            </li>
            <li>
              <a href="javascript:;" v-if="isLogin">
                <i class="collect" :class="{ on: collect}" @click="collectionCourse"></i>
                <span>收藏</span>
              </a>
              <a href="javascript:;" v-if="isLogin == false">
                <router-link :to="{'name': 'Login'}">
                  <i class="collect" :class="{ on: collect}"></i>
                  <span>收藏</span>
                </router-link>
              </a>
            </li>
            <li class="money">
              <a href="javascript:;">
                <strong>￥{{ courseInfo.course.discount }}</strong>
                <span><s>￥{{ courseInfo.course.price }}</s></span>
              </a>
            </li>
          </ul>
        </div>
        <div class="right" v-if="courseInfo.course && isLogin">
          <router-link :to="{'name': 'PayCenter', params:{type: 'course', id: id}}" class="btn" :disabled="pay">{{pay ? '已购买' : '立即购买'}}</router-link>
        </div>
        <div class="right" v-if="courseInfo.course && isLogin == false">
          <router-link :to="{'name': 'Login'}" class="btn">立即购买</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { Tab, TabItem, Sticky, Cell, Group } from 'vux'
  import  service_course from '@/http/services/course.js'
  import service_user from '@/http/services/user.js'
  import service from '@/http/services/personal.js'
  export default {
    inject: ['reload'],
    name: "ClassShare",
    data(){
      return{
        id: '',
        indexActive: 0,
        share: 0,
        pay: false,
        collect: false,
        courseInfo: {
          course: {},
          teacher: [{}]
        },
        courseVideo: '',
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
        courseid: '',
        flagArray: [],
        flag: false,
        isLogin: false,
        uploadUrl: 'http://api.ql.com/personal/homework-upload?access-token=',
      }
    },

    created() {
      this.id = this.$route.params.id;
      this.courseid = this.$route.params.id;
      this.uploadUrl = this.uploadUrl + this.$cookies.get('access_token');
    },

    components: {
      Tab,
      TabItem,
      Cell,
      Group,
      Sticky
    },
    mounted() {
      this.getInfo();
    },
    methods:{
      shareFn(){
        this.share = 1;
      },
      changeShare(msg){
        this.share = msg;
      },
      goBack(){
        this.$router.go(-1);
      },
      getInfo () {
        service_user.userService.isLogin({'access-token': this.$cookies.get('access_token') ? this.$cookies.get('access_token') : ''}).then(res => {
          if (res.status === 200) {
            if (res.data.message == '已登录') {
              this.isLogin = true;
            } else {
              this.isLogin = false;
              this.pay = false;
            }
            // console.log(this.isLogin);
          }
        })
        service_course.courseService.courseShare({'courseid': this.courseid, 'access-token': this.$cookies.get('access_token')}).then(res => {
          if (res.status === 200) {
            this.pay = (res.data.course.ispay != 0);
            this.courseInfo.course = res.data.course;
            this.courseInfo.teacher = res.data.teacher;
            this.collect = res.data.course.iscollect;
            console.log(this.courseInfo);
          }
        })
      },
      getCourseVideo() {
        service_course.courseService.courseVideo({'course_id': this.courseid, 'access-token': this.$cookies.get('access_token')}).then(res => {
          if (res.status === 200 && res.data.status === 0) {
            this.courseVideo = res.data.course;
            for (var i = 0; i < this.courseVideo.courseChapters.length; i++) {
              for (var j = 0; j < this.courseVideo.courseChapters[i].courseSections.length; j++) {
                this.flagArray['show' + i + j] = false;
              }
            }
            console.log(this.flagArray);
            this.pay = (res.data.ispay != 0);
            console.log(res.data);
            // this.pay = true;
            // console.log(this.courseVideo.courseChapters);
          } else {
            alert('something wrong!');
          }
        })
      },
      onItemClick(index){
        if (index == 1) {
          this.getCourseVideo();
        }else if (index == 2) {
          service.personalService.courseHomework({'access-token': this.$cookies.get('access_token'), 'course_id': this.courseid}).then(res => {
            if (res.status === 200) {
              this.courseHomework.course = res.data.course;
              this.courseHomework.homeworks = res.data.homeworks;
              this.courseHomework.submit_num = res.data.submit_num;
              console.log(this.courseHomework);
            }
          })
        }else if (index == 3) {
          service.personalService.courseTestList({'access-token': this.$cookies.get('access_token'), 'course_id': this.id}).then(res => {
            if (res.status === 200) {
              this.courseTest.examnum = res.data.examnum;
              this.courseTest.examuser = res.data.examuser;
              this.courseTest.list = res.data.list;
              // console.log(this.courseTest);
            }
          })
        }
        this.indexActive = index;
      },
      upDownControl(index1, index2) {
        this.flagArray['show' + index1 + index2] = !this.flagArray['show' + index1 + index2]
        this.flag = this.flagArray['show' + index1 + index2];
        // console.log(this.flagArray);
        return this.flag;
      },
      collectionCourse() {
        this.collect = !this.collect;
        service.personalService.collectionCourse({'access-token': this.$cookies.get('access_token'), 'course_id': this.id}) .then(res => {
          if (res.status === 200 && res.data.status === 0) {
            // console.log('操作成功' + this.collect);
            if (this.collect == true) {
              this.$Message.success('收藏成功！');
            } else {
              this.$Message.success('已取消收藏！');
            }
          } else {
            console.log(res.data.message + this.collect);
          }
        })
      },

      openCheck(section_id, point_id, title) {
        service_course.courseService.check({'access-token': this.$cookies.get('access_token') ? this.$cookies.get('access_token') : '',
                                              'course_id': this.courseid, 'section_id': section_id,
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
        this.$Message.error('上传失败！');
      }
    },
  }
</script>
