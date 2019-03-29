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
    <router-link to="/MyGeneralize" class="er-btn">明细查询</router-link>

    <div class="ear_get-time-box">
      <group title="" class="ear_time-group">
        <datetime
          v-model="value1"
          @on-change="change"
          title=""
          @on-cancel="log('cancel')"
          @on-confirm="onConfirm"
          @on-hide="log('hide', $event)"></datetime>
      </group>

      <span></span>

      <group title="" class="ear_time-group">
        <datetime
          v-model="value2"
          @on-change="change2"
          title=""
          @on-cancel="log2('cancel')"
          @on-confirm="onConfirm2"
          @on-hide="log2('hide', $event)"></datetime>
      </group>
    </div>

    <div class="incomeLst" v-show="income === 0">
      <span style="margin-left: 140px">您暂时还没有收益哦~加油吧！</span>
    </div>

    <div class="incomeLst" v-show="income != 0">
      <ul class="clearfix" >
        <li>
          <div class="item">
            <h5>时间</h5>
            <span v-for="incomMonth in monthIncome">{{incomMonth.month}}</span>

          </div>
          <div class="item">
            <h5>业绩</h5>
            <span v-for="incomMonth in monthIncome">{{incomMonth.income}}</span>
          </div>
        </li>
        <li>
          <div class="item" >
            <h5>佣金</h5>
            <span v-for="incomMonth in monthIncome">{{incomMonth.salary}}</span>
          </div>
          <!--<div class="item" >-->
            <!--<h5>状态</h5>-->
            <!--<span>已结算</span>-->
            <!--<span>未结算</span>-->
          <!--</div>-->
        </li>
      </ul>
    </div>

    <div class="seltAccount">
      <input placeholder="结算账号" class="text"  />
      <router-link to="/EditInfo" class="tip">绑定结算账号才可提现<i></i></router-link>
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
            value1: '2018-11-12',
            value2: '2019-11-12',
            access_token: '',
            income : '',
            settlement: '',
            monthIncome:'',
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
        log (str1, str2 = '') {
          console.log(str1, str2)
        },
        onConfirm (val) {
          console.log('on-confirm arg', val)
          console.log('current value', this.value1)
        },
        change (value) {
          console.log('change', value)
        },
        log2 (str1, str2 = '') {
          console.log(str1, str2)
        },
        onConfirm2 (val) {
          console.log('on-confirm arg', val)
          console.log('current value', this.value2)
        },
        change2 (value) {
          console.log('伍浩伟 ', value)
          service_user.userService.incomeMonthCheck({'access-token': this.access_token,'date' :this.value1,'date2' : this.value2}).then(res => {
            if (res.status === 200) {
              this.monthincome = res.data;
               console.log(this.monthincome)
            }
          })
        },
        init() {
          service_marketer.marketerService.income({'access-token': this.access_token}).then(res => {
            if (res.status === 200 && res.data.status == 0) {
              this.income = res.data.income;
              this.settlement = res.data.settlement;
              console.log(res.data);
            } else {
              this.$Message.warning(res.data.message);
            }
          })
        },
        initMonthCheck() {
          service_marketer.marketerService.monthIncome({'access-token': this.access_token}).then(res => {
            if (res.status === 200 && res.data.status == 0) {
              this.monthIncome = res.data.my_income;
              console.log(this.monthIncome)
            } else {
              this.$Message.warning(res.data.message);
            }
          })
        },
      },
      mounted() {
          this.init();
          this.initMonthCheck();
      }
    }
</script>

