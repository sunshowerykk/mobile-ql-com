<!--精品课视频-->
<template>
  <div class="font-box">
    <TopBack>
      <span slot="headerTxt">{{ title }}</span>
      <span slot="share" class="share" @click="showShare"></span>
    </TopBack>

    <div class="viedoCont">
      <div class="cont">
        <video class="video" :poster="pic" id="video" controls>
          <source :src="video_url" type="video/mp4">抱歉，你的浏览器不能查看该视频
        </video>
      </div>
    </div>

    <Share v-if="share" :share="share" @changeShare="changeShare($event)"></Share>
  </div>
</template>

<script>
  export default {
    name: "QualityCourseVideo",
    data(){
      return{
        id: 0,
        share: false,
        video_url:'',
        title: '',
        pic: ''
      }
    },
    created() {
      this.video_url = this.$route.params.video_url;
      this.title = this.$route.params.title;
      this.pic = this.$route.params.pic;
      console.log(this.pic);
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
