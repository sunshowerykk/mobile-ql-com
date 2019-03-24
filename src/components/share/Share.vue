<template>
  <div>
    <!--弹出层 背景-->
    <div class="alert_bg" @click="hideModal"></div>
    <!--分享弹出层-->
    <div class="courseLst courseshare" v-if="share">
      <h3>分享至</h3>
      <ul class="clearfix">
        <li>
          
            <img src="../../assets/img/icon16.png" @click="onMenuShareAppMessage"/>
            <span>微信好友</span>
          
        </li>
        <li>
          
            <img src="../../assets/img/icon17.png" @click="onMenuShareTimeline"/>
            <span>朋友圈</span>
          
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
var wx = require("weixin-js-sdk");
import service from '@/http/services/user.js'
export default {
  name: "Share",
  props: ["share"],
  data () {
    return {
      shareInfo: {
        title: "分享有奖", // 分享标题
        desc: "分享成功后即可获得价值100元的金币", // 分享描述
        link: "https://mobile.kaoben.top/#/Register?invite=" + this.$cookies.get('userid'), // 分享链接，该链接域名必须与当前企业的可信域名一致
        imgUrl: "https://kaoben.top/images/logo.png", // 分享图标
        type: "", // 分享类型,music、video或link，不填默认为link
        dataUrl: "", // 如果type是music或video，则要提供数据链接，默认为空
      }
    }
  },
  mounted() {
    service.userService.getShareConfig().then(res => {
      if (res.status === 200 && res.data.status === 0) {
        wx.config({
          debug: true, //开启调试模式
          appId: res.data.config.appId, //公众号唯一标示
          timestamp: res.data.config.timestamp, //必填，生成签名时间戳
          nonceStr: res.data.config.nonceStr, //必填，生成签名的随即字符串
          signature: res.data.config.signature, //必填，签名
          jsApiList: ["onMenuShareAppMessage", "onMenuShareTimeline"] //必填，需要使用的js接口列表
        });
      }
    });
  },
  methods: {
    hideModal() {
      this.$emit("changeShare", 0);
    },
    //分享给朋友
    onMenuShareAppMessage() {
      wx.onMenuShareAppMessage({
        title: this.shareInfo.title,
        desc: this.shareInfo.desc,
        link: this.shareInfo.link,
        imgUrl: this.shareInfo.imgUrl,
        type: "",
        dataUrl: "",
        success: function() {
          // 用户确认分享后执行的回调函数
          alert("分享成功！");
        },
        cancel: function() {
          // 用户取消分享后执行的回调函数
          alert("分享失败！");
        }
      });
    },
    //分享到朋友圈
    onMenuShareTimeline() {
      wx.onMenuShareTimeline({
        title: this.shareInfo.title,
        desc: this.shareInfo.desc,
        link: this.shareInfo.link,
        imgUrl: this.shareInfo.imgUrl,
        success: function() {
          // 用户确认分享后执行的回调函数
        },
        cancel: function() {
          // 用户取消分享后执行的回调函数
        }
      });
    }
  }
};
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
  background: #db2c1b;
}

.courseshare {
  padding-top: 0;
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
  background: #fff;
  z-index: 100;
}

.courseshare h3 {
  border-bottom: 1px solid #ececec;
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
