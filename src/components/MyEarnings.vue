<template>
  <div class="font-box">
    <TopBack>
      <span slot="headerTxt">我的收益</span>
    </TopBack>

    <ul class="clearfix IncomeDel">
      <li>
        <strong>总佣金({{this.income}})</strong>
        <span>{{this.income}}</span>
      </li>
      <li>
        <strong>已结算({{this.settlement}})</strong>
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

    <div class="incomeLst">
      <ul class="clearfix" >
        <li>
          <div class="item">
            <h5>时间</h5>
            <span v-for="incomMonth in monthincome">{{incomMonth.month}}</span>

          </div>
          <div class="item">
            <h5>业绩</h5>
            <span v-for="incomMonth in monthincome">{{incomMonth.income}}</span>
          </div>
        </li>
        <li>
          <div class="item" >
            <h5>佣金</h5>
            <span v-for="incomMonth in monthincome">{{incomMonth.myincome}}</span>
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
  import service from '@/http/services/user.js'
  import { Datetime, Group } from 'vux'
    export default {
        name: "MyEarnings",
      data(){
          return{
            value1: '2015-11-12',
            value2: '2015-11-12',
            access_token: '',
            income : '',
            settlement: '',
            monthincome:'',
          }
      },
      components: {
        Datetime,
        Group
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
          service.personalService.incomeMonthCheck({'access-token': this.access_token,'date' :this.value1,'date2' : this.value2}).then(res => {
            if (res.status === 200) {
              this.monthincome = res.data;
               console.log(this.monthincome)
            }
          })
        },
        init() {
          service.personalService.income({'access-token': this.access_token}).then(res => {
            if (res.status === 200) {
              this.income = res.data.income;
              this.settlement = res.data.settlement;
              console.log(this.income.income)
              // this.settlement = res.data.settlement;
            }
          })
        },
        initMonthCheck() {
          service.personalService.incomeMonth({'access-token': this.access_token}).then(res => {
            if (res.status === 200) {
              this.monthincome = res.data;
              console.log(this.monthincome)
            }
          })
        },
      },
      mounted() {
          this.access_token = this.$cookies.get("access_token");
          this.init();
          this.initMonthCheck();
      }
    }
</script>

<style>
  .ear_get-time-box{
    background-color: #DB2C1B;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 0;
  }

  .ear_time-group > .vux-no-group-title{
    height: 0.6rem;
    width: 2.1rem;
    margin-top: 0;
  }
  .ear_time-group > .weui-cells:before,.ear_time-group > .weui-cells:after{
    display: none;
  }
  .ear_time-group > .vux-no-group-title > .weui-cell{
    height: 0.6rem;
    padding: 0;
  }
  .ear_time-group > .vux-no-group-title > .weui-cell .weui-cell__ft{
    text-align: left;
    padding-left: 8px;
    background: url("../assets/img/icon24.png") no-repeat 92% center;
    background-size: 0.3rem 0.3rem;
    font-size: 0.22rem;
  }
  .ear_time-group > .vux-no-group-title > .weui-cell .weui-cell__ft:after{
    display: none;
  }
  .ear_get-time-box > span {
    width: 0.3rem;
    height: 1px;
    background: #fff;
    display: block;
    margin: 0 5px;
  }

  .IncomeDel{
    padding: 0.55rem 0;
    background-color: #DB2C1B;
  }

  .IncomeDel li {
    float: left;
    width: 50%;
    text-align: center;
    color: #fff;
    box-sizing: border-box;
  }

  .IncomeDel li:first-child {
    border-right: 1px solid #fff;
  }

  .IncomeDel li strong {
    display: block;
    font-size: 0.3rem;
  }

  .IncomeDel li span {
    display: block;
    font-size: 0.53rem;
  }

  .er-btn {
    height: 0.88rem;
    background: #fff;
    width: 100%;
    font-size: 0.3rem;
    color: #333;
    cursor: pointer;
    display: block;
    text-align: center;
    line-height: 0.88rem;
  }

  .incomeLst {
    padding: 1rem 0;
    border-bottom: 1px solid #ECECEC;
    line-height: 0.4rem;
  }

  .incomeLst ul li {
    float: left;
    width: 50%;
    text-align: center;
    overflow: hidden;
  }

  .incomeLst ul li .item {
    float: left;
    width: 50%;
  }

  .incomeLst ul li h5 {
    font-size: 0.3rem;
    color: #333;
    text-align: center;
  }

  .incomeLst ul li span {
    display: block;
    font-size: 0.23rem;
  }

  .incomeLst ul li strong {
    color: #DB2C1B;
    font-size: 0.18rem;
  }

  .seltAccount {
    padding: 0.2rem;
    position: relative;
  }

  .seltAccount .text {
    height: 0.88rem;
    width: 100%;
    border: none;
    background: none;
    font-size: 0.28rem;
    color: #999;
  }

  .seltAccount .text::-webkit-input-placeholder {
    color: #666;
  }

  .seltAccount .text:-moz-placeholder {
    color: #666;
  }

  .seltAccount .text::-moz-placeholder {
    color: #666;
  }

  .seltAccount .text::-ms-input-placeholder {
    color: #666;
  }
  .seltAccount .tip {
    position: absolute;
    top: 50%;
    display: inline-block;
    right: 0.3rem;
    font-size: 0.2rem;
    color: #999;
    transform: translateY(-50%);
  }

  .seltAccount .tip i {
    display: inline-block;
    width: 0.2rem;
    height: 0.2rem;
    vertical-align: top;
    margin-left: 0.05rem;
    margin-top: 1px;
    background: url(../assets/img/more.png) no-repeat center;
    background-size: 0.2rem 0.2rem;
  }
</style>
