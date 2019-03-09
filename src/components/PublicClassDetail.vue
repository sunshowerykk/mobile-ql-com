<!--公开课视频详情-->
<template>
    <div class="font-box">
      <TopBack>
        <span slot="headerTxt">本章导学</span>
        <span slot="share" class="share" @click="showShare"></span>
      </TopBack>

      <div class="viedoCont" v-if="showVideo">
        <div class="cont">
          <video class="video" id="video" :src="course_url" :poster="list_pic" controls="controls" autoplay>
          </video>
        </div>
      </div>

      <Share v-if="share" :share="share" @changeShare="changeShare($event)"></Share>
    </div>
</template>

<script>
  import service from '@/http/services/publicClass.js'
    export default {
        name: "PublicClassDetail",
      data(){
        return{
          id: 0,
          share: false,
          course_id: '',
          list_pic: '',
          course_url: '',
          access_token:'',
        }
      },
      created() {
          this.courseid = this.$route.params.id;
          this.list_pic = this.$route.params.pic;
      },
      methods:{

        changeShare (msg){
          this.share = msg;
        },
        showShare (){
          this.share = true;
        },
        check () {
          service.publicClassService.check({'course_id': this.courseid, 'access-token': '6WSLp2YK-uXTeEXQitREj5S0xFRXnVnZ'}).then(res => {
            if (res.status === 200) {
              this.course_url=res.data.url;
            }
          })
        }
      },
      mounted: function(){
        this.check();
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
      width: 100%;
      height: 100%;
      .video {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
