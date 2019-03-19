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
                <img src="../../../assets/img/img32.png"  />
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
          <img src="../../../assets/img/img29.png"  />
          <label>支付宝</label>
          <span class="input"><input type="radio" name="radio"  class="radio" checked="checked" /></span>

        </li>
        <li>
          <img src="../../../assets/img/img30.png"  />
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
