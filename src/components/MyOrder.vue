<template>
  <div class="font-box">
    <TopBack>
      <span slot="headerTxt">我的订单</span>
    </TopBack>

    <tab active-color="#DB2C1B" default-color="#333333" :line-width="2" class="class-detail-tab-box">
      <tab-item selected @on-item-click="onItemClick">已完成</tab-item>
      <tab-item @on-item-click="onItemClick">待付款</tab-item>
    </tab>

    <transition name="fade" mode="out-in">

      <div v-if="indexActive == 0" key="0">
        <div class="orderList">
          <ul>
            <li>
              <a href="#">
                <div class="item clearfix">
                  <div class="pic">
                    <img src="../assets/img/img22.png"  />
                  </div>
                  <div class="txt">
                    <h5>VIp套餐班VIp套餐班VIp套餐班VIp套餐班</h5>
                    <span><b>￥118.00</b></span>
                    <strike>￥198.0</strike>
                    <span class="time">2019-01-16 12:00:00</span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div class="item clearfix">
                  <div class="pic">
                    <img src="../assets/img/img22.png"  />
                  </div>
                  <div class="txt">
                    <h5>VIp套餐班VIp套餐班VIp套餐班VIp套餐班</h5>
                    <span><b>￥118.00</b></span>
                    <strike>￥198.0</strike>
                    <span class="time">2019-01-16 12:00:00</span>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div v-if="indexActive == 1" key="1">
        <div class="orderList">
          <ul>
            <li>
              <a href="#">
                <div class="item clearfix">
                  <div class="pic">
                    <img src="../assets/img/img22.png"  />
                  </div>
                  <div class="txt">
                    <h5>VIp套餐班VIp套餐班VIp套餐班VIp套餐班</h5>
                    <span><b>￥118.00</b></span>
                    <strike>￥198.0</strike>
                    <span class="time">2019-01-16 12:00:00</span>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import { Tab, TabItem} from 'vux'
  import service from "../http/services/personal";
    export default {
        name: "MyOrder",
      data(){
          return{
            indexActive: 0,
            orderList: {
              order_info: ''
            }
          }
      },
      components: {
        Tab,
        TabItem
      },
      methods:{
        onItemClick(index){
          this.indexActive = index;
        },

        getOrderInfo() {
          service.personalService.orderList({'access-token': this.$cookies.get('access_token')}).then(res => {
            if (res.status === 200) {
              this.orderList.order_info = res.data.order_info;
              console.log(this.orderList);
            }
          })
        }
      },

      mounted: function () {
        this.getOrderInfo();
      }
    }
</script>

<style scoped>


</style>
