<template>
    <div class="font-box">
      <TopBack>
        <span slot="headerTxt">登录</span>
      </TopBack>
      <div class="loginform">
        <div class="form">
          <ul>
            <li>
              <span class="lecon numBtn">+86<i class="icon"></i></span>
              <input type="text" placeholder="请输入手机号码" v-model="loginForm.phone" class="text" />
            </li>
            <li>
              <label for="" class="lecon">密码</label>
              <input type="password" autocomplete="new-password" placeholder="请输入密码" v-model="loginForm.password" class="text" />
            </li>
          </ul>
          <div class="btnmod">
            <button class="btn" @click="handleLogin">登录</button>
          </div>
          <div class="otherLogin clearfix">
            <a><router-link to="/Register">注册</router-link></a>
            <router-link to="/VerificationCode" class="ymaLogin" replace >忘记密码?</router-link>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import userService from "@/http/services/user.js";
export default {
  name: "login",
  data() {
    return {
      loginForm: {
        phone: "",
        password: ""
      }
    };
  },

  methods: {
    handleLogin: function() {
      userService.userService.signIn(this.loginForm).then(res => {
        if (res.status === 200 && res.data.status === 0) {
          this.$cookies.set("access_token", res.data.access_token);
          this.$cookies.set("access_role", res.data.role);
          const role = res.data.role;
          if (role == "student") {
            this.$router.push({ path: "/index" });
          } else if (role == "teacher") {
            //角色是教师,跳教师首页
            this.$router.push({ path: "/index" });
          } else if (role.indexOf("marketer") > -1) {
            //角色是市场专员,跳市场专员首页
            this.$router.push({ path: "/index" });
          } else {
            this.$router.push({ path: "/index" });
          }
        } else {
          this.$Message.error(res.data.msg);
        }
      });
    }
  }
};
</script>
