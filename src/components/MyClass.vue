<template>
    <div class="font-box bg">
      <div class="tab-hd">
        <ul class="tab-nav clearfix">
          <li :class="[myindex == 0 ? 'on' : '']"><a href="javascript:;" @click="changeTab(0)">我的学习</a></li>
          <li :class="[myindex == 1 ? 'on' : '']"><a href="javascript:;" @click="changeTab(1)">学习计划</a></li>
        </ul>
      </div>

      <div class="tab-bd">
        <div class="tab-pal" v-show="!myindex">
          <div class="duration">
            <strong>学习时长</strong>
            <span>{{ parseInt(study_time / 60) }}小时{{ study_time % 60 }}分</span>
            <img src="../assets/img/img18.png"  />
          </div>
          <div class="mycourseList">
            <div class="tit clearfix">
              <a>
                我的课程<span class="num">({{ course_count }})</span>
                <span class="all">全部<i></i></span>
              </a>
            </div>

            <!--选课前 start-->
            <div class="noCourse" v-show="course_count == 0">
              <h5>您暂时还没有课程</h5>
              <a href="#" class="go">发现课程</a>
            </div>
            <!--选课前 end-->

            <!--选课后 start-->
            <div class="lst" v-show="course_count != 0 ">
              <ul>
                <li v-for="course in course_list">
                  <router-link :to="{name: 'MyClassDetail',params:{id: course.course_id}}">
                    <div class="item clearfix">
                      <div class="pic">
                        <img :src="course.list_pic"  />
                      </div>
                      <div class="txt">
                        <h5>{{ course.course_name }}</h5>
                        <span>{{ course.teachers[0] }} 等</span>
                        <strong>已更新{{ course.chapters }}集</strong>
                      </div>
                    </div>
                  </router-link>
                </li>
              </ul>
            </div>
            <!--选课后 end-->
          </div>
        </div>
        <div class="tab-pal" v-show="myindex">
          <div class="studyPlan">
            <div class="plan">
              <div class="tit">
                <h5><i></i>一备考准备阶段</h5>
              </div>
              <div class="pic">
                <img src="../assets/img/img19.png"  />
              </div>
              <div class="txt">
                <p><b>1屏蔽干扰</b>对专升本考试有一定的了解对专升本考试有一定的了解</p>
                <p>2屏蔽干扰对专升本考试有一定的了解对专升本考试有一定的了解</p>
                <p><b>3屏蔽干扰</b>对专升本考试有一定的了解对专升本考试有一定的了解</p>
              </div>
            </div>
            <div class="plan">
              <div class="tit">
                <h5><i></i>二备考准备阶段</h5>
              </div>
              <div class="txt">
                <p><b>1屏蔽干扰</b>对专升本考试有一定的了解对专升本考试有一定的了解</p>
                <p>2屏蔽干扰对专升本考试有一定的了解对专升本考试有一定的了解</p>
                <p><b>3屏蔽干扰</b>对专升本考试有一定的了解对专升本考试有一定的了解</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import  service from '@/http/services/personal.js'
    export default {
      name: "MyClass",
      data(){
          return{
            tabIndex: 0,
            myindex: 0,
            datas:[],
            isLogin: flase,
            // courseList: {
            //   course_list: '',
            //   course_count: 0,
            //   study_time: 0
            // },
            course_list: '',
            course_count: 0,
            study_time: 0
          }
      },
      methods: {
          changeTab(index){
            this.myindex = index;
          },

        getCourseList() {
          service.personalService.courseList({'access-token': this.$cookies.get('access_token')}).then(res => {
            if (res.status === 200) {
              console.log(res.data);
              this.course_list = res.data.course_list;
              this.course_count = res.data.course_count;
              this.study_time = res.data.study_time;
              this.datas = this.course_count;
            }
          })
        }
      },

      mounted: function () {
        this.getCourseList();
      }
    }
</script>

