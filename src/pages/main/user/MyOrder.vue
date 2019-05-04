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
            <li v-for="(order, index) in finishedOrders" :key="index">
              <div class="item clearfix" @click="gotoCourse(order)">
                <div class="pic">
                  <img :src="order.goods_pic.list_pic" />
                </div>
                <div class="txt">
                  <h5>{{ order.goods_name }}</h5>
                  <span><b>￥{{ order.goods_amount }}</b></span>
                  <strike>￥{{ order.market_price }}</strike>
                  <span class="time">{{order.add_time}}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div v-if="indexActive === 1" key="1">
        <div class="orderList">
          <ul>
            <li v-for="(order, index) in unfinishedOrders" :key="index">
                <div class="item clearfix" @click="gotoPay(order)">
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
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import { Tab, TabItem} from 'vux'
  import service from "@/http/services/personal";
  export default {
    name: "MyOrder",
    data () {
      return {
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
      gotoCourse(order) {
        if (order.type === 'course') {
          this.$router.push({name: 'ClassShare', params: {id: order.id}});
        } else if(order.type === 'course_package') {
          this.$router.push({name: 'SetMealDetail', params: {pid: order.id}});
        }
      },
      gotoPay(order) {
        this.$router.push({name: 'PayCenter', params:{type: order.type, id: order.id}});
      },
      getOrderInfo() {
        service.personalService.orderList({'access-token': this.$cookies.get('access_token')}).then(res => {
          if (res.status === 200) {
            this.finishedOrders = res.data.order_info.filter((item) => {
              return item.pay_status === 2;
            });
            this.unfinishedOrders = res.data.order_info.filter((item) => {
              return item.pay_status === 0;
            });
          }
        })
      }
    },
    mounted: function () {
      this.getOrderInfo();
    }
  }
</script>
