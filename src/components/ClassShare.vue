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

        <div v-if="activeIndex == 1" key="1">
          <div class="tab-pal">
            <div class="courseLst">
              <h3>课程</h3>
              <div class="list">
                <ul>
                  <li>
                    <a href="#">
                      <div class="item">
                        <h5>2019湖南专升本英语基础知识精讲课</h5>
                        <span class="prise">单价￥199</span>
                        <span class="classHours">课时127</span>
                        <i></i>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div class="item">
                        <h5>2019湖南专升本英语基础知识精讲课</h5>
                        <span class="prise">单价￥199</span>
                        <span class="classHours">课时127</span>
                        <i></i>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div class="item">
                        <h5>2019湖南专升本英语基础知识精讲课</h5>
                        <span class="prise">单价￥199</span>
                        <span class="classHours">课时127</span>
                        <i></i>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div class="item">
                        <h5>2019湖南专升本英语基础知识精讲课</h5>
                        <span class="prise">单价￥199</span>
                        <span class="classHours">课时127</span>
                        <i></i>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </transition-group>


    </div>

    <Share v-if="share" :share="share" @changeShare="changeShare($event)"></Share>

    <div class="botFixed" v-show="!pay">
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
                <strong>￥{{ courseInfo.course.price }}</strong>
                <span>8门课</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="right" v-if="courseInfo.course && isLogin">
          <router-link :to="{'name': 'PayCenter', params:{courseid: courseInfo.course.id}}" class="btn" :disabled="pay">{{pay ? '已购买' : '立即购买'}}</router-link>
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
        name: "ClassShare",
      data(){
        return{
          id: '',
          activeIndex: 0,
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
          isLogin: false
        }
      },
      components: {
        Tab,
        TabItem
      },
      created() {
        this.id = this.$route.params.id;
        console.log("id",this.id);
        this.courseid = this.$route.params.id;
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
        onItemClick(index){
          this.activeIndex = index;
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
              // console.log(this.courseInfo);
            }
          })
        },

        getCourseVideo() {
          service_course.courseService.courseVideo({'course_id': this.courseid, 'access-token': this.$cookies.get('access-token')}).then(res => {
            if (res.status === 200 && res.data.status === 0) {
              this.courseVideo = res.data.course;
              for (var i = 0; i < this.courseVideo.courseChapters.length; i++) {
                for (var j = 0; j < this.courseVideo.courseChapters[i].courseSections.length; j++) {
                  this.flagArray['show' + i + j] = false;
                }
              }
              console.log(this.flagArray);
              this.pay = (res.data.ispay != 0);
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
                // console.log(this.courseHomework);
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
      },
    }
</script>

<style>
  .detailImg {
    position: relative;
  }

  .detailImg .share {
    width: 0.45rem;
    height: 0.45rem;
    background: url(../assets/img/icon12.png) no-repeat center rgba(0, 0, 0, 0.5);
    background-size: 0.3rem 0.3rem;
    position: absolute;
    top: 0.2rem;
    right: 0.2rem;
    z-index: 10;
  }

  .detailImg .img {
    display: block;
    width: 100%;
  }

  .detailImg .goback {
    width: 0.45rem;
    height: 0.45rem;
    background: url(../assets/img/goback.png) no-repeat center rgba(0, 0, 0, 0.5);
    background-size: 0.3rem 0.3rem;
    position: absolute;
    top: 0.2rem;
    left: 0.2rem;
    z-index: 10;
    border-radius: 1rem;
  }

  .detailImg .classname {
    position: absolute; /*bottom:0;*/
    top: 0.9rem;
    left: 0;
    width: 100%;
    font-size: 0.28rem;
    color: #fff;
  }

  .detailImg .classname strong {
    margin: 0.2rem;
  }

  .detailImg .classname .school {
    padding: 0 0.2rem 0.2rem;
  }

  .detailImg .classname .school span {
    margin-right: 0.2rem;
  }

  .detailImg .classname h5 {
    text-align: center;
    padding: 0 0.2rem;
    font-size: 0.6rem;
    color: #7fd7ff;
    font-weight: bold;
    text-shadow: 0.05rem 0.05rem 0.05rem #000;
    padding-bottom: 0.5rem;
  }

  .detailImg .classname h5 span {
    margin-left: 0.3rem;
  }

  .courseLst {
    padding: 0.2rem;
  }

  .courseLst h3 {
    font-size: 0.32rem;
    color: #333;
    position: relative;
    height: 0.8rem;
    line-height: 0.8rem;
    padding-left: 0.2rem;
  }

  .courseLst h3:before {
    position: absolute;
    top: 0.26rem;
    left: 0;
    content: "";
    width: 0.05rem;
    height: 0.3rem;
    background: #DB2C1B;
  }

  .courseLst .list li {
    padding: 0.2rem 0;
    border-bottom: 1px solid #ececec;
  }

  .courseLst .list li:last-child {
    border: none;
  }

  .courseLst .list li {
    position: relative;
  }

  .courseLst .list li h5 {
    font-size: 0.28rem;
    color: #333;
  }

  .courseLst .list li span {
    font-size: 0.24rem;
    color: #666;
    margin-right: 0.3rem;
  }

  .courseLst .list li i.turn {
    display: inline-block;
    width: 0.3rem;
    height: 0.3rem;
    background: url(../assets/img/icon15.png) no-repeat center;
    background-size: 0.3rem 0.3rem;
    position: absolute;
    top: 0.3rem;
    right: 0.1rem;
  }

  .courseLst .list li i.turn.on {
    display: inline-block;
    width: 0.3rem;
    height: 0.3rem;
    background: url(../assets/img/icon15on.png) no-repeat center;
    background-size: 0.3rem 0.3rem;
    position: absolute;
    top: 0.3rem;
    right: 0.1rem;
  }

  .courseLst .main {
    padding-top: 0.2rem;
  }

  .courseLst .main p {
    font-size: 0.26rem;
    color: #666;
    text-indent: 0.2rem;
  }

  .botFixed {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 99;
    background: #fff;
    overflow: hidden;
  }

  .botFixed .left {
    float: left;
    width: 75%;
    height: 0.88rem;
    overflow: hidden;
  }

  .botFixed .left ul li {
    float: left;
    width: 33.3333%;
    text-align: center;
    padding-top: 0.1rem;
  }

  .botFixed .left ul li i {
    display: block;
    width: 0.32rem;
    height: 0.32rem;
    margin: auto;
  }

  .botFixed .left ul li i.consult {
    background: url(../assets/img/icon13.png) no-repeat center;
    background-size: 0.32rem 0.32rem;
  }

  .botFixed .left ul li i.collect {
    background: url(../assets/img/icon14.png) no-repeat center;
    background-size: 0.32rem 0.32rem;
  }

  .botFixed .left ul li i.collect.on {
    background: url(../assets/img/icon14on.png) no-repeat center;
    background-size: 0.32rem 0.32rem;
  }

  .botFixed .left ul li span {
    font-size: 0.22rem;
    color: #333;
  }

  .botFixed .left ul li.money {
    background: #f3f2f7;
    height: 0.88rem;
  }

  .botFixed .left ul li.money strong {
    display: block;
    font-size: 0.28rem;
    color: #DB2C1B;
    line-height: 0.33rem;
  }

  .botFixed .right {
    float: right;
    width: 25%;
  }

  .botFixed .right .btn {
    width: 100%;
    height: 0.88rem;
    font-size: 0.3rem;
    color: #fff;
    background: #DB2C1B;
    cursor: pointer;
    display: block;
    text-align: center;
    line-height: 0.88rem;
  }
</style>
