<template>
    <div class="font-box">
      <TopBack>
        <span slot="headerTxt">消息中心</span>
      </TopBack>

      <div v-if="messages.length === 0" v-loading="loading">
        您暂时没有消息~
      </div>

      <div class="newsList" v-loading="loading" v-if="messages.length != 0">
        <ul>
          <li  v-for = "msg in messages" :key="msg.id">
            <router-link :to="{ name: 'MessageDetail',params: { read_id: msg.id }}">
              <Tag color="error" v-if="msg.status === 0">new</Tag>
              <h5 v-html="msg.title">{{ msg.title }}</h5>
              <span class="time">{{ msg.get_time }}</span>
            </router-link>
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
            token : '',
            loading: true
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
              this.loading = false;
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
