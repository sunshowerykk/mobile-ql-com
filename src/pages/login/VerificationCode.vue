<template>
  <div class="font-box verification-code">
    <TopBack>
      <span slot="headerTxt">忘记密码</span>
    </TopBack>

    <!--登录-->
    <div class="loginform">
      <div class="form">
        <ul>
          <li>
            <span class="lecon numBtn">+86<i class="icon"></i></span>
            <input type="text" placeholder="请输入手机号码" v-model="changeForm.phone" class="text" />
          </li>
          <li>
            <label for="" class="lecon">密码</label>
            <input type="password" autocomplete="new-password" v-model="changeForm.password" placeholder="请输入新密码" class="text" />
          </li>
          <li>
            <label for="" class="lecon">验证码</label>
            <input type="text" placeholder="请输入验证码" v-model="changeForm.change_password_code" class="text" />
            <button class="getbtn" @click="handleSms">获取验证码</button>
          </li>
        </ul>
        <div class="btnmod">
          <button class="btn" @click="handlePassword">确认修改</button>
        </div>
        <div class="otherLogin">
          <router-link to="/Login"  class="pwdLogin" replace >密码登录</router-link>
          <router-link to="/Register">注册</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import service from '@/http/services/user.js'
    export default {
        name: "VerificationCode",
        data() {
          return{
            changeForm: {
              phone: '',
              password: '',
              change_password_code: ''
            }
          }
        },
        methods: {
          //获取验证码
          handleSms: function() {
            let reg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
            if (reg.test(this.changeForm.phone)) {
              if (this.changeForm.password && this.changeForm.password.length >= 6) {
                service.userService.smsCode({channel: 'changepassword', phone: this.changeForm.phone}).then(res => {
                  if(res.status === 200 && res.data.status === 0) {
                    this.$Message.success(res.data.message)
                  } else {
                    this.$Message.error(res.data.message)
                  }
                });
              } else {
                this.$Message.warning('密码不能低于6位');
              }
            } else {
              this.$Message.warning('电话号码格式不正确');
            }
          },
          //修改密码
          handlePassword: function() {
            let reg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
            if (!reg.test(this.changeForm.phone)) {
              this.$Message.warning('电话号码格式不正确')
              return false;
            }
            if (this.changeForm.password.length < 6) {
              this.$Message.warning('密码不能低于6位')
              return false;
            }
            service.userService.changePassword(this.changeForm).then(res => {
              if(res.status === 200 && res.data.status === 0) {
                this.$Message.success(res.data.message);
                this.$router.push({ path: "/login" });
              } else{
                this.$Message.error(res.data.message)
              }
            })
          }
        },
    }
</script>