<style scoped>
  .bg {
    background: #fafafa;
    height: 100%;
    position: absolute;
    width: 100%;
  }
  .tab-nav {
    text-align: center;
    padding: 0.2rem 0;
    font-size: 0;
    background: #fff;
  }

  .tab-nav li {
    display: inline-block;
    *display: inline;
    zoom: 1;
    float: none;
    width: auto;
    border: 1px solid #DB2C1B;
    padding: 0 0.2rem;
    height: 0.5rem;
    line-height: 0.5rem;
    background: #DB2C1B;
    color: #fff;
  }

  .tab-nav li a {
    display: block;
    font-size: 0.28rem;

  }

  .tab-nav li.on {
    background: none;
    border-bottom: 1px solid #DB2C1B;
  }
  .tab-nav li.on a{
    color: #DB2C1B;
  }

  /*.page9{background:#f2f2f2;}*/
  .duration {
    background: url(../assets/img/mystudyBg.png) no-repeat center;
    background-size: 100% 100%;
    padding: 0.3rem 0;
    text-align: center;
  }

  .duration strong {
    font-size: 0.42rem;
    color: #fff;
  }

  .duration span {
    font-size: 0.28rem;
    color: #fff;
    margin: 0 0.3rem 0 0.2rem;
  }

  .duration img {
    vertical-align: top;
    width: 1rem;
  }

  .mycourseList .tit {
    height: 0.7rem;
    line-height: 0.7rem;
    background: #fff;
    padding: 0 0.2rem;
  }

  .mycourseList .tit a {
    font-size: 0.28rem;
    color: #333;
  }

  .mycourseList .tit span.all {
    float: right;
    font-size: 0.26rem;
  }

  .mycourseList .tit span.all i {
    display: inline-block;
    width: 0.3rem;
    height: 0.3rem;
    background: url(../assets/img/icon20.png) no-repeat center;
    background-size: 0.3rem 0.3rem;
  }

  .mycourseList .noCourse {
    padding-top: 2rem;
    text-align: center;
  }

  .mycourseList .noCourse h5 {
    font-size: 0.28rem;
    color: #999;
    margin-bottom: 0.2rem;
    text-align: center;
  }

  .mycourseList .noCourse .go {
    display: block;
    margin: 0 auto;
    width: 1.7rem;
    height: 0.6rem;
    line-height: 0.6rem;
    background: #DB2C1B;
    color: #fff;
    text-align: center;
    font-size: 0.26rem;
    border-radius: 0.1rem;
  }
  .studyPlan {
    background: #fff;
    padding: 0.2rem;
  }

  .studyPlan .tit {
    height: 0.7rem;
    line-height: 0.7rem;
    margin-bottom: 0.1rem;
  }

  .studyPlan .tit h5 {
    font-size: 0.3rem;
    color: #333;
  }

  .studyPlan .tit h5 i {
    display: inline-block;
    width: 0.32rem;
    height: 0.32rem;
    vertical-align: top;
    margin-right: 0.1rem;
    margin-top: 0.2rem;
    background: url(../assets/img/icon23.png) no-repeat center;
    background-size: 0.32rem 0.32rem;
  }

  .studyPlan .pic {
    padding-bottom: 0.2rem;
  }

  .studyPlan .pic img {
    display: block;
    width: 100%;
  }

  .studyPlan .plan {
    padding-bottom: 0.2rem;
  }

  .studyPlan .txt {
    padding: 0.2rem;
    border: 1px solid #ECECEC;
    box-shadow: -1px 6px 10px 0 rgba(0, 0, 0, 0.1);
    border-radius: 0.1rem;
  }

  .studyPlan .txt p {
    font-size: 0.26rem;
    padding-bottom: 0.1rem;
  }

  .mycourseList .lst {
    padding: 0.2rem;
    background: #fff;
  }

  .mycourseList .lst ul li {
    padding: 0.2rem 0;
    border-bottom: 1px solid #ECECEC;
  }

  .mycourseList .lst ul li:last-child {
    border-bottom: none;
  }

  .mycourseList .lst ul li .pic {
    float: left;
    width: 33%;
  }

  .mycourseList .lst ul li .pic img {
    display: block;
    width: 100%;
  }

  .mycourseList .lst ul li .txt {
    float: right;
    width: 64%;
  }

  .mycourseList .lst ul li .txt h5 {
    font-size: 0.3rem;
    color: #333;
  }

  .mycourseList .lst ul li .txt span {
    font-size: 0.22rem;
    color: #999;
    display: block;
  }

  .mycourseList .lst ul li .txt strong {
    font-size: 0.26rem;
    color: #DB2C1B;
  }

</style>
