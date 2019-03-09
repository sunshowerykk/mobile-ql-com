<template>
    <div class="font-box">
      <TopBack>
        <span slot="headerTxt">资讯详情</span>
      </TopBack>

      <div class="newsDetail" v-model="information">
        <div class="tit">
          <h3>{{ information.title }}</h3>
          <span class="time">{{ information.release_time }}</span>
          <span>{{ information.author }}</span>
        </div>
        <div class="main" v-html="information.content">
          {{ information.content }}
        </div>
      </div>
    </div>
</template>

<script>
    import service from '@/http/services/information.js'
    export default {
        name: "InformationDetail",
      data(){
          return{
            information:'',
            info: {
              id: ''
            }
          }
      },
      methods:{
        initinformation: function () {
          service.informationService.detail(this.info).then(res => {
            if (res.status === 200) {
              
              this.information = res.data;
              console.log(this.information);
            }
          })
        },
      },
      created() {
          this.info.id = this.$route.params.id;
          console.log("id",this.id);
          this.initinformation();
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
