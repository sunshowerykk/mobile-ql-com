<template>
    <div class="font-box">
      <div class="registerform">
        <div class="form">
          <form>
            <ul>
              <li>
                <i class="icon tel"></i>
                <input type="text" placeholder="请输入手机号码" class="text" />
              </li>
              <li>
                <i class="icon yma"></i>
                <input type="text" placeholder="请输入验证码" class="text" />
                <button class="getbtn">获取验证码</button>
              </li>
              <li>
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
              </li>
              <li>
                <input type="text" placeholder="真实姓名" class="text nametxt" />
                <span class="tip">务必填写真实姓名,财务结算实用</span>
              </li>
              <li>
                <i class="icon pwd"></i>
                <input type="password" placeholder="请输入密码" class="text" />
              </li>
            </ul>
            <button class="btn">提交</button>
          </form>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Register"
    }
</script>

<style scoped>
  .registerform {
    padding: 0.3rem 0.2rem;
  }

  .registerform .form {
    background: #f5f5f5;
    padding: 0.3rem;
    border-radius: 0.1rem;
  }

  .registerform .form ul li {
    position: relative;
    margin-bottom: 0.3rem;
    overflow: hidden;
  }

  .registerform .form ul li .text {
    background: #fff;
    border: none;
    border-radius: 0.1rem;
    text-indent: 0.7rem;
    font-size: 0.28rem;
    color: #999;
    height: 0.88rem;
    width: 100%;
  }

  .registerform .form ul li .selt {
    text-indent: 0;
    padding-left: 0.7rem;
    background: url(../assets/img/icon20.png) no-repeat 98% #fff;
    background-size: 0.25rem 0.25rem;
  }

  .registerform .form ul li .text::-webkit-input-placeholder {
    color: #999;
  }

  .registerform .form ul li .text:-moz-placeholder {
    color: #999;
  }

  .registerform .form ul li .text::-moz-placeholder {
    color: #999;
  }

  .registerform .form ul li .text::-ms-input-placeholder {
    color: #999;
  }

  .registerform .form ul li i {
    display: inline-block;
    width: 0.32rem;
    height: 0.32rem;
    position: absolute;
    top: 0.3rem;
    left: 0.2rem;
  }

  .registerform .form ul li .tel {
    background: url(../assets/img/icon18.png) no-repeat center;
    background-size: 0.32rem 0.32rem;
  }

  .registerform .form ul li .yma {
    background: url(../assets/img/icon19.png) no-repeat center;
    background-size: 0.32rem 0.32rem;
  }

  .registerform .form ul li .pwd {
    background: url(../assets/img/icon21.png) no-repeat center;
    background-size: 0.32rem 0.32rem;
  }

  .registerform .form ul li .getbtn {
    position: absolute;
    top: 0;
    right: 0;
    width: 2rem;
    height: 0.88rem;
    font-size: 0.28rem;
    color: #fff;
    border: none;
    cursor: pointer;
    background: #DB2C1B;
  }

  .registerform .form ul li .tip {
    font-size: 0.2rem;
    color: #999;
    display: inline-block;
    line-height: 0.88rem;
    position: absolute;
    top: 0;
    right: 0.2rem;
  }

  .registerform .form .btn {
    width: 100%;
    height: 0.88rem;
    font-size: 0.3rem;
    background: #DB2C1B;
    color: #fff;
    border: none;
    border-radius: 0.1rem;
  }
</style>
