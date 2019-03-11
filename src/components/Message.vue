<template>
    <div class="font-box">
      <TopBack>
        <span slot="headerTxt">消息中心</span>
      </TopBack>

      <div class="newsList" v-for = "msg in messages">
        <ul>
          <li>
            <a href="#">
              <h5 v-html="msg.content">{{ msg.content }}</h5>
              <span class="time">{{ msg.get_time }}</span>
            </a>
          </li>
            </a>
          </li>
        </ul>

      </div>
    </div>
</template>

<script>
    import service from '@/http/services/user.js'
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
            service.userService.getMessage(this.token).then(res => {
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

<style scoped>
  .newsList {
    padding: 0.2rem;
  }

  .newsList li {
    padding: 0.2rem;
    border-bottom: 1px solid #ececec;
  }

  .newsList li:last-child {
    border-bottom: none;
  }

  .newsList li h5 {
    font-size: 0.28rem;
    color: #333;
    margin-bottom: 0.2rem;
  }

  .newsList li .time {
    display: block;
    text-align: right;
    font-size: 0.24rem;
    color: #999;
  }

</style>
