<template>
  <div>
    <!--弹出层 背景-->
    <div class="alert_bg" @click="hideModal"></div>
    <!--分享弹出层-->
    <div class="courseLst courseshare" v-if="share">
      <h3>分享至</h3>
      <ul class="clearfix">
        <li>
          <a href="#">
            <img src="../../assets/img/icon16.png" />
            <span>微信好友</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../../assets/img/icon17.png" />
            <span>微信好友</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Share",
      props:["share"],
      methods:{
        hideModal(){
          this.$emit("changeShare", 0);
        }
      }
    }
</script>

<style scoped>
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

</style>
