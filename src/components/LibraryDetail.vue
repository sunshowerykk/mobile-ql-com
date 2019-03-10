<template>
    <div class="font-box">
      <TopBack>
        <span slot="headerTxt">{{book.name}}</span>
        <span slot="share" class="share" @click="showShare"></span>
      </TopBack>

      <div class="img_txt_info">
        <div class="clearfix">
          <div class="pic">
            <img src="../assets/img/img16.png" />
          </div>
          <div class="txt">
            <p>{{book.name}}</p>
            <div class="prise">
              <strong>￥{{book.order_price}}预订价</strong>
              <span><strike>{{book.price}}</strike>售价</span>
            </div>
            <div class="oppint" @click="showReserve">我要预订</div>
          </div>
        </div>
      </div>
      <div class="introduction">
        <h5><span>简介</span></h5>
        {{book.intro}}
      </div>

      <!--弹出层 背景-->
      <div class="alert_bg" v-if="bgVal" @click="hideModal"></div>

      <!--分享弹出层-->
      <div class="courseLst courseshare" v-if="share">
        <h3>分享至</h3>
        <ul class="clearfix">
          <li>
            <a href="#">
              <img src="../assets/img/icon16.png" />
              <span>微信好友</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="../assets/img/icon17.png" />
              <span>微信好友</span>
            </a>
          </li>
        </ul>
      </div>


      <!--我要预订 弹出层-->
      <div class="alert_cont" v-if="reserve">
        <div class="cont">
          <div class="adresform adresform_1">
            <div class="form">
              <form>
                <ul>
                  <li>
                    <label><i>*</i>收货人姓名</label>
                    <input type="text" placeholder="请使用真实姓名" class="text"  v-model="orderform.username" />
                  </li>
                  <li>
                    <label><i>*</i>手机号码</label>
                    <input type="text" placeholder="请输入手机号码" class="text" v-model="orderform.phone"/>
                  </li>
                  <li>
                    <label><i>*</i>收货人地址</label>
                    <textarea placeholder="请填写宿舍地址"class="text tera"  v-model="orderform.address"></textarea>
                  </li>
                </ul>
              </form>
              <div class="btnmod">
                <button class="btn confirm" @click="bookorder">确定</button>
                <button class="btn Cancel" @click="hideModal">取消</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import service from '@/http/services/book.js'
    export default {
        name: "LibraryDetail",
      data(){
          return {
            reserve:false,
            share: false,
            bgVal: false,
            book:'',
            bookidform: {
              id: '',
            },
            orderform: {
              bookid: '',
              book_num: 1,
              book_name:'',
              username:'',
              phone:'',
              address:'',
              access_token:'',
            }
          }
      },
      created() {
          this.id = this.$route.params.id;
          console.log("id",this.id);
          this.bookidform.id=this.$route.params.id;
        this.orderform.bookid=this.$route.params.id;
      },
      methods:{
        hideModal(){
          this.reserve = false;
          this.share = false;
          this.bgVal = false;
        },
        showReserve(){
          service.bookService.info({'access-token': this.orderform.access_token}).then(res => {
            if (res.status === 200) {
              console.log(res.data);
              this.orderform.username=res.data.username;
              this.orderform.phone=res.data.phone;
              this.orderform.address=res.data.address;
            }
          })
          this.reserve = true;
          this.bgVal = true;
        },
        showShare(){
          this.share = true;
          this.bgVal = true;
        },

        initbookdetail:function() {
          service.bookService.detail(this.bookidform).then(res => {
            if (res.status === 200) {
              console.log(res.data);
              this.book = res.data;
              this.orderform.book_name = res.data.name;
              this.orderform.access_token = this.$cookies.get('access_token');
              // this.orderform.access_token = '5T_p-UZqPSkPKIcMepsniiFRfPZeShiN';
            }
          })
        },

        bookorder:function() {
          if(this.orderform.username.length==0||this.orderform.phone.length==0||this.orderform.address.length==0) {
            alert("信息不够完善，请填写完毕");
            this.hideModal();
            return ;
          }
          service.bookService.order(this.orderform).then(res => {
            if (res.status === 200) {
              console.log(res.data);
              alert("预定成功");
              this.hideModal();
            }
          })
        },
      },
      mounted:function(){
        this.access_token = this.$cookies.get('access_token');
        this.initbookdetail();
      }
    }
</script>

