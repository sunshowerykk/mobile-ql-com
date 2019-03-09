<template>
  <div class="font-box bg">
    <TopBack>
      <span slot="headerTxt">收货地址</span>
    </TopBack>

    <div class="adresform">
      <div class="form">
        <form>
          <ul>
            <li>
              <label><i>*</i>收货人姓名</label>
              <input type="text" placeholder="请使用真实姓名" class="text" />
            </li>
            <li>
              <label><i>*</i>手机号码</label>
              <input type="text" placeholder="请输入手机号码" class="text" />
            </li>
            <li>
              <label><i>*</i>收货人地址</label>
              <textarea placeholder="请填写宿舍地址" class="text tera"  ></textarea>
            </li>
          </ul>
        </form>
      </div>
    </div>

    <div class="botFixbtn">
      <button class="btn">保存</button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Address"
    }
</script>

<style scoped>
  .bg{
    background-color: #fafafa;
    width: 100%;
    height: 100%;
    position: absolute;
  }
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
    margin: 0.1rem 0 0.15rem;
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
