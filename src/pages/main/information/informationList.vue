<template>
  <div class="index-content information"  v-loading="loading">
    <TopBack>
      <span slot="headerTxt">资讯列表</span>
    </TopBack>
    <div class="item" v-for = "info in information" :key="info.id">
      <router-link :to="{ name: 'InformationDetail',params: { id: info.id }}">
        <div class="left">
          <h5>{{ info.title }}</h5>
          <small>
            <span>{{ info.author }}</span>
          </small>
        </div>
        <div class="right">
          <img :src="info.pic" alt=""/>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
  import service from '@/http/services/information.js';
  export default {
    name: "InformationList",
    data () {
      return {
        information: [],
        loading: true
      }
    },
    methods:{
      initinformation: function () {
        service.informationService.list().then(res => {
          if (res.status === 200) {
            this.information = res.data;
            this.loading = false;
          }
        })
      },
    },
    mounted() {
      this.initinformation();
    }
  }
</script>
