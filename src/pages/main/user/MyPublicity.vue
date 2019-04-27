<template>
  <div class="font-box">
    <TopBack>
      <span slot="headerTxt">都想学</span>
      <!-- <span slot="share" class="share" @click="showShare"></span> -->
    </TopBack>
    <div class="preach" ref="downloadContent">
      <div class="pic">
        <a href="#"><img src="../../../assets/img/img27.png"  /></a>
      </div>
      <div class="bg">
        <img src="../../../assets/img/img28.png" class="posi" />
        <div class="cont">
          <div class="list">
            <ul class="clearfix">
              <li><img src="../../../assets/img/font1.png" /></li>
              <li><img src="../../../assets/img/font2.png" /></li>
              <li><img src="../../../assets/img/font3.png" /></li>
              <li><img src="../../../assets/img/font4.png" /></li>
            </ul>
          </div>
          <div class="wema">
            <img :src="this.qrcode"/>
          </div>
        </div>
      </div>
      <!--<div class="tips">
                  <p><b>奖励规则</b>当您的好友扫您的二维码成功注册后金币,您和好友分别或得</p>
                  <p>奖励规则当您的好友扫您的二维码成功注册后金币,您和好友分别或得</p>
              </div>-->
    </div>

    <share v-if="share" :share="share" @changeShare="changeShare($event)" ></share>

    <Button type="primary" class="download" @click="toImage()">下载宣传页</Button>
    <a ref="downloadTrigger" v-show="false" :href= "downImg" download="宣传页" class="download download-a" id="download-a">下载宣传页</a>

  </div>
</template>

<script>
    import service_user from '@/http/services/user.js';
    import html2canvas from 'html2canvas';
    export default {
      name: "Publicity",
      data(){
          return{
            share: false,
            qrcode: '',
            token: '',
            downImg: 'javascript:void(0)'
          }
      },
      methods:{
        showShare() {
          this.share = true;
        },
        changeShare(msg) {
          this.share = msg;
        },
        getCookie: function () {
            this.token = this.$cookies.get('access_token');
        },
        getQrcode: function () {
          service_user.userService.getQrcode(this.token).then(res => {
            if (res.status === 200) {
              this.qrcode = res.data;
            }
          })
        },
        toImage: function () {
          html2canvas(this.$refs.downloadContent,{
            backgroundColor: null
          }).then((canvas) => {
            let dataURL = canvas.toDataURL("image/png");
            if (dataURL) {
              this.downImg = dataURL;
              setTimeout(() => {
                this.$refs.downloadTrigger.click();
                this.$Message.success('下载成功');
              }, 100)
            }
          });
        }
      },
     mounted() {
       this.getCookie();
       this.getQrcode();
     },
    }
</script>
