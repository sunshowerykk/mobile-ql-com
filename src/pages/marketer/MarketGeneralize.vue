<template>
  <div class="font-box">
    <TopBack>
      <span slot="headerTxt">推广收益明细</span>
    </TopBack>

    <div class="seltTime" v-if="month != 'all'">
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

    <tab active-color="#DB2C1B" default-color="#333333" :line-width="2" class="class-detail-tab-box">
      <tab-item selected @on-item-click="onItemClick">直接收益</tab-item>
      <tab-item @on-item-click="onItemClick">间接收益</tab-item>
    </tab>

    <transition name="fade" mode="out-in">

      <div class="incomeDetail" v-if="indexActive === 0" key="0">
        <div class="incomeList">
          <ul v-if="show">
            <li v-for="income in direct_income" >
              <img :src="income.pic"  />
              <strong class="name"> {{income.consignee}}</strong>
              <span class="source">{{income.status}}</span>
              <span class="money">{{income.income}}元</span>
              <span class="time">{{income.pay_time}}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="incomeDetail" v-if="indexActive === 1" key="1">
        <div class="incomeList">
          <ul v-if="show">
            <li v-for="income in indirect_income" >
              <img :src="income.pic"  />
              <strong class="name"> {{income.consignee}}</strong>
              <span class="source">{{income.status}}</span>
              <span class="money">{{income.income}}元</span>
              <span class="time">{{income.pay_time}}</span>
            </li>
          </ul>
        </div>
      </div>
    </transition>

    <Button class="confirmButton" type="warning" size="large" long>确认收益</Button>

  </div>
</template>

<script>
  import service_marketer from '@/http/services/marketer.js'
  import { Datetime, Group, Tab, TabItem} from 'vux'
    export default {
      name: "MarketGeneralize",
      data(){
          return{
            value1: '2019-01',
            direct_income : '',
            indirect_income: '',
            show : true,
            access_token :'',
            indexActive: 0,
            month: ''
          }
      },
      created() {
        this.month = this.$route.params.month;
        this.access_token = this.$cookies.get('access_token');
      },
      components: {
        Datetime,
        Group,
        Tab,
        TabItem
      },
      methods:{

        onItemClick(index){
          this.indexActive = index;
          if (index === 1) {
            this.getIndirectIncome();
          }
        },

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
          service_marketer.marketerService.directIncome({'access-token': this.access_token, 'month': this.month})
            .then(res => {
              if (res.status === 200 && res.data.status === 0) {
                this.direct_income = res.data.direct_income;
              } else {
                this.$Message.warning(res.data.message);
              }
            })
        },
        getIndirectIncome() {
          service_marketer.marketerService.indirectIncome({'access-token': this.access_token, 'month': this.month})
            .then(res => {
              if (res.status === 200 && res.data.status === 0) {
                this.indirect_income = res.data.indirect_income;
                console.log(this.indirect_income);
              } else {
                this.$Message.warning(res.data.message);
              }
            })
        }
      },
      mounted() {
          this.init();
      }
    }
</script>

