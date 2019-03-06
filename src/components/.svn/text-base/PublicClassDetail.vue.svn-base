<!--公开课视频详情-->
<template>
    <div class="font-box">
      <TopBack>
        <span slot="headerTxt">本章导学</span>
        <span slot="share" class="share" @click="showShare"></span>
      </TopBack>

      <div class="viedoCont">
        <div class="cont">
          <video class="video" poster="../assets/img/img31.jpg" id="video" controls>
            <source src="../assets/viedo/video.mp4" type="video/mp4">抱歉，你的浏览器不能查看该视频
          </video>
        </div>
      </div>

      <Share v-if="share" :share="share" @changeShare="changeShare($event)"></Share>
    </div>
</template>

<script>
    export default {
        name: "PublicClassDetail",
      data(){
        return{
          id: 0,
          share: false
        }
      },
      created() {
          var id = this.$route.params.id;
      },
      methods:{
        changeShare(msg){
          this.share = msg;
        },
        showShare(){
          this.share = true;
        }
      }
    }
</script>

<style scoped lang="less">
  .viedoCont{
    position: fixed;
    background: #000;
    height: calc(~"100%" - 0.88rem);
    width: 100%;
    .cont{
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  }
</style>
