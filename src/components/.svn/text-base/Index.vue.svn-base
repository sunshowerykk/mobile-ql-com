<template>
    <div>
      <div class="header">
        <div class="logo">
          <img src="../assets/img/logo.png" />
        </div>
        <router-link to="/Login" class="toLogin">登录</router-link>
      </div>

      <!--导航-->
      <Navigation></Navigation>

      <!--轮播图-->
      <swiper :options="swiperOption" class="swiper-container">
        <swiper-slide v-for="(slide, index) in bannerImages" :key="index">
          <router-link to="">
            <img :src="slide" alt="">
          </router-link>
        </swiper-slide>
        <div class="swiper-pagination banner-swiper" slot="pagination"></div>
      </swiper>

      <!--公告 notice start-->
      <div class="notice_box">
        <!--<router-link :to="{name: 'Notice',params:{id: 1}}">aaaa</router-link>-->
        <div class="w_new">
          <span>公告</span>
        </div>
        <div class="notice-swiper-box">
          <swiper :options="swiperNotice" class="swiper-notice">
            <swiper-slide v-for="(slide, index) in noticeDatas" :key="index">
              <router-link :to="{name: 'Notice',params:{id: 1}}">
                <div>{{ slide.title }} <span>活动时间：{{ slide.date}}</span></div>
              </router-link>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <!--公告 notice end-->

      <!--资讯 start-->
      <div class="indexNews">
        <div class="tit">
          <h3>资讯</h3>
        </div>
        <div>
          <router-link :to="{ name: 'InformationDetail',params: { id: '1'} }">
            <div>
              <h5>19:30名师指导2019年中级会计职称怎么学</h5>
              <small>
                <span>中华会计网校</span>
              </small>
            </div>
            <div>
              <img src="../assets/img/img3.png" alt="">
            </div>
          </router-link>
          <router-link :to="{ name: 'InformationDetail',params: { id: '1'} }">
            <div>
              <h5>19:30名师指导2019年中级会计职称怎么学</h5>
              <small>
                <span>中华会计网校</span>
              </small>
            </div>
            <div>
              <img src="../assets/img/img3.png" alt="">
            </div>
          </router-link>
          <router-link to="">
            <div>
              <h5>19:30名师指导2019年中级会计职称怎么学</h5>
              <small>
                <span>中华会计网校</span>
              </small>
            </div>
            <div>
              <img src="../assets/img/img3.png" alt="">
            </div>
          </router-link>
        </div>
      </div>
      <!--资讯 end-->

      <!--python 弹窗 start-->
      <transition name="fade">
        <div class="recenLearning" v-show="recenLearningShow">
          <div class="cont">
            <span class="close" @click="recenLearningShow = !recenLearningShow"></span>
            <a href="#">
              <div class="pic">
                <img src="../assets/img/img4.png"  />
                <span>最近学习</span>
              </div>
              <div class="txt">
                <h5>语言程序设计</h5>
                <span>课程内容渐进式进行</span>
              </div>
              <span class="moreicon"></span>
            </a>
          </div>
        </div>
      </transition>
      <!--python 弹窗 end-->

    </div>
</template>

<script>
  // require styles
  import 'swiper/dist/css/swiper.css'

  import { swiper, swiperSlide } from 'vue-awesome-swiper'

    export default {
      name: "Index",
      data(){
          return{
            swiperOption: {
              // some swiper options/callbacks
              // 所有的参数同 swiper 官方 api 参数
              // ...
              pagination: {
                el: '.swiper-pagination',
                clickable: true,
              },
              autoplay: {
                delay: 3000,
                stopOnLastSlide: false,
                disableOnInteraction: false,
              },
              loop : true,
            },
            swiperNotice:{
              autoplay: {
                delay: 2000,
                stopOnLastSlide: false,
                disableOnInteraction: false,
              },
              loop : true,
              direction : 'vertical',
            },
            bannerImages:['/static/images/indexbanner.png','/static/images/indexbanner.png','/static/images/indexbanner.png'],
            noticeDatas:[
              {
                id: '1',
                title: '低价得好课拼团一起学',
                date: '2012.12.12'
              },
              {
                id: '2',
                title: '低价得好课拼团一起学',
                date: '2012.12.12'
              }
            ],
            recenLearningShow: true,
          }
      },
      components:{
          swiper,
          swiperSlide
      },
      computed: {
        swiper() {
          return this.$refs.mySwiper.swiper
        }
      },
      methods:{
      }
    }
</script>

