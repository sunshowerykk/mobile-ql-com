<template>
    <div class="font-box">
      <TopBack>
        <span slot="headerTxt">个人中心</span>
      </TopBack>

      <div class="pCenter">
        <div class="infoMod clearfix">
          <div class="pic">
            <img :src="userinfo.picture"  />
          </div>
          <div class="txt">
            <strong>{{ userinfo.username }}</strong>
            <span>已学习 {{ duration.hour }} 小时 {{ duration.minute }} 分钟</span>
          </div>
        </div>
        <div class="menuLst">
          <ul>
            <li><router-link to="/Message" class="user-center-item">
              消息中心
              <Badge :count="message_num"></Badge>
            </router-link></li>
            <li><router-link to="/MyClass" class="user-center-item">我的课程</router-link></li>
            <li><router-link to="/MyOrder" class="user-center-item">我的订单</router-link></li>
            <li><router-link to="/MyPublicity" class="user-center-item">我的宣传页</router-link></li>
            <li><router-link to="/MyEarnings" class="user-center-item">推广收益</router-link></li>
            <li><router-link to="/MyGold" class="user-center-item">我的金币</router-link></li>
            <li><router-link to="/MyCollect" class="user-center-item">我的收藏</router-link></li>
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
            duration: '',
            message_num: 0
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

