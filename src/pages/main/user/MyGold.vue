<template>
  <div class="font-box">
    <TopBack>
      <span slot="headerTxt">我的金币</span>
    </TopBack>

    <div class="goldCoin">
      <div class="money">
        <strong>{{ goldList.gold_balance }}</strong>
      </div>
      <div class="detaillist">
        <h3>明细</h3>
        <ul>
          <li v-for="info in goldList.gold_info">
            <a href="#">
              <h5 class="source">{{ info.operation_detail }}</h5>
              <span class="time">{{format(info.operation_time)}}</span>
              <strong :class="info.operation_type == 1 ? 'num positive' : 'num negative'">
                {{ info.operation_type == 1 ? '+' : '-'}}{{info.point}}
              </strong>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import service from "@/http/services/personal";
  import {getDate} from "../../../assets/js/format";
  export default {
    name: "MyGold",
    data() {
      return {
        goldList: {
          gold_info: '',
          gold_balance: ''
        }
      }
    },
    methods: {
      getGoldInfo() {
        service.personalService.goldInfo({'access-token': this.$cookies.get('access_token')}).then(res => {
          if (res.status === 200) {
            this.goldList.gold_info = res.data.gold_info;
            this.goldList.gold_balance = res.data.gold_balance;
            console.log(this.goldList);
          }
        })
      },
      format: function (time) {
        return getDate(time*1000, 'yyyy-MM-dd hh:mm:ss');
      },
    },
    mounted: function () {
      this.getGoldInfo();
    }
  }
</script>
