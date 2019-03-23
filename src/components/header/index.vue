<template>
  <div class="header">
    <div class="logo">
        <img src="@/assets/img/logo.png" />
    </div>
    <router-link :to="this.head.link" class="toLogin" >{{ head.text }}</router-link>
  </div>
</template>

<script>
import service_user from "@/http/services/user";
export default {
  name: "headerBar",
  data() {
    return {
      //头部显示登录，或者欢迎
      head: {
        text: "",
        link: ""
      },
      token: this.$cookies.get("access_token"),
      hasToken: this.$cookies.isKey("access_token")
    };
  },
  methods: {
    //判断是否登录
    getLogInfo: function() {
      if (!this.token) {
        this.head.text = "登录";
        this.head.link = "/Login";
      } else {
        service_user.userService
          .getSet({ "access-token": this.token })
          .then(res => {
            if (res.status === 200) {
              this.head.text = "hi, " + res.data.username;
              this.head.link = "/UserCenter";
            }
          });
      }
    }
  },
  mounted() {
    this.getLogInfo();
  }
};
</script>
<style>
/*头部 start*/
.header {
  background: #db2c1b;
  height: 0.88rem;
  line-height: 0.88rem;
  position: relative;
}

.header .logo {
  width: 1.25rem;
  margin: 0 auto;
  padding-top: 0.25rem;
}

.header .logo img {
  display: block;
  width: 100%;
}

.header .toLogin {
  font-size: 0.26rem;
  display: inline-block;
  height: 0.88rem;
  line-height: 0.88rem;
  top: 0;
  right: 0.2rem;
  position: absolute;
  color: #fff;
}
/*头部 end*/
</style>
