<template>
  <div class="font-box">
    <TopBack>
      <span slot="headerTxt">我的授课</span>
    </TopBack>

    <div class="mycourseList">
      <!--有课前start-->
      <div class="noCourse" v-show="courseList.length === 0">
        <h5>您暂时还没有课程</h5>
      </div>

      <!--选课后 start-->
      <div class="lst" v-show="courseList.length != 0">
        <ul>
          <li v-for="course in courseList">
            <div class="item clearfix">
              <div class="pic">
                <img :src="course.list_pic"  />
              </div>
              <div class="txt">
                <h5>{{ course.course_name }}</h5>
                <span>{{ course.teacher }}</span>
                <strong v-if="course.type === 1">已更新{{ course.classrooms }}集</strong>
                <strong v-if="course.type === 2">公开课</strong>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!--选课后 end-->
    </div>

  </div>
</template>

<script>
    import service_teacher from "@/http/services/teacher.js";
    export default {
      name: "TeacherClass",
      data() {
        return {
          courseList: '',
          token: '',
          loading: true
        }
      },

      created() {
        this.token = this.$cookies.get('access_token');
      },

      methods: {
        getTeacherClass() {
          service_teacher.teacherService.getTeacherClass({'access-token': this.token}).then(res => {
            if (res.status === 200 && res.data.status === 0) {
              this.courseList = res.data.courseList;
              this.loading = false;
              console.log(this.courseList);
            } else {
              this.$Message.warning(res.data.message);
            }
          })
        }
      },

      mounted: function () {
        this.getTeacherClass();
      }
    }
</script>

