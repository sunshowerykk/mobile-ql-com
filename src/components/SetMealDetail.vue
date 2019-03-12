<!--套餐详情-->
<template>
    <div class="font-box">
      <TopBack>
        <span slot="headerTxt">{{ packageDetail.package.name }}</span>
      </TopBack>

      <!--nav start-->
      <div class="detailImg">
        <div class="share" @click="showShare"></div>
        <div  class="indexBanner top_0124" >
          <div class="top">
            <span>2019年</span>
            <strong><i></i>山东<i></i></strong>
            <span>专升本</span>
          </div>
          <div class="type">
            <strong>《 {{ packageDetail.package.name }} 》</strong>
            <strong>VIP套餐班</strong>
          </div>
          <ul class="clearfix">
            <li>
              <a href="#">
                <div class="item">
                  <span>知识</span><span>精讲</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div class="item">
                  <span>同步</span><span>训练</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div class="item">
                  <span>通关</span><span>测试</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div class="item">
                  <span>即时</span><span>答疑</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!--nav end-->

      <!--tabs-->
      <tab active-color="#DB2C1B" :line-width="2" class="custom-tab">
        <tab-item selected @on-item-click="onItemClick">介绍</tab-item>
        <tab-item @on-item-click="onItemClick">课程</tab-item>
      </tab>

      <!--tab content-->
      <transition-group name="fade" mode="out-in" tag="div">

        <div v-if="activeIndex == 0" key="0">
          <div class="tab-bd">
            <div class="tab-pal">
              <div class="courseLst">
                <h3>简介</h3>
                <div class="main" v-html="packageDetail.package.intro"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="courseLst" key="1" v-if="activeIndex == 1">
          <h3>课程</h3>
          <div class="list">
            <ul>
              <li v-for="course in packageDetail.course">
                <router-link :to="{'name': 'ClassShare', params:{id: course.id}}">
                  <div class="item">
                    <h5>{{ course.name }}</h5>
                    <span class="prise">单价￥{{ course.discount }}</span>
                    <span class="classHours">课时{{ course.classrooms }}</span>
                    <i class="turn"></i>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
        </div>

      </transition-group>

      <Share v-if="share" :share="share" @changeShare="changeShare($event)"></Share>

      <div class="botFixed" v-show="!pay">
        <div class="cont clearfix">
          <div class="left">
            <ul class="clearfix">
              <li>
                <a href="javascript:;">
                  <i class="consult"></i>
                  <span>咨询</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <i class="collect" :class="{ on: collect}" @click="collect = !collect"></i>
                  <span>收藏</span>
                </a>
              </li>
              <li class="money">
                <a href="javascript:;">
                  <strong>￥{{ packageDetail.package.discount }}</strong>
                  <span><s>￥{{ packageDetail.package.price }}</s></span>
                </a>
              </li>
            </ul>
          </div>
          <div class="right">
            <router-link :to="{'name': 'PayCenter', params:{info: packageDetail.package}}" class="btn">立即购买</router-link>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
  import { Tab, TabItem } from 'vux'
  import  service from '@/http/services/package.js'
    export default {
      name: "SetMealDetail",
      data(){
        return{
          pid: 0,
          datas:['1','2'],
          activeIndex: 0,
          share: false,
          packageDetail: {
            package: '',
            course: ''
          },
          pay: false,
          collect: false,
        }
      },
      created() {
        this.pid = this.$route.params.pid;
        console.log("pid",this.$route.params.pid);
      },
      components: {
        Tab,
        TabItem
      },
      methods:{
        onItemClick(index){
          this.activeIndex = index;
        },
        changeShare(msg){
          this.share = msg;
        },
        showShare(){
          this.share = true;
        },

        getPackageDetail() {
          service.packageService.packageDetail({pid: this.pid}).then(res => {
            if (res.status === 200 && res.data.status === 0) {
              this.packageDetail.package = res.data.package;
              this.packageDetail.course = res.data.course;
              console.log(this.packageDetail);
            } else {
              alert('wrong!');
            }
          })
        }
      },

      mounted: function () {
        this.getPackageDetail();
      }
    }
</script>