<style scoped>

  /*swiper start*/
  .swiper-container {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  .swiper-container img{
    width: 100%;
    display: block;
  }

  .swiper-pagination.banner-swiper{
    font-size: 0px;
    line-height: 0px;
    bottom: 0.3rem;
  }
  /*swiper end*/

  /*公告 start*/
  .notice_box{
    width: 94.6%;
    margin: 0.3rem auto;
    background: url("../assets/img/noticeBg.png") no-repeat center;
    background-size: cover;
    /*padding: 0.2rem 0 0.2rem 1rem;*/
    padding-left: 1rem;
    display: flex;
    box-sizing: border-box;
    border-radius: 0.82rem;
    align-items: center;
    overflow: hidden;
    height: 0.81rem;
  }
  .notice_box .w_new{
    font-size: 0.32rem;
    color: #7d0818;
    flex-shrink: 0;
  }
  .notice-swiper-box{
    flex-grow: 1;
    padding-left: 0.2rem;
    box-sizing: border-box;
    overflow: hidden;
    padding-right: 0.5rem;
  }
  .notice-swiper-box a{
    color: #62432e;
    font-size: 0.22rem;
    text-align: left;
    overflow: hidden;
  }
  .notice-swiper-box a > div{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .notice-swiper-box a span{
    color: #DB2C1B;
    padding-left: 0.1rem;
  }
  .swiper-container.swiper-notice{
    height: 0.81rem;
  }
  /*公告 end*/

  /*资讯 start*/
  .indexNews .tit {
    height: 0.8rem;
    line-height: 0.8rem;
    border-bottom: 1px solid #ececec;
    padding-left: 0.2rem;
  }
  .indexNews .tit h3 {
    font-size: 0.32rem;
    color: #333;
    position: relative;
    padding-left: 0.2rem;
  }
  .indexNews .tit h3:before {
    position: absolute;
    top: 0.26rem;
    left: 0;
    content: "";
    width: 0.05rem;
    height: 0.3rem;
    background: #DB2C1B;
  }
  .indexNews > div:last-child{
    font-size: 0.24rem;
  }
  .indexNews > div:last-child a{
    display: flex;
    border-bottom: 1px solid #ECECEC;
    padding: 0.2rem;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    line-height:initial;
  }
  .indexNews > div:last-child a > div:first-child{
    width: 68%;
    text-align: left;
  }
  .indexNews > div:last-child a > div:first-child h5{
    font-size: 0.3rem;
    color: #333;
    line-height: 0.35rem;
    margin-bottom: 0.25rem;
  }
  .indexNews > div:last-child a > div:first-child small{
    font-size: 0.24rem;
    color: #999;
  }
  .indexNews > div:last-child a > div:first-child small >span:first-child{
    margin-right: 0.3rem;
  }
  .indexNews > div:last-child a > div:last-child{
    width: 28%;
  }
  .indexNews > div:last-child a > div:last-child img{
    width: 100%;
    display: block;
  }
  .indexNews > div:last-child a:last-child{
    border-bottom: none;
  }
  /*资讯 end*/

  /*python 弹窗 start*/
  .recenLearning {
    padding: 0.2rem;
    font-size: 0.24rem;
  }

  .recenLearning .cont {
    padding: 0.4rem 0.3rem;
    position: relative;
    background: #333333;
    border-radius: 0.1rem;
    overflow: hidden;
  }

  .recenLearning .cont .pic {
    float: left;
    width: 30%;
    position: relative;
  }

  .recenLearning .cont .pic img {
    display: block;
    width: 100%;
  }

  .recenLearning .cont .pic span {
    display: inline-block;
    height: 0.3rem;
    line-height: 0.3rem;
    width: 1rem;
    color: #fff;
    font-size: 0.18rem;
    background: #ff7a41;
    position: absolute;
    bottom: 0;
    left: 0;
    text-align: center;
    border-bottom-right-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }

  .recenLearning .cont .txt {
    float: right;
    width: 66%;
    color: #fff;
    text-align: left;
    margin-top: 0.07rem;
  }

  .recenLearning .cont .txt h5 {
    font-size: 0.28rem;
    margin-bottom:0.1rem;
  }

  .recenLearning .cont .txt span {
    font-size: 0.24rem;
  }

  .recenLearning .cont .moreicon {
    display: inline-block;
    width: 0.32rem;
    height: 0.32rem;
    position: absolute;
    top: 50%;
    right: 0.3rem;
    margin-top: -0.16rem;
    background: url(../assets/img/moreicon.png) no-repeat center;
    background-size: 0.32rem 0.32rem;
  }

  .recenLearning .cont .close {
    position: absolute;
    top: 0;
    left: 0rem;
    width: 0.32rem;
    height: 0.32rem;
    background: url(../assets/img/closebtn.png) no-repeat center #000;
    background-size: 0.32rem 0.32rem;
    cursor: pointer;
  }


  /*python 弹窗 end*/
</style>
