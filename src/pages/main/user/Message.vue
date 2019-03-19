<template>
    <div class="font-box">
      <TopBack>
        <span slot="headerTxt">消息中心</span>
      </TopBack>

      <div class="newsList" v-for = "msg in messages" :key="msg.id">
        <ul>
          <li>
            <a href="#">
              <h5 v-html="msg.content">{{ msg.content }}</h5>
              <span class="time">{{ msg.get_time }}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    import service_user from '@/http/services/user.js'
    export default {
        name: "Message",
        data() {
          return {
            messages: '',
            token : ''
          }
        },
        methods: {
          getCookie :function () {
            this.token = this.$cookies.get('access_token');
          },
          getMessage :function () {
            service_user.userService.getMessage(this.token).then(res => {
            if (res.status === 200) {
              this.messages = res.data;
              console.log(this.messages);
            }
          })
          }
        },
        mounted:function () {
          this.getCookie();
          this.getMessage();
      }
    }
</script>
