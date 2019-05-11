<template>
  <div class="font-box bg" v-loading="loading">
    <TopBack>
      <span slot="headerTxt">{{ setAddressFlag ? '收货地址' : '结算中心' }}</span>
    </TopBack>

    <div class="orderDetail orderDetail_1" v-show="!setAddressFlag">

      <div class="admininfo">
        <div class="cont edit">
          <div class="fr" @click="setAddressFlag = !setAddressFlag">
            <strong>编辑收货信息</strong>
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
        <strong>赠品</strong><span>(付款成功后，您可获得以下所有赠品，请填写/修改收货信息)</span>
      </div>

      <div class="chooseLst">
        <ul>
          <li>
            <div class="item clearfix">
              <div class="fr goldCoin">
                <img src="../../../assets/img/img32.png"  />
                <span class="goldnum">金币<strong>{{ course_count * 100 }}</strong>枚</span>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div class="chooseLst">
        <ul>
          <li v-for="(book, index) in books" :key="index">
            <div class="item clearfix">
              <div class="inpt">
                <!--<input type="checkbox" class="chek" :value="book.id"-->
                       <!--name="checkbox" @click="handleSelect(index,book.id)"-->
                       <!--:checked="items[index]" />-->
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

    <div class="alert_bg alert_bg1" v-show="payModal"></div>
    <div class="alert_cont1" v-show="payModal">
      <div class="tit">
        <h3>在线支付</h3>
        <span class="countdown">支付剩余时间
          <span class="container timeBar ys3">{{ countStr }}</span>
        </span>
      </div>
      <h5>选择支付方式</h5>
      <!-- 1支付宝 2 微信 -->
      <ul>
        <!-- <li>
          <img src="../../../assets/img/img29.png"  />
          <label>支付宝</label>
          <span class="input">
            <input type="radio"
              name="radio"
              class="radio"
              value="1"
              @change="changePayType(1)"/></span>

        </li> -->
        <li>
          <img src="../../../assets/img/img30.png"  />
          <label>微信</label>
          <span class="input">
            <input type="radio"
              name="radio"
              class="radio"
              checked="checked"
              value="2"
              @change="changePayType(2)"/>
          </span>
        </li>
      </ul>
      <div class="btnMod">
        <button class="btn" @click="confirmPay()">确认付款</button>
      </div>
    </div>

    <!--收货地址设置-->
    <div v-show="setAddressFlag">

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
                <textarea placeholder="请填写宿舍地址" class="text tera" v-model="user_info.address" ></textarea>
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
import service_course from "@/http/services/course.js";
export default {
  name: "PayCenter",
  created() {
    this.countDown(1024);
    this.id = this.$route.params.id;
    this.type = this.$route.params.type;
  },
  data() {
    return {
      countStr: "00:00:00",
      payModal: false,
      info: "",
      books: "",
      id: "",
      type: "",
      course_count: 1,
      items: [],
      gift_books: [],
      address_flag: false,
      setAddressFlag: false,
      user_info: {
        username: "",
        phone: "",
        address: ""
      },
      checkedValue: [],
      answer: [],
      order_sn:'',
      payType: 2, // 默认微信支付
      loading: false,
      payConfig: {
        appid: ''
      }
    };
  },
  methods: {
    countDown(times) {
      let _this = this;
      var timer = null;
      timer = setInterval(function() {
        var day = 0,
          hour = 0,
          minute = 0,
          second = 0; //时间默认值
        if (times > 0) {
          day = Math.floor(times / (60 * 60 * 24));
          hour = Math.floor(times / (60 * 60)) - day * 24;
          minute = Math.floor(times / 60) - day * 24 * 60 - hour * 60;
          second =
            Math.floor(times) -
            day * 24 * 60 * 60 -
            hour * 60 * 60 -
            minute * 60;
        }
        if (day <= 9) day = "0" + day;
        if (hour <= 9) hour = "0" + hour;
        if (minute <= 9) minute = "0" + minute;
        if (second <= 9) second = "0" + second;
        //
        _this.countStr = hour + ":" + minute + ":" + second;
        times--;
      }, 1000);
      if (times <= 0) {
        clearInterval(timer);
      }
    },
    goPay() {
      this.payModal = true;
    },
    changePayType(type) {
      this.payType = type;
    },
    hideModal() {
      this.payModal = false;
    },
    getCourseInfo() {
      service_course.courseService
        .courseOrder({
          course_id: this.id,
          "access-token": this.$cookies.get("access_token")
        })
        .then(res => {
          if (res.status === 200 && res.data.status == 0) {
            this.info = res.data.course_info;
            this.books = res.data.books;
            this.course_count = res.data.course_count;
            this.user_info.username = res.data.user_info.username;
            this.user_info.phone = res.data.user_info.phone;
            this.user_info.address = res.data.user_info.address;
            for (var i = 0; i < this.books.length; i++) {
              this.items[i] = false;
              this.gift_books[i] = this.books[i].id;
            }
          }
        });
    },
    getPackageInfo() {
      service_course.courseService
        .packageOrder({
          pid: this.id,
          "access-token": this.$cookies.get("access_token")
        })
        .then(res => {
          if (res.status === 200 && res.data.status == 0) {
            this.info = res.data.course_info;
            this.books = res.data.books;
            this.course_count = res.data.course_count;
            this.user_info.username = res.data.user_info.username;
            this.user_info.phone = res.data.user_info.phone;
            this.user_info.address = res.data.user_info.address;
            for (var i = 0; i < this.books.length; i++) {
              this.items[i] = false;
              this.gift_books[i] = this.books[i].id;
            }
          }
        });
    },
    remove(arr, val) {
      var index = arr.indexOf(val);
      if (index > -1) {
        arr.splice(index, 1);
      }
      return arr;
    },
    handleSelect(index, id) {
      this.items[index] = !this.items[index];
      if (this.items[index] && !this.answer.includes(id)) {
        this.answer.push(id);
      } else {
        this.answer = this.remove(this.answer, id);
      }
      if (this.items.indexOf(true) != -1) {
        this.address_flag = true;
      } else {
        this.address_flag = false;
      }
    },
    // 确认付款
    callpay() {
      if (typeof WeixinJSBridge == "undefined") {
		    if (document.addEventListener) {
		        document.addEventListener('WeixinJSBridgeReady', this.jsApiCall, false);
          } else if (document.attachEvent) {
              document.attachEvent('WeixinJSBridgeReady', this.jsApiCall);
              document.attachEvent('onWeixinJSBridgeReady', this.jsApiCall);
          }
      } else {
          this.jsApiCall();
      }
    },
    //调用微信JS api 支付
	  jsApiCall() {
      let self = this;
      WeixinJSBridge.invoke(
        'getBrandWCPayRequest',
        self.jsApiParameters,
        function (res) {
          if (res.err_msg == "get_brand_wcpay_request:ok") {
            // 支付成功 更改支付状态
            self.wxcheckorder();
          }
        }
      );
    },
    // 更改订单状态
    wxcheckorder () {
      service_course.courseService
        .wxcheckorder({
          "access-token": this.$cookies.get("access_token"),
          'out_trade_no': this.order_sn
        })
        .then(res => {
          res.data = JSON.parse(res.data);
          if (res.status === 200 && res.data.trade_state === "SUCCESS") {
            this.$Notice.success({
                title: '支付成功提醒',
                desc: '支付成功，3s后跳转到订单列表页...'
            });
            setTimeout(() => {
              this.$router.push('/MyOrder');
            }, 3000);
          } else {
            this.$Message.error("支付失败，请稍后再试");
          }
        });
    },
    // 确认订单
    confirmOrder() {
      if (this.answer.length > this.course_count) {
        this.$Message.warning("只可选择" + this.course_count + "本图书！");
      } else {
        if (!this.user_info.username || !this.user_info.phone || !this.user_info.address) {
          this.$Message.warning('请完善收货信息！');
          this.setAddressFlag = true;
        } else {
          this.loading = true;
          service_course.courseService.confirmOrder({
            "access-token": this.$cookies.get("access_token"),
            "course_id": this.id,
            "type": this.type,
            "username": this.user_info.username,
            "phone": this.user_info.phone,
            "address": this.user_info.address,
            "gift_books": this.gift_books.join(',')
          }).then(res => {
            if (res.status === 200 && res.data.code === 0) {
              this.payModal = true;
              this.$Message.info('订单已生成，请尽快付款');
              this.order_sn = res.data.order_sn
            } else {
              this.$Message.warning(res.data.message);
            }
            this.loading = false;
          });
        }
      }
    },
    getAppid() {
      service_course.courseService
        .getAppid({
          "access-token": this.$cookies.get("access_token"),
        })
        .then(res => {
          if (res.status === 200 && res.data.status === 0) {
            this.payConfig.appid = res.data.appid;
            let redirectURI = encodeURIComponent(window.location.href);     // url需要encode
            window.location = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + this.payConfig.appid + '&redirect_uri=' + redirectURI + '&response_type=code&scope=snsapi_base&state=WXPaySTATE#wechat_redirect'
          }
          else{
            this.$Message.info(res.data.message);
          }
        });
    },
    // 确认支付
    confirmPay() {
      this.getCodeState();
      if (!this.payConfig.code) {
        this.$Message.warning('参数错误，请稍后刷新页面重试');
        return;
      }
      this.loading = true;
      service_course.courseService
        .confirmPay({
          "access-token": this.$cookies.get("access_token"),
          "order_sn": this.order_sn,
          "code": this.payConfig.code
        })
        .then(res => {
          if (res.status === 200 && res.data.status === 0) {
            this.jsApiParameters = JSON.parse(res.data.jsApiParameters);
            this.callpay();
          } else {
            this.$Message.error(res.data.message);
          }
          this.loading = false;
        });
    },
    // 获取code 和 state
    getCodeState() {
      let paramsArr = window.location.search.substr(1).split('&');
      paramsArr.forEach(item => {
        this.payConfig[item.split('=')[0]] = item.split('=')[1];
      });
    }
  },
  mounted: function() {
    if (this.type == "course") {
      this.getCourseInfo();
    } else if (this.type == "package") {
      this.getPackageInfo();
    }
    //获取appid
    // this.getCodeState();
    // if (!this.payConfig.code) {
    //   this.getAppid();
    // }
  }
};
</script>
