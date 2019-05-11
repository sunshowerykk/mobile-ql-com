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
          <img src="../../../assets/img/img18.png"  />
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
            <router-link to="/ClassQuality"><span class="go">发现课程</span></router-link>
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
              <img src="../../../assets/img/img19.png"  />
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
  import  service from '@/http/services/personal'
  export default {
    name: "MyClass",
    data(){
      return{
        tabIndex: 0,
        myindex: 0,
        datas:[],
        isLogin: false,
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

