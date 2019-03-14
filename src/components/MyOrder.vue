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

      <div v-if="indexActive === 0" key="0">
        <div class="orderList">
          <ul>

            <li v-for="order in finishedOrders">
              <a href="#">
                <div class="item clearfix">
                  <div class="pic">
                    <img :src="order.goods_pic.list_pic"  />
                  </div>
                  <div class="txt">
                    <h5>{{ order.goods_name }}</h5>
                    <span><b>￥{{ order.goods_amount }}</b></span>
                    <strike>￥{{ order.market_price }}</strike>
                    <span class="time">{{order.add_time}}</span>
                  </div>
                </div>
              </a>
            </li>

          </ul>
        </div>
      </div>

      <div v-if="indexActive === 1" key="1">
        <div class="orderList">
          <ul>
            <li v-for="order in unfinishedOrders">
              <a href="#">
                <div class="item clearfix">
                  <div class="pic">
                    <img :src="order.goods_pic.list_pic"  />
                  </div>
                  <div class="txt">
                    <h5>{{ order.goods_name }}</h5>
                    <span><b>￥{{ order.goods_amount }}</b></span>
                    <strike>￥{{ order.market_price }}</strike>
                    <span class="time">{{ order.add_time }}</span>
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
            finishedOrders: [],
            unfinishedOrders: []
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
              let index1 = 0;
              let index2 = 0
              for (let i = 0; i < res.data.order_info.length; i++) {
                if (res.data.order_info[i].pay_status === 2) {
                  this.finishedOrders[index1] = res.data.order_info[i];
                  index1++;
                } else if (res.data.order_info[i].pay_status === 0) {
                  this.unfinishedOrders[index2] = res.data.order_info[i];
                  index2++;
                }
              }
              console.log(this.finishedOrders);
              console.log(this.unfinishedOrders);
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
