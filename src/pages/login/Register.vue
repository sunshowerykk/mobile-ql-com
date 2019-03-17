<template>
    <div class="font-box">
      <TopBack>
        <span slot="headerTxt">注册</span>
      </TopBack>
      <div class="registerform">
        <div class="form">
          <form v-model="registerForm">
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
              <!--<li>
                <select class="text selt">
                  <option>选择目前学校学习所在地</option>
                  <option>选择目前学校学习所在地</option>
                  <option>选择目前学校学习所在地</option>
                  <option>选择目前学校学习所在地</option>
                </select>
              </li>
              <li>
                <select class="text selt">
                  <option>所在学校</option>
                  <option>所在学校</option>
                  <option>所在学校</option>
                  <option>所在学校</option>
                </select>
              </li>-->
              <li>
                <input type="text" placeholder="真实姓名" class="text nametxt" />
                <span class="tip">务必填写真实姓名,财务结算实用</span>
              </li>
              <li>
                <i class="icon pwd"></i>
                <input type="password" autocomplete="new-password" placeholder="请输入密码" v-model="registerForm.password" class="text" />
              </li>
            </ul>
            <button class="btn" @click="handleRegiter">提交</button>
          </form>
        </div>
      </div>
    </div>
</template>

<script>
  import service from '@/http/services/user.js'
  export default {
    name: "Register",
    data() {
      return{
        registerForm: {
          phone: '',
          password: '',
          smscode: '',
          invite: 1
        },
        smsForm: {
          channel: 'signup',
        }
      }
    },
    methods: {
      //获取注册表单
      handleRegiter: function(){
        service.userService.register(this.registerForm).then(res => {
          if(res.status === 200){
            console.log(res.data);
          }
        })
      },
      //获取验证码
      handleSms: function(){
        service.userService.smsCode({channel: 'signup',phone: this.registerForm.phone}).then(res => {
          if(res.status === 200){
            console.log(res.data);
          }
        })
      },
    }
  }
</script>