<style scoped>
  .img_txt_info {
    padding: 0.2rem;
  }

  .img_txt_info .pic {
    float: left;
    width: 35%;
  }

  .img_txt_info .pic img {
    display: block;
    width: 100%;
  }

  .img_txt_info .txt {
    float: right;
    width: 60%;
    position: relative;
  }

  .img_txt_info .txt p {
    font-size: 0.28rem;
    margin-bottom: 0.3rem;
    line-height: 0.45rem;
  }

  .img_txt_info .txt .prise strong {
    font-size: 0.28rem;
    color: #dd2523;
    margin-right: 0.2rem;
  }

  .img_txt_info .txt .prise span {
    font-size: 0.24rem;
    color: #999;
  }

  .img_txt_info .txt .oppint {
    position: absolute;
    bottom: 0.05rem;
    right: 0.1rem;
    display: inline-block;
    font-size: 0.22rem;
    padding: 0 0.1rem;
    height: 0.3rem;
    line-height: 0.3rem;
    border: 1px solid #DB2C1B;
    color: #DB2C1B;
    border-radius: 0.1rem;
  }

  .introduction {
    padding: 0 0.2rem 0.2rem;
  }

  .introduction h5 {
    text-align: center;
    font-size: 0.32rem;
    margin-bottom: 0.2rem;
    position: relative;
  }

  .introduction h5 span {
    display: block;
    width: 1rem;
    margin: 0 auto;
    background: #fff;
    position: relative;
    z-index: 2;
  }

  .introduction h5:after {
    position: absolute;
    top: 0.3rem;
    left: 0;
    width: 100%;
    height: 1px;
    content: "";
    background: #ccc;
    z-index: 1;
  }

  .introduction p {
    font-size: 0.28rem;
    padding-bottom: 0.2rem;
  }

  .introduction img {
    display: block;
    width: 100%;
    margin: 0 auto 0.2rem;
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
  .courseLst {
    padding: 0.2rem;
  }

  .courseLst h3 {
    font-size: 0.32rem;
    color: #333;
    position: relative;
    height: 0.8rem;
    line-height: 0.8rem;
    padding-left: 0.2rem;
  }

  .courseLst h3:before {
    position: absolute;
    top: 0.26rem;
    left: 0;
    content: "";
    width: 0.05rem;
    height: 0.3rem;
    background: #DB2C1B;
  }

  .courseLst .list li {
    padding: 0.2rem 0;
    border-bottom: 1px solid #ececec;
  }

  .courseLst .list li:last-child {
    border: none;
  }

  .courseLst .list li {
    position: relative;
  }

  .courseLst .list li h5 {
    font-size: 0.28rem;
    color: #333;
  }

  .courseLst .list li span {
    font-size: 0.24rem;
    color: #666;
    margin-right: 0.3rem;
  }

  .courseLst .list li i.turn {
    display: inline-block;
    width: 0.3rem;
    height: 0.3rem;
    background: url(../assets/img/icon15.png) no-repeat center;
    background-size: 0.3rem 0.3rem;
    position: absolute;
    top: 0.3rem;
    right: 0.1rem;
  }

  .courseLst .list li i.turn.on {
    display: inline-block;
    width: 0.3rem;
    height: 0.3rem;
    background: url(../assets/img/icon15on.png) no-repeat center;
    background-size: 0.3rem 0.3rem;
    position: absolute;
    top: 0.3rem;
    right: 0.1rem;
  }

  /*.courseLst .list li.on i.turn{display:inline-block;width:0.3rem;height:0.3rem;
  background:url(../img/icon15on.png) no-repeat center;background-size:0.3rem 0.3rem;position:absolute;top:0.3rem;
  right:0.1rem;}*/

  .courseLst .main {
    padding-top: 0.2rem;
  }

  .courseLst .main p {
    font-size: 0.26rem;
    color: #666;
    text-indent: 0.2rem;
  }

  .alert_cont {
    position: fixed;
    top: 20%;
    left: 50%;
    width: 6rem;
    margin-left: -3rem;
    background: #fff;
    z-index: 101;
    border-radius: 0.1rem;
  }
  .adresform_1 .btnmod {
    text-align: center;
  }

  .adresform_1 .btnmod .btn {
    border: none;
    border-radius: 0.1rem;
    width: 2rem;
    height: 0.88rem;
    font-size: 0.33rem;
    color: #fff;
    margin: 0 0.1rem;
  }

  .adresform_1 .btnmod .confirm {
    background: #db2c1b;
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

  .courseshare {
    padding-top: 0;
    position: fixed;
    bottom: 0;
    width: 100%;
    left: 0;
    background: #fff;
    z-index: 99;
  }

  .courseshare h3 {
    border-bottom: 1px solid #ECECEC;
  }

  .courseshare h3:before {
    display: none;
  }

  .courseshare ul {
    padding: 0.3rem 1rem;
  }

  .courseshare ul li {
    float: left;
    width: 50%;
    text-align: center;
  }

  .courseshare ul li img {
    display: block;
    margin: 0 auto;
    width: 1rem;
    height: 1rem;
  }

  .courseshare ul li span {
    font-size: 0.22rem;
    color: #333;
  }

  .courseLst {
    padding: 0.2rem;
  }

  .courseLst h3 {
    font-size: 0.32rem;
    color: #333;
    position: relative;
    height: 0.8rem;
    line-height: 0.8rem;
    padding-left: 0.2rem;
  }

  .courseLst h3:before {
    position: absolute;
    top: 0.26rem;
    left: 0;
    content: "";
    width: 0.05rem;
    height: 0.3rem;
    background: #DB2C1B;
  }

  .courseLst .list li {
    padding: 0.2rem 0;
    border-bottom: 1px solid #ececec;
  }

  .courseLst .list li:last-child {
    border: none;
  }

  .courseLst .list li {
    position: relative;
  }

  .courseLst .list li h5 {
    font-size: 0.28rem;
    color: #333;
  }

  .courseLst .list li span {
    font-size: 0.24rem;
    color: #666;
    margin-right: 0.3rem;
  }

  .courseLst .list li i.turn {
    display: inline-block;
    width: 0.3rem;
    height: 0.3rem;
    background: url(../assets/img/icon15.png) no-repeat center;
    background-size: 0.3rem 0.3rem;
    position: absolute;
    top: 0.3rem;
    right: 0.1rem;
  }

  .courseLst .list li i.turn.on {
    display: inline-block;
    width: 0.3rem;
    height: 0.3rem;
    background: url(../assets/img/icon15on.png) no-repeat center;
    background-size: 0.3rem 0.3rem;
    position: absolute;
    top: 0.3rem;
    right: 0.1rem;
  }

  /*.courseLst .list li.on i.turn{display:inline-block;width:0.3rem;height:0.3rem;
  background:url(../img/icon15on.png) no-repeat center;background-size:0.3rem 0.3rem;position:absolute;top:0.3rem;
  right:0.1rem;}*/

  .courseLst .main {
    padding-top: 0.2rem;
  }

  .courseLst .main p {
    font-size: 0.26rem;
    color: #666;
    text-indent: 0.2rem;
  }
</style>
