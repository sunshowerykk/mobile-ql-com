<template>
    <div class="font-box">
      <TopBack>
        <span slot="headerTxt">注册</span>
      </TopBack>
      <div class="registerform" v-loading="loading">
        <div class="form">
          <ul>
            <li>
              <i class="icon tel"></i>
              <input type="text" placeholder="请输入手机号码" v-model="registerForm.phone" class="text" />
            </li>
            <li>
              <i class="icon yma"></i>
              <input type="text" placeholder="请输入验证码" v-model="registerForm.smscode" class="text" />
              <button class="getbtn" @click="handleSms">获取验证码</button>
            </li>
            <li>
              <i class="icon username"></i>
              <input type="text" placeholder="用户名" class="text nametxt" v-model="registerForm.username" />
              <!-- <span class="tip">务必填写真实姓名,财务结算实用</span> -->
            </li>
            <li>
              <i class="icon pwd"></i>
              <input type="password" autocomplete="new-password" placeholder="请输入密码" v-model="registerForm.password" class="text" />
            </li>
          </ul>
          <button class="btn" @click="handleRegiter">提交</button>
        </div>
      </div>
    </div>
</template>

<script>
  import service from '@/http/services/user.js'
  export default {
    name: "Register",
    data() {
      return {
        registerForm: {
          phone: '',
          password: '',
          username: '',
          smscode: '',
          invite: ''
        },
        smsForm: {
          channel: 'signup',
        },
        loading: false
      }
    },
    methods: {
      //获取注册表单
      handleRegiter: function () {
        if (!this.registerForm.phone) {
          this.$Message.warning('手机号不能为空');
          return false;
        } else if (!this.registerForm.smscode) {
          this.$Message.warning('验证码不能为空');
          return false;
        } else if (!this.registerForm.username) {
          this.$Message.warning('用户名不能为空');
          return false;
        } else if (!this.registerForm.password) {
          this.$Message.warning('密码不能为空');
          return false;
        }
        this.loading = true;
        service.userService.register(this.registerForm).then(res => {
          if(res.status === 200 && res.data.status === 0) {
            this.$router.push({ path: "/login" });
          } else {
            this.$Message.error('验证失败，请稍后再试');
          }
          this.loading = false;
        })
      },
      //获取验证码
      handleSms: function() {
        let reg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
        if (reg.test(this.registerForm.phone)) {
          service.userService.smsCode({channel: 'signup',phone: this.registerForm.phone}).then(res => {
            if(res.status === 200 && res.data.status === 0) {
              this.$Message.success('短信验证码发送成功');
            } else {
              this.$Message.warning(res.data.message);
            }
          });
        } else {
          this.$Message.warning('电话号码格式不正确');
        }
      },
    },
    mounted () {
      if (this.$route.query.invite) {
        this.$cookies.set("invite", this.$route.query.invite, 60*60*24*20);
      }
      this.registerForm.invite = this.$route.query.invite || this.$cookies.get("invite");
    }
  }
</script>
