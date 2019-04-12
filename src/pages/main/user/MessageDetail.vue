<template>
    <div class="font-box">
      <TopBack>
        <span slot="headerTxt">消息详情</span>
      </TopBack>

      <div class="newsDetail" v-model="message" v-loading="loading">
        <div class="tit">
          <h3>{{ message.title }}</h3>
          <span class="time">{{ message.get_time }}</span>
          <span>{{ message.publisher }}</span>
        </div>
        <div class="main" v-html="message.content">
          {{ message.content }}
        </div>
      </div>
    </div>
</template>

<script>
    import service_message from '@/http/services/message.js'
    export default {
        name: "MessageDetail",
      data(){
          return{
            message:'',
            read_id: '',
            access_token: '',
            loading: true
          }
      },
      methods:{
        initMessage() {
          service_message.messageService.messageDetail({'access-token': this.access_token, 'read_id': this.read_id}).then(res => {
            if (res.status === 200) {
              if (res.data.status === 0) {
                this.message = res.data.message_info;
                this.loading = false;
                console.log(this.message);
              } else {
                this.$Message.warning(res.data.message);
              }
            } else {
              this.$Message('发生了错误，请重新登录后尝试！');
            }
          })
        }
      },
      created() {
          this.read_id = this.$route.params.read_id;
          this.access_token = this.$cookies.get('access_token');
      },
      mounted() {
          this.initMessage();
      }
    }
</script>

<style scoped>
  .newsDetail {
    padding: 0.2rem;
  }
  .newsDetail .tit{
    line-height: 0.5rem;
  }
  .newsDetail .tit h3 {
    font-size: 0.34rem;
    color: #333;
    font-weight: bold;
  }

  .newsDetail .tit span {
    font-size: 0.24rem;
    color: #999;
    margin-right: 0.3rem;
  }

  .newsDetail .main {
    padding: 0.2rem 0;
    line-height: 0.5rem;
  }

  .newsDetail .main p {
    font-size: 0.28rem;
    color: #666;
    text-indent: 0.3rem;
    padding-bottom: 0.2rem;
  }

  .newsDetail .main img {
    display: block;
    width: 100%;
    margin-bottom: 0.2rem;
  }
</style>
