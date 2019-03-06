<template>
  <div class="font-box bg">
    <TopBack>
      <span slot="headerTxt">结算中心</span>
    </TopBack>

    <div class="orderDetail orderDetail_1">
      <div class="admininfo">
        <div class="cont edit">
          <div class="fr">
            <router-link to="/Address">
              <strong>编辑收货地址</strong>
            </router-link>
          </div>
        </div>
      </div>
      <div class="proinfo">
        <a href="#">
          <div class="cont clearfix">
            <div class="pic">
              <img src="../assets/img/img22.png"  />
            </div>
            <div class="txt">
              <h5>2019专升本2019专升本2019专升本2019专升本</h5>
              <span>￥1180</span><strike>￥1178</strike>
            </div>
          </div>
        </a>
      </div>

      <div class="tips">
        <strong>选择赠品</strong><span>(未购买图书者请选择图书，已选择图书者请选择金币用于答疑)</span>
      </div>

      <div class="chooseLst">
        <ul>
          <li>
            <div class="item clearfix">
              <div class="inpt">
                <input type="checkbox" class="chek"  />
              </div>
              <div class="fr goldCoin">
                <img src="../assets/img/img32.png"  />
                <span class="goldnum">金币<strong>xx</strong>枚</span>
              </div>
            </div>
          </li>
          <li>
            <div class="item clearfix">
              <div class="inpt">
                <input type="checkbox" class="chek"  />
              </div>
              <div class="fr imgChoose">
                <img src="../assets/img/img33.png"  />
                <span class="name">大学语文一本通</span>
              </div>
            </div>
          </li>
          <li>
            <div class="item clearfix">
              <div class="inpt">
                <input type="checkbox" class="chek"  />
              </div>
              <div class="fr imgChoose">
                <img src="../assets/img/img33.png"  />
                <span class="name">大学语文一本通</span>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div class="orderMoney">
        <span>订单金额</span>
        <strong class="fr">￥189.00</strong>
      </div>

      <div class="orderbotFix">
        <div class="cont clearfix">
          <div class="left fl">
            <a href="#" class="btn">实付:<strong>￥189.00</strong></a>
          </div>
          <div class="right fr">
            <div class="btn" @click="goPay">去付款</div>
          </div>
        </div>
      </div>

    </div>

    <div class="alert_bg alert_bg1" v-show="payModal" @click="hideModal"></div>
    <div class="alert_cont1" v-show="payModal">
      <div class="tit">
        <h3>在线支付</h3>
        <span class="countdown">支付剩余时间
          <span class="container timeBar ys3">{{ countStr }}</span>
        </span>
      </div>
      <h5>选择支付方式</h5>
      <ul>
        <li>
          <img src="../assets/img/img29.png"  />
          <label>支付宝</label>
          <span class="input"><input type="radio" name="radio"  class="radio" checked="checked" /></span>

        </li>
        <li>
          <img src="../assets/img/img30.png"  />
          <label>微信</label>
          <span class="input"><input type="radio" name="radio"  class="radio"  /></span>
        </li>
      </ul>
      <div class="btnMod">
        <button class="btn">确认付款</button>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "PayCenter",
      created(){
        this.countDown(1024);
      },
      data(){
          return{
            countStr: "00:00:00",
            payModal: false
          }
      },
      methods:{
        countDown(times){
          let _this = this;
          var timer=null;
          timer=setInterval(function(){
            var day=0,
              hour=0,
              minute=0,
              second=0;//时间默认值
            if(times > 0){
              day = Math.floor(times / (60 * 60 * 24));
              hour = Math.floor(times / (60 * 60)) - (day * 24);
              minute = Math.floor(times / 60) - (day * 24 * 60) - (hour * 60);
              second = Math.floor(times) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
            }
            if (day <= 9) day = '0' + day;
            if (hour <= 9) hour = '0' + hour;
            if (minute <= 9) minute = '0' + minute;
            if (second <= 9) second = '0' + second;
            //

            _this.countStr =hour+":"+minute+":"+second ;
            times--;
          },1000);
          if(times<=0){
            clearInterval(timer);
          }
        },
        goPay(){
          this.payModal = true;
        },
        hideModal(){
          this.payModal = false;
        }
      }
    }
