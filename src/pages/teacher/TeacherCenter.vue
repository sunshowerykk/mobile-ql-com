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
            <li><router-link to="/Message" class="user-center-item">
              消息中心
              <Badge :count="message_num"></Badge>
            </router-link></li>
            <li><router-link to="/MyPublicity" class="user-center-item">我的宣传页</router-link></li>
            <li><router-link to="/TeacherClass" class="user-center-item">我的授课</router-link></li>
            <li><router-link to="/TeacherEarnings" class="user-center-item">我的收益</router-link></li>
            <li><router-link to="/MySet" class="user-center-item">设置</router-link></li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
    import service_user from '@/http/services/user'
    export default {
        name: "TeacherCenter",
        data() {
          //获取头像
          return {
            userinfo : {
              picture: '',
              username: ''
            },
            message_num: 0,
            token: ''
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
          }
        },
          mounted: function () {
            this.getCookie();
            this.getUserInfo();
        }
    }
</script>

