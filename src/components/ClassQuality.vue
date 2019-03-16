<!--精品课-->
<template>
    <div>
      <div class="header">
        <div class="logo">
          <img src="../assets/img/logo.png" />
        </div>
        <router-link to="" class="toLogin">登录</router-link>
      </div>

      <!--导航-->
      <Navigation></Navigation>

      <div class="setMeal exCourse">
        <div class="tit">
          <h3>精品课程</h3>
        </div>
        <div class="list">
          <ul>

            <li v-for="course in courseList" :key="course.id">
              <router-link :to="{'name': 'ClassShare', params:{id: course.id}}">
                <div class="item clearfix">
                  <div class="img_txt">
                    <img :src="course.list_pic"  />
                  </div>
                  <div class="info">
                    <h5>{{ course.course_name }}</h5>
                    <span class="by">{{ course.teacher }}</span>
                    <span class="alreay">已更新至{{ course.classrooms }}课时</span>
                    <div class="prise">
                      <span>{{ course.discount }}</span>
                      <span class="bought">{{ course.online }}</span>
                    </div>
                  </div>
                </div>
              </router-link>
            </li>

          </ul>
        </div>
      </div>

    </div>
</template>

<script>
    import service from '@/http/services/course.js'
    export default {
      name: "ClassQuality",
      data() {
        return {
          courseList: ''
        }
      },

      methods: {
        getCourseList: function () {
          service.courseService.courseList({}).then(res => {
            if (res.status === 200) {
              this.courseList = res.data;
            }
          })
        }
      },

      mounted: function () {
        this.getCourseList();
      }
    }
</script>