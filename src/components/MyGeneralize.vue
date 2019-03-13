<template>
  <div class="font-box">
    <TopBack>
      <span slot="headerTxt">推广收益明细</span>
    </TopBack>

    <div class="seltTime">
      <group title="" class="generalize-title">
        <datetime
          class="generalize-sel-date"
          v-model="value1"
          @on-change="change"
          title=""
          @on-cancel="log('cancel')"
          @on-confirm="onConfirm"
          @on-hide="log('hide', $event)"></datetime>
      </group>
    </div>
    <div class="incomeDetail">
      <div class="incomeList">
        <ul v-if="show">
          <li v-for="income in incomes" >
            <img :src="income.pic"  />
            <strong class="name"> {{income.consignee}}</strong>
            <span class="source">{{income.status}}</span>
            <span class="money">{{income.income}}元</span>
            <span class="time">{{income.pay_time}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import service from '@/http/services/user.js'
  import { Datetime, Group } from 'vux'
    export default {
        name: "MyGeneralize",
      data(){
          return{
            value1: '请选择时间',
            incomes : '',
            show : true,
            access_token :'',
          }
      },
      components: {
        Datetime,
        Group
      },
      methods:{

        change (value) {
          this.show=false,
          console.log('change', value)
          console.log("change!!")
          service.personalService.incomeCheck({'date': this.value1, 'access-token': this.access_token}).then(res => {
            if (res.status === 200) {
              console.log(res.data);
              this.incomes = res.data;
              if(!(JSON.stringify(res.data)==0)) {
                this.show = true;
              }
            }
          })
        },

        onConfirm (val) {
          console.log('on-confirm arg', val)
          console.log('current value', this.value1)
        },

        //
        log (str1, str2 = '') {
          console.log(str1, str2)
        },
        init() {
          service.personalService.incomeStatistics({'date': '2015-03-11', 'access-token': this.access_token}).then(res => {
            if (res.status === 200) {
             console.log(res.data);
             this.incomes = res.data;
            }
          })
        }
      },
      mounted() {
          this.access_token = this.$cookies.get('access_token');
          this.init();
      }
    }
</script>

<style scoped>
  .incomeDetail .incomeList ul li {
    padding: 0.2rem;
    position: relative;
    border-bottom: 1px solid #ECECEC;
  }

  .incomeDetail .incomeList ul li img {
    vertical-align: top;
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 1rem;
    margin-right: 0.2rem;
  }

  .incomeDetail .incomeList ul li strong {
    font-size: 0.28rem;
    color: #333;
    display: inline-block;
    line-height: 0.8rem;
  }

  .incomeDetail .incomeList ul li span {
    font-size: 0.24rem;
    color: #666;
    margin: 0 0.2rem;
    display: inline-block;
    line-height: 0.8rem;
  }

  .incomeDetail .incomeList ul li span.time {
    position: absolute;
    margin: 0;
    top: 0.25rem;
    right: 0.2rem;
  }

  .seltTime {
    padding: 0.2rem;
    background: #DB2C1B;
  }
</style>