</script>

<style scoped>
  .bg{
    background: #fafafa;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
  .orderDetail .admininfo {
    background: #fff;
    padding: 0.2rem;
    margin-bottom: 0.15rem;
  }

  .orderDetail .admininfo .fl {
    float: left;
    width: 15%;
    font-size: 0.28rem;
    color: #333;
  }

  .orderDetail .admininfo .fr {
    float: left;
    width: 82%;
    position: relative;
  }

  .orderDetail .admininfo .fr span {
    display: block;
    font-size: 0.28rem;
    color: #333;
  }

  .orderDetail .admininfo .fr i {
    display: inline-block;
    width: 0.32rem;
    height: 0.32rem;
    background: url(../assets/img/more.png) no-repeat center;
    background-size: 0.32rem 0.32rem;
    position: absolute;
    top: 0.3rem;
    right: 0;
  }

  .orderDetail .admininfo .edit .fr {
    width: 100%;
    float: none;
  }

  .orderDetail .admininfo .edit strong {
    display: block;
    text-align: center;
    font-size: 0.3rem;
    color: #DB2C1B;
    background: url(../assets/img/more.png) no-repeat 97%;
    background-size: 0.32rem 0.32rem;
  }

  .orderDetail .proinfo {
    padding: 0.2rem;
    background: #fff;
    border-bottom: 1px solid #ECECEC;
  }

  .orderDetail .proinfo .pic {
    float: left;
    width: 30%;
  }

  .orderDetail .proinfo .pic img {
    display: block;
    width: 100%;
  }

  .orderDetail .proinfo .txt {
    float: right;
    width: 67%;
  }

  .orderDetail .proinfo .txt h5 {
    font-size: 0.3rem;
    color: #333;
    line-height: 0.35rem;
    margin-bottom: 0.3rem;
  }

  .orderDetail .proinfo .txt span {
    font-size: 0.28rem;
    color: #333;
    margin-right: 0.1rem;
    font-weight: bold;
  }

  .orderDetail .proinfo .txt strike {
    font-size: 0.24rem;
    color: #999;
  }

  .orderDetail .infoList {
    background: #fff;
    padding: 0.2rem 0;
    margin-bottom: 0.15rem;
  }

  .orderDetail .infoList li {
    padding: 0 0.2rem;
    height: 0.5rem;
    line-height: 0.5rem;
    overflow: hidden;
    margin-bottom: 0;
  }

  .orderDetail .infoList span {
    font-size: 0.26rem;
    color: #999;
  }

  .orderDetail .infoList span.fr {
    color: #222;
  }

  .orderDetail .infoList span.prise {
    color: #DB2C1B;
    font-size: 0.36rem;
  }

  .orderDetail .timeInfo {
    background: #fff;
    padding: 0.2rem 0;
  }

  .orderDetail .timeInfo li {
    margin-bottom: 0;
    padding: 0 0.2rem;
  }

  .orderDetail .timeInfo li span {
    font-size: 0.26rem;
    color: #999;
  }

  .orderDetail .timeInfo li span strong {
    color: #222;
  }

  .orderDetail_1 .proinfo {
    border-bottom: none;
    margin-bottom: 0.15rem;
  }

  .orderDetail_1 .tips {
    background: #fff;
    padding: 0.2rem 0.2rem 0.2rem 1.7rem;
    position: relative;
    margin-bottom: 0.15rem;
  }

  .orderDetail_1 .tips strong {
    font-size: 0.3rem;
    color: #DB2C1B;
    position: absolute;
    top: 0.1rem;
    left: 0.2rem;
  }

  .orderDetail_1 .tips span {
    font-size: 0.22rem;
    color: #999;
    line-height: 0.25rem;
  }

  .orderDetail_1 .chooseLst {
    padding: 0 0.2rem;
    background: #fff;
  }

  .orderDetail_1 .chooseLst .item {
    position: relative;
  }

  .orderDetail_1 .chooseLst .item .fr {
    float: right;
    width: 80%;
  }

  .orderDetail_1 .chooseLst li {
    padding: 0.2rem 0;
    border-bottom: 1px solid #ECECEC;
  }

  .orderDetail_1 .chooseLst li img {
    width: 0.9rem;
    height: 0.9rem;
    vertical-align: top;
  }

  .orderDetail_1 .chooseLst li span {
    font-size: 0.3rem;
    margin-left: 0.3rem;
    display: inline-block;
    padding-top: 0.25rem;
  }

  .orderDetail_1 .orderMoney {
    padding: 0.1rem 0.2rem;
    background: #fff;
    font-size: 0.28rem;
    color: #333;
  }

  .orderDetail_1 .orderMoney strong {
    font-size: 0.3rem;
    font-weight: bold;
    color: #DB2C1B;
  }

  .orderDetail_1 .chooseLst ul li .inpt {
    position: absolute;
    top: 0.4rem;
    left: 0.2rem;
  }

  .orderDetail_1 .chooseLst ul li .inpt .chek {
    position: relative;
    width: 0.4rem;
    height: 0.4rem;
  }

  .orderDetail_1 .chooseLst ul li .inpt .chek:before {
    content: "";
    position: absolute;
    left: 0rem;
    top: 0;
    width: 0.4rem;
    height: 0.4rem;
    background: url(../assets/img/offIcon.jpg) no-repeat;
    background-size: 0.4rem 0.4rem;
    z-index: 9;
  }

  .orderDetail_1 .chooseLst ul li .inpt .chek:checked:before {
    background: url(../assets/img/onIcon.jpg) no-repeat;
    background-size: 0.4rem 0.4rem;
  }

  .alert_bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 99;
  }
  .alert_cont1 {
    position: fixed;
    bottom: 0;
    width: 100%;
    left: 0;
    z-index: 1000;
    background: #fff;
  }

  .alert_cont1 .tit {
    text-align: center;
    padding: 0.2rem 0;
    border-bottom: 1px solid #ECECEC;
  }

  .alert_cont1 .tit h3 {
    font-size: 0.3rem;
    text-align: center;
  }

  .alert_cont1 .tit span {
    display: inline-block;
    padding: 0 0.2rem;
    height: 0.5rem;
    line-height: 0.5rem;
    font-size: 0.22rem;
    color: #333;
    background: #999999;
    border-radius: 0.3rem;
  }

  .alert_cont1 .tit .timeBar span {
    padding: 0;
  }

  .alert_cont1 .tit .timeBar span:last-child {
    display: none;
  }

  .alert_cont1 h5 {
    padding: 0.2rem;
    font-size: 0.24rem;
    color: #333;
  }

  .alert_cont1 ul {
    padding: 0 0.2rem;
  }

  .alert_cont1 ul li {
    height: 0.88rem;
    line-height: 0.88rem;
    position: relative;
  }

  .alert_cont1 ul li img {
    width: 0.5rem;
    height: 0.5rem;
    vertical-align: top;
    margin-top: 0.2rem;
    margin-right: 0.1rem;
  }

  .alert_cont1 ul li label {
    font-size: 0.26rem;
    color: #333;
  }

  .alert_cont1 ul li .input {
    position: absolute;
    top: 0.05rem;
    right: 0.2rem;
  }

  .alert_cont1 ul li .input .radio {
    position: relative;
    width: 0.4rem;
    height: 0.4rem;
  }

  .alert_cont1 ul li .input .radio:before {
    content: "";
    position: absolute;
    left: 0rem;
    top: 0;
    width: 0.4rem;
    height: 0.4rem;
    background: url(../assets/img/offIcon.jpg) no-repeat;
    background-size: 0.4rem 0.4rem;
    z-index: 9;
  }

  .alert_cont1 ul li .input .radio:checked:before {
    background: url(../assets/img/onIcon.jpg) no-repeat;
    background-size: 0.4rem 0.4rem;
  }

  .alert_cont1 .btnMod {
    padding-top: 1rem;
  }

  .alert_cont1 .btnMod .btn {
    width: 100%;
    height: 0.88rem;
    font-size: 0.3rem;
    background: #DB2C1B;
    color: #fff;
    border: none;
    cursor: pointer;
  }
</style>
