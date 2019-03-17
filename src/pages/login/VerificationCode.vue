<template>
  <div class="font-box verification-code">
    <TopBack>
      <span slot="headerTxt">忘记密码</span>
    </TopBack>

    <!--登录-->
    <div class="loginform">
      <div class="form">
        <form>
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
          <div class="otherLogin clearfix">
            <router-link to="/Login"  class="pwdLogin" replace >密码登录</router-link>
            <!-- <span class="ymaLogin on">修改密码</span> -->
          </div>
        </form>
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
            if (!this.changeForm.phone) {
              this.$Message.warning('电话号码不能为空')
              return
            }
            service.userService.smsCode({phone: this.changeForm.phone}).then(res => {
              if(res.status === 200 && res.data.status === 0) {
                this.$Message.success(res.data.message)
              } else {
                this.$Message.error(res.data.message)
              }
            })
          },
          //修改密码
          handlePassword: function() {
            if (!this.changeForm.password) {
              this.$Message.warning('密码不能为空')
              return
            }
            service.userService.changePassword(this.changeForm).then(res => {
              if(res.status === 200 && res.data.status === 0){
                this.$Message.success(res.data.message)
              }
              else{
                this.$Message.error(res.data.message)
              }
            })
          }
        },
    }
</script>
