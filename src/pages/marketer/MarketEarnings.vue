<template>
  <div class="font-box">
    <TopBack>
      <span slot="headerTxt">我的收益</span>
    </TopBack>

    <ul class="clearfix IncomeDel">
      <li>
        <strong>总佣金(元)</strong>
        <span>{{this.income}}</span>
      </li>
      <li>
        <strong>已结算(元)</strong>
        <span>{{this.settlement}}</span>
      </li>
    </ul>
    <router-link :to="{'name': 'MarketGeneralize', params:{month: 'all'}}" class="er-btn">明细查询</router-link>

    <div class="ear_get-time-box" v-loading="loading">
      <group title="" class="ear_time-group">
        <datetime
          placeholder="起始月份"
          v-model="value1"
          format="YYYY-MM"
          title=""
          @on-confirm="onConfirm2">
        </datetime>
      </group>

      <span></span>

      <group title="" class="ear_time-group">
        <datetime
          placeholder="结束月份"
          v-model="value2"
          format="YYYY-MM"
          title=""
          @on-confirm="onConfirm2">
        </datetime>
      </group>
    </div>

    <div class="incomeLst" v-show="income === 0 || monthIncomeSelect.length === 0">
      <span>您在当前所选时间区间暂时还没有收益哦~加油吧！</span>
    </div>

    <Table border :columns="title" :data="monthIncomeSelect" v-if="monthIncomeSelect.length > 0" size="small">
      <template slot-scope="{ row, index }" slot="action">
        <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">明细</Button>
      </template>
    </Table>


    <div class="seltAccount">
      <router-link to="/EditInfo" class="tip">绑定支付宝账号才可提现<i></i></router-link>
    </div>
  </div>
</template>

<script>
  import service_user from '@/http/services/user'
  import service_marketer from '@/http/services/marketer'
  import { Datetime, Group } from 'vux'
    export default {
        name: "MarketEarnings",
      data(){
          return{
            value1: '',
            value2: '',
            access_token: '',
            income : '',
            settlement: '',
            monthIncome:'',
            monthIncomeSelect: '',
            loading: true,
            title: [
              {
                title: '月份',
                key: 'month',
                sortable: true
              },
              {
                title: '提成',
                key: 'income',
                sortable: true
              },
              {
                title: '状态',
                key: 'status',
                width: '75px'
              },
              {
                title: '操作',
                slot: 'action',
                width: '75px',
                align: 'center'
              }
            ],
          }
      },
      components: {
        Datetime,
        Group
      },
      created() {
        this.access_token = this.$cookies.get("access_token");
      },

      methods:{
        onConfirm2 () {
          let startTime = new Date(this.value1).getTime();
          let endTime = new Date(this.value2).getTime();
          this.monthIncomeSelect = this.monthIncome.filter((item) => {
            let itemTime = new Date(item.month).getTime();
            if (startTime && !endTime) {
              if (itemTime >= startTime) {
                return item;
              }
            } else if (!startTime && endTime) {
              if (itemTime <= endTime) {
                return item;
              }
            } else {
              if (itemTime >= startTime && itemTime <= endTime) {
                return item;
              }
            }
          });
        },
        init() {
          service_marketer.marketerService.income({'access-token': this.access_token}).then(res => {
            if (res.status === 200 && res.data.status == 0) {
              this.income = res.data.income;
              this.settlement = res.data.settlement;
            } else {
              this.$Message.warning(res.data.message);
            }
          })
        },
        initMonthCheck() {
          service_marketer.marketerService.monthIncome({'access-token': this.access_token}).then(res => {
            if (res.status === 200 && res.data.status == 0) {
              this.monthIncome = res.data.my_income;
              this.monthIncomeSelect = this.monthIncome;
              this.loading = false;
            } else {
              this.$Message.warning(res.data.message);
            }
          })
        },
        show(index) {
          this.$router.push({
            name: 'MarketGeneralize',
            params: {
              month: this.monthIncome[index].month,
              status: this.monthIncome[index].status,
              salary: this.monthIncome[index].salary
            }
          });
        }

      },
      mounted() {
          this.init();
          this.initMonthCheck();
      }
    }
</script>