<style scoped lang="less">
  .detailImg {
    position: relative;
  }

  .detailImg .share {
    width: 0.45rem;
    height: 0.45rem;
    background: url(../assets/img/icon12.png) no-repeat center rgba(0, 0, 0, 0.5);
    background-size: 0.3rem 0.3rem;
    position: absolute;
    top: 0.2rem;
    right: 0.2rem;
    z-index: 10;
  }

  .detailImg .hd {
    bottom: 0.2rem;
  }

  .detailImg .hd ul li {
    width: 0.1rem;
    height: 0.1rem;
    border-radius: 0.5rem;
    border: 1px solid #fff;
    background: none;
  }

  .detailImg .hd ul li.on {
    background: #fff;
  }

  .detailImg .img {
    display: block;
    width: 100%;
  }

  .detailImg .goback {
    width: 0.45rem;
    height: 0.45rem;
    background: url(../assets/img/goback.png) no-repeat center rgba(0, 0, 0, 0.5);
    background-size: 0.3rem 0.3rem;
    position: absolute;
    top: 0.2rem;
    left: 0.2rem;
    z-index: 10;
    border-radius: 1rem;
  }

  .detailImg .classname {
    position: absolute; /*bottom:0;*/
    top: 0.9rem;
    left: 0;
    width: 100%;
    font-size: 0.28rem;
    color: #fff;
  }

  .detailImg .classname strong {
    margin: 0.2rem;
  }

  .detailImg .classname .school {
    padding: 0 0.2rem 0.2rem;
  }

  .detailImg .classname .school span {
    margin-right: 0.2rem;
  }

  .detailImg .classname h5 {
    text-align: center;
    padding: 0 0.2rem;
    font-size: 0.6rem;
    color: #7fd7ff;
    font-weight: bold;
    text-shadow: 0.05rem 0.05rem 0.05rem #000;
    padding-bottom: 0.5rem;
  }

  .detailImg .classname h5 span {
    margin-left: 0.3rem;
  }

  .top_0124 {
    background: url(../assets/img/img8.png) no-repeat center;
    background-size: 100% 100%;
  }

  .top_0124 .top {
    text-align: center;
  }

  .top_0124 .top span {
    font-size: 0.24rem;
    color: #000;
    font-weight: bold;
  }

  .top_0124 .top strong {
    display: inline-block;
    font-size: 0.34rem;
    color: #fff;
    font-weight: bold;
    padding: 0 0.3rem;
    height: 0.7rem;
    line-height: 0.7rem;
    background: rgba(0, 0, 0, 0.2);
    position: relative;
  }

  .top_0124 .top strong i {
    display: inline-block;
    width: 0.05rem;
    height: 0.05rem;
    background: #000;
    margin: 0 0.1rem;
  }

  .top_0124 .top strong i:first-child {
    position: absolute;
    top: 0.35rem;
    left: 0;
  }

  .top_0124 .top strong i:last-child {
    position: absolute;
    top: 0.35rem;
    right: 0;
  }

  .top_0124 .type {
    padding: 0.5rem 0;
  }

  .top_0124 .type strong {
    display: block;
    text-align: center;
    font-size: 0.7rem;
    font-weight: bold;
    color: #fff;
    line-height: 0.76rem;
  }

  .top_0124 ul {
    text-align: center;
    padding-bottom: 0.5rem;
  }

  .top_0124 ul li {
    display: inline-block;
    margin: 0 0.2rem;
    background: #cb9fba;
    border: 3px solid #552644;
    border-radius: 1rem;
    width: 1.05rem;
    height: 1.05rem;
  }

  .top_0124 ul li span {
    display: block;
    font-size: 0.26rem;
    color: #8a0317;
    line-height: 0.3rem;
  }

  .top_0124 ul li .item {
    padding-top: 0.2rem;
  }

  .tab-active{
    color: #DB2C1B;
  }

  .vux-tab-wrap.custom-tab{
    padding-top: 36px;
  }

  /*选项卡切换内容*/
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

  .fade-enter-active{
    transition: opacity .5s;
    transition-delay: .5s;
  }
  .fade-leave-active{
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

  .botFixed {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 99;
    background: #fff;
    overflow: hidden;
  }

  .botFixed .left {
    float: left;
    width: 75%;
    height: 0.88rem;
    overflow: hidden;
  }

  .botFixed .left ul li {
    float: left;
    width: 33.3333%;
    text-align: center;
    padding-top: 0.1rem;
  }

  .botFixed .left ul li i {
    display: block;
    width: 0.32rem;
    height: 0.32rem;
    margin: auto;
  }

  .botFixed .left ul li i.consult {
    background: url(../assets/img/icon13.png) no-repeat center;
    background-size: 0.32rem 0.32rem;
  }

  .botFixed .left ul li i.collect {
    background: url(../assets/img/icon14.png) no-repeat center;
    background-size: 0.32rem 0.32rem;
  }

  .botFixed .left ul li i.collect.on {
    background: url(../assets/img/icon14on.png) no-repeat center;
    background-size: 0.32rem 0.32rem;
  }

  .botFixed .left ul li span {
    font-size: 0.22rem;
    color: #333;
  }

  .botFixed .left ul li.money {
    background: #f3f2f7;
    height: 0.88rem;
  }

  .botFixed .left ul li.money strong {
    display: block;
    font-size: 0.28rem;
    color: #DB2C1B;
    line-height: 0.33rem;
  }

  .botFixed .right {
    float: right;
    width: 25%;
  }

  .botFixed .right .btn {
    width: 100%;
    height: 0.88rem;
    font-size: 0.3rem;
    color: #fff;
    background: #DB2C1B;
    cursor: pointer;
    display: block;
    text-align: center;
    line-height: 0.88rem;
  }
</style>
