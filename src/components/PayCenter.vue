<template>
  <div class="font-box bg">
    <TopBack>
      <span slot="headerTxt">{{ setAddressFlag ? '收货地址' : '结算中心' }}</span>
    </TopBack>

    <div class="orderDetail orderDetail_1" v-if="!setAddressFlag">

      <div class="admininfo" v-if="address_flag">
        <div class="cont edit">
          <div class="fr" @click="setAddressFlag = !setAddressFlag">
              <strong>编辑收货地址</strong>
          </div>
        </div>
      </div>

      <div class="proinfo">
        <a href="#">
          <div class="cont clearfix">
            <div class="pic">
              <img :src="info.list_pic"  />
            </div>
            <div class="txt">
              <h5>{{ info.course_name || info.name }}</h5>
              <span>￥{{ info.discount }}</span><s>￥{{ info.price }}</s>
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
              <div class="fr goldCoin">
                <img src="../assets/img/img32.png"  />
                <span class="goldnum">金币<strong>{{ course_count * 100 }}</strong>枚</span>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div class="chooseLst">
        <ul>
          <li v-for="book, index in books">
            <div class="item clearfix">
              <div class="inpt">
                <input type="checkbox" class="chek" :value="book.id"
                       name="checkbox" @click="handleSelect(index)"
                       :checked="items[index]" v-model="checkedValue" />
              </div>
              <div class="fr imgChoose">
                <img :src="book.pictrue"  />
                <span class="name">{{ book.name }}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div class="orderMoney">
        <span>订单金额</span>
        <strong class="fr">￥{{ info.discount }}</strong>
      </div>

      <div class="orderbotFix">
        <div class="cont clearfix">
          <div class="left fl">
            <a href="#" class="btn">实付:<strong>￥{{ info.discount }}</strong></a>
          </div>
          <div class="right fr">
            <div class="btn" @click="confirmOrder">确认订单</div>
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

    <!--收货地址设置-->
    <div v-if="setAddressFlag">

      <div class="adresform">
        <div class="form">
          <form>
            <ul>
              <li>
                <label><i>*</i>收货人姓名</label>
                <input type="text" placeholder="请使用真实姓名" class="text" v-model="user_info.username" />
              </li>
              <li>
                <label><i>*</i>手机号码</label>
                <input type="text" placeholder="请输入手机号码" class="text" v-model="user_info.phone" />
              </li>
              <li>
                <label><i>*</i>收货人地址</label>
                <textarea placeholder="请填写宿舍地址"class="text tera" v-model="user_info.address" ></textarea>
              </li>
            </ul>
          </form>
        </div>
      </div>

      <div class="botFixbtn">
        <button class="btn" @click="setAddressFlag = !setAddressFlag">保存</button>
      </div>

    </div>

  </div>
</template>

<script>
  import  service_course from '@/http/services/course.js'
    export default {
      name: "PayCenter",
      created(){
        this.countDown(1024);
        this.id = this.$route.params.id;
      },
      watch: {
        checkedValue: function (new_v, old_v) {
          this.answer = this.checkedValue;
        }
      },

      data(){
          return{
            countStr: "00:00:00",
            payModal: false,
            info: '',
            books: '',
            id: '',
            course_count: 1,
            items: [],
            address_flag: false,
            setAddressFlag: false,
            user_info: {
              username: '',
              phone: '',
              address: ''
            },
            checkedValue: [],
            answer: []
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
        },

        getCourseInfo() {
          service_course.courseService.courseOrder({'course_id': this.id, 'access-token': this.$cookies.get('access_token')}).then(res => {
            if(res.status === 200 && res.data.status == 0) {
              this.info  = res.data.course_info;
              this.books = res.data.books;
              this.course_count = res.data.course_count;
              this.user_info.username = res.data.user_info.username;
              this.user_info.phone = res.data.user_info.phone;
              this.user_info.address = res.data.user_info.address;
              console.log(res.data.user_info);
              for (var i = 0; i < this.books.length; i++) {
                this.items[i] = false;
              }
              console.log(this.items);
            }
          })
        },

        handleSelect(index) {
          this.items[index] = !this.items[index];
          console.log(this.items);
          if (this.items.indexOf(true) != -1) {
            this.address_flag = true;
          } else {
            this.address_flag = false;
          }
        },

        confirmOrder() {
          if (this.answer.length > 1) {
            this.$Message.warning('只可选择一本图书！');
          }
          service_course.courseService.confirmOrder({'access-token': this.$cookies.get('access_token'), 'course_id': this.id}).then(res => {
            if (res.status === 200 && res.data.code === 0) {
              console.log(res.data);
              if (this.answer.length > 0) {
                service_course.courseService.bookOrder({'access-token': this.$cookies.get('access_token'),
                                                          'book_id': this.answer[0], 'username': this.user_info.username,
                                                          'phone': this.user_info.phone, 'address': this.user_info.address})
                  .then(res => {
                   if (res.status === 200 && res.data.code === 0) {
                     this.$Message.success('赠品图书选择成功！');
                     this.payModal = true;
                   } else {
                     this.$Message.warning('出错了！');
                   }
                })
              }
            } else {
              this.$Message.warning(res.data.message);
            }
          })
        }
      },

      mounted: function () {
        this.getCourseInfo();
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
