<template>
    <div class="font-box book-detail" v-loading="loading">
      <TopBack>
        <span slot="headerTxt">{{book.name}}</span>
        <!--<span slot="share" class="share" @click="showShare"></span>-->
      </TopBack>

      <div class="img_txt_info">
        <div class="clearfix">
          <div class="pic">
            <img :src="book.pictrue" />
          </div>
          <div class="txt">
            <p>{{book.name}}</p>
            <div class="prise">
              <strong>￥{{book.order_price}}预订价</strong>
              <span><strike>{{book.price}}</strike>售价</span>
            </div>
            <div class="intro">
              {{book.intro}}
            </div>
          </div>
          <div class="oppint" @click="showReserve">我要预订</div>
        </div>
      </div>
      <div class="introduction">
        <h5><span>简介</span></h5>
        <div v-html="book.des"></div>
      </div>

      <!--弹出层 背景-->
      <div class="alert_bg" v-if="bgVal" @click="hideModal"></div>

      <!--分享弹出层-->
      <div class="courseLst courseshare" v-if="share">
        <h3>分享至</h3>
        <ul class="clearfix">
          <li>
            <a href="#">
              <img src="../../../assets/img/icon16.png" />
              <span>微信好友</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="../../../assets/img/icon17.png" />
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
                    <textarea placeholder="请填写宿舍地址" class="text tera"></textarea>
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
            },
            loading: true
          }
      },
      warning () {
        this.$Message.warning('尚未登陆');
      },
      created() {
        this.id = this.$route.params.id;
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
          if(this.access_token == null) {
            this.warning();
          } else {
              service.bookService.info({'access-token': this.orderform.access_token}).then(res => {
                if (res.status === 200) {
                  this.orderform.username = res.data.username;
                  this.orderform.phone = res.data.phone;
                  this.orderform.address = res.data.address;
                }
              })
              this.reserve = true;
              this.bgVal = true;
          }
        },
        showShare(){
          this.share = true;
          this.bgVal = true;
        },

        initbookdetail:function() {
          service.bookService.detail(this.bookidform).then(res => {
            if (res.status === 200) {
              this.book = res.data;
              this.orderform.book_name = res.data.name;
              this.orderform.access_token = this.$cookies.get('access_token');
              this.loading = false;
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
