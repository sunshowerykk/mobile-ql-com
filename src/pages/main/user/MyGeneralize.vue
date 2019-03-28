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
  import service_user from '@/http/services/user.js'
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
          service_user.userService.incomeCheck({'date': this.value1, 'access-token': this.access_token}).then(res => {
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
          service_user.userService.incomeStatistics({'date': '2015-03-11', 'access-token': this.access_token}).then(res => {
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

