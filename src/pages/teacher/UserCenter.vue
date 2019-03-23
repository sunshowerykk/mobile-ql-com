<template>
    <div class="font-box teacher-center">
      <div class="banner"></div>
      <div class="pCenter">
        <div class="infoMod clearfix">
          <div class="pic">
            <img :src="userinfo.picture"  />
          </div>
          <div class="txt">
            <strong>{{ userinfo.username }}</strong>
          </div>
        </div>
        <div class="menuLst">
          <ul>
            <li><router-link to="/Message" class="user-center-item">消息中心<i class="num"></i></router-link></li>
            <li><router-link to="/MyGold" class="user-center-item">课程收益</router-link></li>
            <li><router-link to="/MyPublicity" class="user-center-item">我的宣传页</router-link></li>
            <li><router-link to="/MyEarnings" class="user-center-item">推广收益</router-link></li>
            <li><router-link to="/MySet" class="user-center-item">设置</router-link></li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
    import service_user from '@/http/services/user'
    export default {
        name: "UserCenter",
        data() {
          //获取头像
          return {
            userinfo : {
              picture: '',
              username: ''
            },
            token: '',
            duration: ''
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
              console.log(this.userinfo);
            }
          })
          },
          getDuration: function () {
            service_user.userService.getDuration({'access-token': this.token}).then(res => {
            if (res.status === 200) {
              this.duration = res.data;
              console.log(this.duration);
            }
          })
          }
        },
          mounted: function () {
            this.getCookie();
            this.getUserInfo();
            this.getDuration();
        }
    }
</script>

