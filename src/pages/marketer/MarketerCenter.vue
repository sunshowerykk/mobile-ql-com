<template>
    <div class="font-box marketer-center">
      <div class="banner"></div>
      <div class="pCenter">
        <div class="infoMod clearfix">
          <div class="pic">
            <img :src="userinfo.picture"  />
          </div>
          <div class="txt">
            <strong>{{ userinfo.username }}</strong>
            <span>市场专员总代理</span>
          </div>
        </div>
        <div class="menuLst">
          <ul>
            <li><router-link to="/Message" class="user-center-item">
              消息中心
              <Badge :count="message_num"></Badge>
            </router-link></li>
            <li><router-link to="/MyPublicity" class="user-center-item">我的宣传页</router-link></li>
            <li><router-link to="/SubordinateList" class="user-center-item">下级管理</router-link></li>
            <li><router-link to="/MarketEarnings" class="user-center-item">推广收益</router-link></li>
            <li><span class="user-center-item" @click="showVideoFunc()">项目介绍</span></li>
            <li><router-link to="/MyFile" class="user-center-item">我的协议</router-link></li>
            <li><router-link to="/MySet" class="user-center-item">设置</router-link></li>
          </ul>
        </div>
      </div>
      <div class="viedoCont" v-if="showVideo">
        <div class="cont">
          <div class="close-video-btn">
            <img src="../../assets/img/close-video-btn.png"  @click="hideModal" >
          </div>
          <video class="video" id="video" :src="project_url" controls="controls" autoplay>
          </video>
        </div>
      </div>
    </div>
</template>

<script>
    import service_user from '@/http/services/user'
    export default {
        name: "MarketerCenter",
        data() {
          //获取头像
          return {
            userinfo : {
              picture: '',
              username: ''
            },
            message_num: 0,
            token: '',
            showVideo: false,
            project_url: 'http://cdn.kaoben.top/video/propaganda.mp4'
          }
        },
        methods: {
          getCookie: function () {
            this.token = this.$cookies.get('access_token');
          },
          getUserInfo: function () {
            service_user.userService.getSet({'access-token': this.token}).then(res => {
              if (res.status === 200) {
                this.userinfo = res.data;
                this.message_num = parseInt(res.data.message_num);
              }
            })
          },
          showVideoFunc() {
            this.showVideo = true;
          },
          hideModal() {
            this.showVideo = false;
          },
        },
        mounted: function () {
          this.getCookie();
          this.getUserInfo();
        }
    }
</script>

