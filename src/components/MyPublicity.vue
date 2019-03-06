<template>
  <div class="font-box">
    <TopBack>
      <span slot="headerTxt">都想学</span>
      <span slot="share" class="share" @click="showShare"></span>
    </TopBack>
    <div class="preach">
      <div class="pic">
        <a href="#"><img src="../assets/img/img27.png"  /></a>
      </div>
      <div class="bg">
        <img src="../assets/img/img28.png" class="posi" />
        <div class="cont">
          <div class="list">
            <ul class="clearfix">
              <li><a href="#"><img src="../assets/img/font1.png" /></a></li>
              <li><a href="#"><img src="../assets/img/font2.png" /></a></li>
              <li><a href="#"><img src="../assets/img/font3.png" /></a></li>
              <li><a href="#"><img src="../assets/img/font4.png" /></a></li>
            </ul>
          </div>
          <div class="wema">
            <img src="../assets/img/ma.png"  />
          </div>
        </div>
      </div>
      <!--<div class="tips">
                  <p><b>奖励规则</b>当您的好友扫您的二维码成功注册后金币,您和好友分别或得</p>
                  <p>奖励规则当您的好友扫您的二维码成功注册后金币,您和好友分别或得</p>
              </div>-->
    </div>

    <Share v-if="share" :share="share" @changeShare="changeShare($event)"></Share>
  </div>
</template>

<script>
    export default {
        name: "Publicity",
      data(){
          return{
            share: false,
          }
      },
      methods:{
        showShare(){
          this.share = true;
        },
        changeShare(msg){
          this.share = msg;
        }
      }
    }
</script>

<style scoped>
  .preach .pic img {
    display: block;
    width: 100%;
  }

  .preach .bg {
    position: relative;
    height: 7.97rem;
  }

  .preach .bg .posi {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
  }

  .preach .bg .cont {
    position: relative;
    z-index: 9;
  }

  .preach .bg .list {
    padding: 0.4rem;
  }

  .preach .bg .list li {
    float: left;
    width: 25%;
    text-align: center;
  }

  .preach .bg .list li img {
    display: block;
    margin: 0 auto;
    width: 1.2rem;
    height: 1.2rem;
  }

  .preach .bg .wema {
    padding-top: 1rem; /*padding-bottom:3rem;*/
  }

  .preach .bg .wema img {
    display: block;
    margin: 0 auto;
    width: 2.15rem;
  }

  .preach .tips {
    padding: 0.2rem;
  }

  .preach .tips p {
    font-size: 0.26rem;
    color: #333;
  }
</style>
