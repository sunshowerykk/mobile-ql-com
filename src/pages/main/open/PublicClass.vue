<!--公开课-->
<template>
    <div>
      <div class="setMeal publicClass">
        <div class="tit">
          <h3>升本公开课</h3>
        </div>
        <div class="list">
          <div class="viedoCont" v-if="showVideo">
            <div class="cont">
              <div class="close-video-btn">
                <img src="../../../assets/img/close-video-btn.png"  @click="hideModal" >
              </div>
              <video class="video" id="video" :src="course_url" :poster="pic" controls="controls" autoplay>
              </video>
            </div>
          </div>
          <ul>
            <li v-for="cass in classes" :key="cass.id">
                <div class="item" @click="check(cass.id,cass.list_pic)">
                  <img :src="cass.list_pic">
                  <div class="txt" >
                    <span class="classtype">{{cass.course_name}}</span>
                    <strong class="tip">{{cass.intro}}</strong>
                    <span class="time">
                      <i></i>
                      <label>{{cass.duration}}</label>
                    </span>
                  </div>
                </div>
            </li>
          </ul>
        </div>
      </div>
      <template>
        <Modal
          v-model="buycourse"
          title="该课程尚未购买"
          @on-ok="courseorder"
          @on-cancel="cancel">
          <p>是否购买此课程？</p>
        </Modal>
      </template>
    </div>
</template>

<script>
import service from "@/http/services/publicClass.js";
export default {
  name: "PublicClass",
  data() {
    return {
      course_id: "",
      access_token: "",
      pic: "",
      course_url: "",
      showVideo: false,
      buycourse: false,
      classes: [{}]
    };
  },
  methods: {
    hideModal() {
      this.showVideo = false;
    },
    hideModalorder() {
      this.buycourse = false;
    },
    show() {
      this.showVideo = true;
    },
    showorder() {
      this.buycourse = true;
    },
    cancel() {
      this.$Message.warning("已取消");
    },
    initclasslist: function() {
      service.publicClassService.list().then(res => {
        if (res.status === 200) {
          this.classes = res.data;
        }
      });
    },
    check(course_id, list_pic) {
      this.course_id = course_id;
      service.publicClassService
        .check({ course_id: course_id, "access-token": this.access_token })
        .then(res => {
          if (res.status === 200) {
            if (res.data.status == 0) {
              this.warning();
            }
            if (res.data.status == 3) {
              this.showorder();
            }
            if (res.data.status == 4 || res.data.status == 2) {
              this.course_url = res.data.url;
              this.pic = list_pic;
              alert(res.message);
              this.show();
            }
          }
        });
    },
    courseorder() {
      this.$router.push("/OpenCoursePayCenter/" + this.course_id);
    },
    warning() {
      this.$Message.warning("尚未登陆");
    }
  },
  mounted() {
    this.access_token = this.$cookies.get("access_token");
    // this.access_token = 'QTV6nXjOqjYH9xQAnb0teVDggGQMD87B';
    this.initclasslist();
  }
};
</script>
