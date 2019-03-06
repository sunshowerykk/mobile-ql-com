<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 0px;
  }
  *{
    padding: 0;
    margin: 0;
  }

  html {
    -webkit-text-size-adjust: none; /*解决chrome浏览器下字体不能小于12px*/
    font-size: 312.5%;
  }
  body{
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    color: #333;
    font-size: 50px;
  }
  h1,h2,h3,h4,h5,h6{
    font-weight: normal;
    text-align: left;
  }

  strong, em, i {
    font-style: normal;
    font-weight: normal;
  }

  a{
    text-decoration: none;
  }
  a:hover, a:link, a:visited, a {
    color: inherit;
    text-decoration: none;
  }
  ul,li,ol{
    list-style: none;
  }

  /*头部 start*/
  .header {
    background: #db2c1b;
    height: 0.88rem;
    line-height: 0.88rem;
    position: relative;
  }

  .header .logo {
    width: 1.25rem;
    margin: 0 auto;
    padding-top: 0.25rem;
  }

  .header .logo img {
    display: block;
    width: 100%;
  }

  .header .toLogin {
    font-size: 0.26rem;
    display: inline-block;
    height: 0.88rem;
    line-height: 0.88rem;
    top: 0;
    right: 0.2rem;
    position: absolute;
    color: #fff;
  }
  /*头部 end*/

  /*swiper banner*/
  .swiper-pagination.banner-swiper .swiper-pagination-bullet{
    background: #fff;
    width: 0.3rem;
    height: 0.05rem;
    border-radius: initial;
    opacity: 1;
  }
  .swiper-pagination.banner-swiper .swiper-pagination-bullet-active{
    background: #31a76b;
  }

  /*swiper notice*/
  .swiper-container.swiper-notice{

  }
  .swiper-container.swiper-notice .swiper-slide{
    background:transparent;
    text-align: left;
    justify-content: left;
  }
  .clearfix:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
    line-height: 0;
  }

  .clearfix {
    zoom: 1;
  }

  /*过渡动画*/
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

  .font-box{
    font-size: 0.24rem;
  }
  /*.vux-tab-container{
    height: 36px !important;
  }
  .vux-tab{
    height: 36px !important;
  .vux-tab-item{
    line-height: 36px !important;
  }
  }*/

  .vux-tab-wrap.custom-tab .vux-tab-container{
    height: 36px;
    line-height: 0.4rem;
  }
  .vux-tab-wrap.custom-tab .vux-tab{
    height: 36px;
    .vux-tab-item{
      line-height: 36px;
    }
  }

  /*精品课 start*/
  .setMeal {
    padding: 0.2rem;
  }

  .setMeal .tit {
    height: 0.8rem;
    line-height: 0.8rem;
    padding-left: 0.2rem;
  }

  .setMeal .tit h3 {
    font-size: 0.32rem;
    color: #333;
    position: relative;
    padding-left: 0.2rem;
  }

  .setMeal .tit h3:before {
    position: absolute;
    top: 0.26rem;
    left: 0;
    content: "";
    width: 0.05rem;
    height: 0.3rem;
    background: #DB2C1B;
  }

  .setMeal .list {
    padding: 0.2rem 0;
  }

  .setMeal .list li {
    background: #fff;
    margin-bottom: 0.3rem;
    border-bottom-left-radius: 0.1rem;
    border-bottom-right-radius: 0.1rem;
    box-shadow: 0px 8px 10px 0 rgba(0, 0, 0, 0.1);
  }

  .setMeal .list li:last-child {
    margin-bottom: 0;
  }

  .setMeal .list li .type {
    background: url(./assets/img/li_bg1.png) no-repeat center;
    background-size: 100% 100%;
    padding: 0.2rem 0.3rem 0.3rem;
    border-top-left-radius: 0.1rem;
    border-top-right-radius: 0.1rem;
    position: relative;
  }

  .setMeal .list li .type .classname {
    font-size: 0.28rem;
    color: #fff;
    display: block;
    margin-bottom: 0.2rem;
  }

  .setMeal .list li .type .classs {
    position: absolute;
    top: 0.33rem;
    right: 0.3rem;
    padding: 0 0.1rem;
    height: 0.3rem;
    line-height: 0.3rem;
    font-size: 0.22rem;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 0.1rem;
  }

  .setMeal .list li .bg2 {
    background: url(./assets/img/li_bg2.png) no-repeat center;
    background-size: 100% 100%;
  }

  .setMeal .list li .bg3 {
    background: url(./assets/img/li_bg3.png) no-repeat center;
    background-size: 100% 100%;
  }

  .setMeal .list li dd {
    float: left;
    margin-right: 0.2rem;
  }

  .setMeal .list li dd img {
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 1rem;
    vertical-align: top;
    margin-right: 0.1rem;
  }

  .setMeal .list li dd span {
    font-size: 0.22rem;
    color: #fff;
    display: inline-block;
    line-height: 0.6rem;
  }

  .setMeal .list li .prisebox {
    padding: 0.4rem 0.3rem;
    overflow: hidden;
  }

  .setMeal .list li .prisebox .prise {
    font-size: 0.28rem;
    color: #DB2C1B;
  }

  .setMeal .list li .prisebox .bought {
    float: right;
    font-size: 0.26rem;
    color: #999;
  }

  .setMeal .list li .prisebox .bought i {
    display: inline-block;
    width: 0.3rem;
    height: 0.3rem;
    background: url(./assets/img/ivon11.png) no-repeat center;
    background-size: 0.3rem 0.3rem;
    vertical-align: top;
    margin: 0.05rem 0.1rem;
  }
  /*精品课 end*/

  /*分享*/
  .share{
    display: block;
    width: 0.32rem;
    height: 0.32rem;
    position: absolute;
    top: 0.28rem;
    right: 0.3rem;
    background: url(./assets/img/icon12.png) no-repeat center;
    background-size: 0.32rem 0.32rem;
  }
  .fl {
    float: left;
  }

  .fr {
    float: right;
  }

  .vux-tab-wrap.class-detail-tab-box{
    padding-top: 0.7rem;
  }
  .vux-tab-wrap.class-detail-tab-box .vux-tab-container{
    height: 0.7rem;
  }
  .vux-tab-wrap.class-detail-tab-box .vux-tab{
    height: 0.7rem;
  }
  .vux-tab-wrap.class-detail-tab-box  .vux-tab .vux-tab-item{
    line-height: 0.7rem;
  }

  .orderList {
    padding: 0.2rem;
  }

  .orderList ul li {
    margin-bottom: 0.2rem;
    background: #fff;
    padding: 0.2rem;
    overflow: hidden;
  }

  .orderList ul li .pic {
    float: left;
    width: 30%;
  }

  .orderList ul li .pic img {
    display: block;
    width: 100%;
    border-radius: 0.1rem;
  }

  .orderList ul li .txt {
    float: right;
    width: 65%;
    position: relative;
  }

  .orderList ul li .txt h5 {
    font-size: 0.28rem;
    color: #333;
    line-height: 0.3rem;
    margin-bottom: 0.4rem;
  }

  .orderList ul li .txt span {
    font-size: 0.26rem;
    color: #666;
  }

  .orderList ul li .txt strike {
    font-size: 0.22rem;
    color: #999;
  }

  .orderList ul li .txt span.time {
    font-size: 0.2rem;
    color: #999;
    position: absolute;
    bottom: 0.03rem;
    right: 0;
  }

  .xollection .tip {
    text-align: center;
    padding-top: 0.2rem;
  }
  .xollection .tip span {
    font-size: 0.2rem;
    color: #999;
  }
  .xollection ul li .txt span.red {
    color: #DB2C1B;
  }

  .weui-cell.generalize-sel-date .weui-cell__ft:after {
    display: none;
  }
  .generalize-title > .vux-no-group-title{
    margin: 0 auto;
    width: 50%;
    height: 0.7rem;
    border-radius: 0.7rem;
  }
  .generalize-title .weui-cell{
    padding: 0;
    line-height: 0.7rem;
  }
  .generalize-title .weui-cell__ft{
    text-align: center;
    padding-right: 0;
  }

  .orderbotFix {
    position: fixed;
    z-index: 990;
    bottom: 0;
    left: 0;
    width: 100%;
  }

  .orderbotFix .left {
    width: 50%;
    height: 0.88rem;
  }

  .orderbotFix .right {
    width: 50%;
    height: 0.88rem;
  }

  .orderbotFix .btn {
    display: block;
    text-align: center;
    width: 100%;
    font-size: 0.36rem;
    color: #222;
    line-height: 0.88rem;
  }

  .orderbotFix .left .btn {
    background: #fff;
    border-top: 1px solid #ECECEC;
  }

  .orderbotFix .right .btn {
    background: #DB2C1B;
    color: #fff;
  }

  .orderbotFix .left strong {
    color: #DB2C1B;
  }
</style>
