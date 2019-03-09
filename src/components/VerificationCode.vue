<template>
    <div class="font-box">
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
                <label for="" class="lecon">验证码</label>
                <input type="password" placeholder="请输入验证码" v-model="changeForm.change_password_code" class="text" />
                <button class="getbtn" @click="handleSms">获取验证码</button>
              </li>
              <li>
                <label for="" class="lecon">密码</label>
                <input type="password" v-model="changeForm.password" placeholder="请输入新密码" class="text" />
              </li>
            </ul>
            <div class="btnmod">
              <button class="btn" @click="handlePassword">确认修改</button>
            </div>
            <div class="otherLogin clearfix">
              <router-link to="/Login"  class="pwdLogin" replace >密码登录</router-link>
              <span class="ymaLogin on">修改密码</span>
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
          handleSms: function(){
            service.userService.smsCode({phone: this.changeForm.phone}).then(res => {
              if(res.status === 200){
                console.log(res.data);
              }
            })
          },
          //修改密码
          handlePassword: function(){
            service.userService.changePassword(this.changeForm).then(res => {
              if(res.status === 200 && res.data.status === 0){
                console.log(res.data);
              }
              else{
                alert("修改失败")
              }
            })
          }
        },
    }
</script>

<style scoped>
  .loginform {
    padding: 0.3rem 0.2rem;
  }

  .loginform li {
    overflow: hidden;
    position: relative;
    border-bottom: 1px solid #ececec;
  }

  .loginform li .lecon {
    float: left;
    width: 15%;
    font-size: 0.28rem;
    color: #333;
    line-height: 0.88rem;
  }

  .loginform li .text {
    width: 82%;
    height: 0.88rem;
    border: none;
    font-size: 0.28rem; /*color:#cacaca;*/
    background: #fff;
  }

  .loginform li .lecon .icon {
    display: inline-block;
    width: 0.2rem;
    height: 0.2rem;
    margin-left: 0.1rem;
    background: url(../assets/img/icon22.png) no-repeat center;
    background-size: 0.2rem 0.2rem;
  }

  .loginform li .getbtn {
    position: absolute;
    top: 0;
    right: 0.2rem;
    background: none;
    border: none;
    font-size: 0.26rem;
    color: #cacaca;
    height: 0.88rem;
    cursor: pointer;
  }

  .loginform .btnmod {
    padding: 0.2rem 0;
  }

  .loginform .btnmod .btn {
    width: 100%;
    height: 0.88rem;
    font-size: 0.3rem;
    background: #DB2C1B;
    color: #fff;
    border: none;
    border-radius: 0.1rem;
  }

  .loginform .otherLogin a {
    font-size: 0.24rem;
    color: #666;
  }

  .loginform .otherLogin .ymaLogin {
    float: right;
  }

  .loginform .otherLogin .on {
    color: #DB2C1B;
  }
</style>
