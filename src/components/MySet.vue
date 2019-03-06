<template>
    <div class="font-box">
      <TopBack>
        <span slot="headerTxt">设置</span>
      </TopBack>

      <div class="adresform setUpForm">
        <div class="form">
          <ul>
            <li>
              <label>真实姓名</label>
              <input type="text" value="张飞" readonly="readonly" class="text" />
            </li>
            <li>
              <label>手机号</label>
              <input type="text" value="13126815518" readonly="readonly" class="text"  />
            </li>
            <li>
              <label>所在学校</label>
              <input type="text" value="济南职业技术学校" readonly="readonly" class="text" />
            </li>

            <li>
              <input type="text" placeholder="登录密码设置"  class="text text1" />
            </li>
            <li>
              <div class="upload">
                <span>头像设置设置</span>
                <input type="file" class="upload_btn" id="file1" accept="image/*" name="filename"  />
              </div>
            </li>
            <li>
              <input type="text" placeholder="支付宝(需与真实姓名一致"  class="text text1" />
            </li>
            <li>
              <textarea placeholder="收件地址设置" class="text text1 tera"></textarea>
            </li>
          </ul>
        </div>
      </div>

      <div class="botFixbtn">
        <button class="btn">退出登录</button>
      </div>
    </div>
</template>

<script>
    export default {
        name: "MySet"
    }
</script>

<style scoped>

  .adresform {
    padding: 0.2rem;
  }

  .adresform .form ul li {
    margin-bottom: 0.2rem;
  }

  .adresform .form label {
    font-size: 0.24rem;
    color: #666;
    display: block;
    margin-bottom: 0.1rem;
  }

  .adresform .form label i {
    color: #DB2C1B;
    margin-right: 0.2rem;
  }

  .adresform .form .text {
    width: 100%;
    height: 0.88rem;
    text-indent: 0.2rem;
    font-size: 0.28rem;
    color: #999;
    border: none;
    background: #f5f5f5;
    border-radius: 0.1rem;
  }

  .adresform .form .tera {
    height: 2rem;
    padding-top: 0.1rem;
  }

  .setUpForm {
    padding: 0;
  }

  .setUpForm .form ul li {
    overflow: hidden;
    border-bottom: 1px solid #ddd; /*background:#e8e8e8;*/
    margin-bottom: 0;
  }

  .setUpForm .form ul li:last-child {
    border-bottom: none;
  }

  .setUpForm .form li label {
    float: left;
    width: 20%;
    line-height: 0.88rem;
    text-align: center;
    margin-bottom: 0;
  }

  .setUpForm .form li .text {
    float: right;
    width: 78%;
    background: none;
  }
  .setUpForm .form li .text::-webkit-input-placeholder{
    color: #999;
  }

  .setUpForm .form li a {
    display: block;
    width: 100%;
    height: 0.88rem;
    line-height: 0.88rem;
    font-size: 0.24rem;
    color: #666;
    background: url(../assets/img/more.png) no-repeat 97%;
    background-size: 0.32rem 0.32rem;
    text-indent: 0.25rem;
  }

  .setUpForm .form li .text1 {
    width: 100%;
    text-indent: 0.3rem;
  }

  .setUpForm .form li .upload {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 0.88rem;
  }

  .setUpForm .form li .upload .upload_btn {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 9;
    cursor: pointer;
  }

  .setUpForm .form li .upload span {
    position: absolute;
    top: 0;
    left: 0.3rem;
    font-size: 0.28rem;
    color: #999;
    display: inline-block;
    height: 0.88rem;
    line-height: 0.88rem;
  }

  .setUpForm .form li .tera {
    height: 2rem;
  }

  .botFixbtn {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 99;
    width: 100%;
  }

  .botFixbtn .btn {
    width: 100%;
    height: 0.88rem;
    font-size: 0.3rem;
    color: #fff;
    background: #DB2C1B;
    border: none;
    cursor: pointer;
  }

</style>
