<template>
  <div class="font-box">
    <TopBack>
      <span slot="headerTxt">推广收益明细</span>
    </TopBack>

    <div class="seltTime" v-if="month != 'all'">
      <group title="" class="generalize-title">
        <datetime
          class="generalize-sel-date"
          v-model="month"
          @on-change="change"
          title=""
          disabled="true">
        </datetime>
      </group>
    </div>

    <tab active-color="#DB2C1B" default-color="#333333" :line-width="2" class="class-detail-tab-box">
      <tab-item selected @on-item-click="onItemClick">直接收益</tab-item>
      <tab-item @on-item-click="onItemClick">间接收益</tab-item>
    </tab>

    <div class="incomeDetail" v-if="indexActive === 0" key="0">
      <div class="incomeList">
        <Table :columns="directColumns" :data="directIncome"></Table>
      </div>
      <div v-if="directIncome.length === 0">
        <span>您暂时没有这部分收益</span>
      </div>
    </div>

    <div class="incomeDetail" v-if="indexActive === 1" key="1">
      <div class="incomeList indirect">
        <Table :columns="indirectColumns" :data="indirectIncome"></Table>
      </div>
      <div v-if="indirectIncome.length === 0">
        <span>您暂时没有这部分收益</span>
      </div>
    </div>

    <Button
      class="confirmButton"
      v-show="month != 'all'"
      type="warning"
      size="large"
      :disabled="statusConfirm"
      @click="modalFlag = !modalFlag"
      long>
      {{statusConfirm ? '已确认结算' : '确认收益'}}
    </Button>

    <Modal
      v-model="modalFlag"
      title="温馨提示"
      @on-ok="confirmWithdraw"
      @on-cancel="cancelConfirm">
      <p>选择确认则代表您对当前月份的收益没有疑问，<b>提交后将不可修改</b>。有疑问请点击取消重新核对并联系客服！</p>
    </Modal>

  </div>
</template>

<script>
  import service_marketer from '@/http/services/marketer.js'
  import service_withdraw from '@/http/services/withdraw.js'
  import { Datetime, Group, Tab, TabItem} from 'vux'
    export default {
      name: "MarketGeneralize",
      inject: ['reload'],
      data(){
          return {
            value1: '',
            show : true,
            access_token :'',
            indexActive: 0,
            month: '',
            statusConfirm: false,
            salary: 0,
            modalFlag: false,
            directIncome: [],
            directColumns: [
                {
                    title: '姓名',
                    key: 'consignee'
                }, {
                    title: '下单金额',
                    key: 'order_amount'
                }, {
                    title: '提成',
                    key: 'income'
                }, {
                    title: '下单时间',
                    key: 'pay_time'
                }
            ],
            indirectColumns: [
                {
                    title: '姓名',
                    key: 'username'
                }, {
                    title: '总收益（元）',
                    key: 'income'
                }, {
                    title: '提成（元）',
                    key: 'tc'
                }
            ],
            indirectIncome: []
          }
      },
      created() {
        this.month = this.$route.params.month;
        this.salary = this.$route.params.salary;
        this.statusConfirm = (this.$route.params.status === '已结算') ? true : false;
        this.access_token = this.$cookies.get('access_token');
        console.log(this.salary);
        console.log(this.statusConfirm);
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
          service_user.userService.incomeCheck({'date': this.value1, 'access-token': this.access_token}).then(res => {
            if (res.status === 200) {
              this.incomes = res.data;
              if(!(JSON.stringify(res.data)==0)) {
                this.show = true;
              }
            }
          })
        },
        init() {
          if (this.month == 'all') {
            service_marketer.marketerService.directIncome({'access-token': this.access_token, 'month': this.month})
              .then(res => {
                if (res.status === 200 && res.data.status === 0) {
                  this.directIncome = res.data.direct_income;
                } else {
                  this.$Message.warning(res.data.message);
                }
              })
          } else {
            service_marketer.marketerService.monthDirectIncome({'access-token': this.access_token, 'month': this.month})
              .then(res => {
                if (res.status === 200 && res.data.status === 0) {
                  this.directIncome = res.data.direct_income;
                } else {
                  this.$Message.warning(res.data.message);
                }
              })
          }
        },
        getIndirectIncome() {
          if (this.month == 'all') {
            service_marketer.marketerService.indirectIncome({'access-token': this.access_token, 'month': this.month})
              .then(res => {
                if (res.status === 200 && res.data.status === 0) {
                  this.indirectIncome = res.data.indirect_income;
                } else {
                  this.$Message.warning(res.data.message);
                }
              })
          } else {
            service_marketer.marketerService.monthIndirectIncome({'access-token': this.access_token, 'month': this.month})
              .then(res => {
                if (res.status === 200 && res.data.status === 0) {
                  this.indirectIncome = res.data.indirect_income;
                } else {
                  this.$Message.warning(res.data.message);
                }
              })
          }

        },

        confirmWithdraw() {
          var date = new Date();
          var cur_year = date .getFullYear();
          var cur_month = date.getMonth() + 1;
          if (cur_month < 10) {
            cur_month = '0' + cur_month;
          }
          if ((cur_year + '-' + cur_month) === this.month)  {
            this.$Message.info('为确保您的收益，请下月再结算！');
          } else {
            service_withdraw.withdrawService.withdrawConfirm({
              'access-token': this.access_token, 'month': this.month, 'salary': this.salary}).then(res => {
              if (res.status === 200 && res.data.status === 0) {
                this.$Message.success(res.data.message);
                this.$router.push({name: 'MarketEarnings'});
              } else {
                this.$Message.warning(res.data.message);
              }
            })
          }
        },

        cancelConfirm() {
          this.$Message.info('已取消提交，请仔细核对');
        }
      },
      mounted() {
          this.init();
      }
    }
</script>

