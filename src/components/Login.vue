<template>
    <div class="font-box">
      <TopBack>
        <span slot="headerTxt">登录</span>
      </TopBack>
      <div class="loginform">
        <div class="form">
          <form v-model="loginForm">
            <ul>
              <li>
                <span class="lecon numBtn">+86<i class="icon"></i></span>
                <input type="text" placeholder="请输入手机号码" v-model="loginForm.phone" class="text" />
              </li>
              <li>
                <label for="" class="lecon">密码</label>
                <input type="password" placeholder="请输入密码" v-model="loginForm.password" class="text" />
              </li>
            </ul>
            <div class="btnmod">
              <button class="btn" @click="handleLogin">登录</button>
            </div>
            <div class="otherLogin clearfix">
              <a><router-link to="/Register">注册</router-link></a>
              <router-link to="/VerificationCode" class="ymaLogin" replace  >忘记密码?</router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
</template>

<script>
    import service from '@/http/services/user.js'
    export default {
      name: "login",
      data() {
        return {
          loginForm: {
            phone: '',
            password: '',
          }
        }
      },

      methods: {

        handleLogin: function () {
          service.userService.signIn(this.loginForm).then(res => {
            if (res.status === 200 && res.data.status === 0) {
              alert(res.data.access_token);
              this.$cookies.set('access_token', res.data.access_token, 3600*24*7);
              console.log(this.loginForm);
              this.$router.push({path: '/'})
            }
            else{
              alert(res.data.msg);
            }
          })
        },


      }
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
