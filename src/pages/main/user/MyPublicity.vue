<template>
  <div class="font-box my-publicity">
    <TopBack>
      <span slot="headerTxt">都想学</span>
      <!-- <span slot="share" class="share" @click="showShare"></span> -->
    </TopBack>
    <div class="preach" ref="downloadContent" v-show="!hasImg">
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

    <div class="save-img" v-show="hasImg">
      <img :src="downImg" />
    </div>

    <share v-if="share" :share="share" @changeShare="changeShare($event)" ></share>

    <Button type="primary" class="download" @click="toImage()">{{downloadText}}</Button>

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
            downImg: '',
            downloadText: '生成宣传页',
            hasImg: false
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
          if (this.hasImg) {
            return false;
          }
          html2canvas(this.$refs.downloadContent,{
            backgroundColor: null
          }).then((canvas) => {
            let dataURL = canvas.toDataURL("image/png");
            if (dataURL) {
              this.$Message.success('成功生成宣传页');
              this.downImg = dataURL;
              this.downloadText = '长按保存宣传页';
              this.hasImg = true;
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
