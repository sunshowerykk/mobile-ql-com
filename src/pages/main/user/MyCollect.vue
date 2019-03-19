<template>
  <div class="font-box">
    <TopBack>
      <span slot="headerTxt">我的收藏</span>
    </TopBack>

    <div class="course myorder xollection">
      <div class="orderList" v-for = "collection in collections">
        <ul>
          <li>
            <a href="#">
              <div class="item clearfix">
                <div class="pic">
                  <img :src="collection.home_pic" />
                </div>
                <div class="txt">
                  <h5>{{ collection.course_name }}</h5>
                  <span class="red"><b>{{ collection.price - collection.discount }}</b></span>
                  <strike>{{ collection.price }}</strike>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div class="tip">
        <span>已经到底了</span>
      </div>
    </div>
  </div>
</template>

<script>
    import service_user from '@/http/services/user.js'
    export default {
        name: "MyCollect",
        data() {
          return {
            collections: '',
            token : ''
          }
        },
        methods: {
          getCookie :function () {
            this.token = this.$cookies.get('access_token');
          },
          getCollections :function () {
            service_user.userService.getCollections(this.token).then(res => {
            if (res.status === 200) {
              this.collections = res.data;
              console.log(this.collections);
            }
          })
          }
        },
        mounted:function () {
          this.getCookie();
          this.getCollections();
      }
    }
</script>
