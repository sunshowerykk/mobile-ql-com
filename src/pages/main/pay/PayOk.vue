<template>
  <div class="payok">
    <TopBack>
      <span slot="headerTxt">支付结果</span>
    </TopBack>
    <div class="count-down" v-if="payok === 1">
      订单支付成功，<span v-html="seconds"></span>s后跳转
    </div>
    <div class="count-down" v-if="payok === 2">
      订单支付失败，<span v-html="seconds"></span>s后跳转
    </div>
  </div>
</template>

<script>
import service_course from "@/http/services/course.js";
export default {
  data () {
    return {
      seconds: 3,
      payok: -1
    }
  },
  mounted () {
    let timeid = setInterval(() => {
      if (this.seconds > 0) {
        this.seconds--;
      } else {
        clearInterval(timeid);
      }
    }, 1000);
    this.order_sn = this.$route.params.id;
    this.wxcheckorder();
  },
  methods: {
    // 更改订单状态
    wxcheckorder () {
      service_course.courseService.wxcheckorder({
        "access-token": this.$cookies.get("access_token"),
        'out_trade_no': this.order_sn
      })
      .then(res => {
        res.data = JSON.parse(res.data);
        if (res.status === 200 && res.data.trade_state === "SUCCESS") {
          this.payok = 1;
          this.$Notice.success({
              title: '支付成功提醒',
              desc: '支付成功，3s后跳转到订单列表页...'
          });
          setTimeout(() => {
            this.$router.push('/MyOrder');
          }, 3000);
        } else {
          this.payok = 2;
          this.$Message.error("支付失败，请稍后再试");
          setTimeout(() => {
            this.$router.push('/MyOrder');
          }, 3000);
        }
      });
    }
  }
}

</script>
<style lang='scss'>
  .payok {
    .count-down {
      margin-top: 16px;
      margin-left: 16px;
    }
  }
</style>