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
          title=""
          disabled="true"
          @on-cancel="log('cancel')"
          @on-confirm="onConfirm"
          @on-hide="log('hide', $event)">
        </datetime>
      </group>
    </div>

    <div class="incomeDetail">
      <div class="incomeList">
        <ul v-if="show">
          <li v-for="income in income_detail" >
            <img :src="income.pic"  />
            <strong class="name"> {{income.consignee}}</strong>
            <span class="source">{{income.status}}</span>
            <span class="money">{{income.income}}元</span>
            <span class="time">{{income.pay_time}}</span>
          </li>
        </ul>
      </div>
    </div>

    <Button
      class="confirmButton"
      type="warning"
      v-show="month != 'all'"
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
  import service_teacher from '@/http/services/teacher.js'
  import service_withdraw from '@/http/services/withdraw.js'
  import { Datetime, Group, Tab, TabItem} from 'vux'
    export default {
      name: "TeacherGeneralize",
      inject: ['reload'],
      data(){
          return{
            value1: '',
            income_detail: '',
            show : true,
            access_token :'',
            indexActive: 0,
            month: '',
            statusConfirm: false,
            salary: 0,
            modalFlag: false
          }
      },
      created() {
        this.month = this.$route.params.month;
        this.salary = this.$route.params.salary;
        this.statusConfirm = (this.$route.params.status === '已结算' || this.$route.params.status === '申请中') ? true : false;
        this.access_token = this.$cookies.get('access_token');
      },
      components: {
        Datetime,
        Group,
        Tab,
        TabItem
      },
      methods:{

        onConfirm (val) {
          console.log('on-confirm arg', val)
          console.log('current value', this.value1)
        },

        init() {
          if (this.month == 'all') {
            service_teacher.teacherService.incomeDetail({'access-token': this.access_token}).then(res => {
              if (res.status === 200 && res.data.status === 0) {
                this.income_detail = res.data.income_detail;
                console.log(this.income_detail);
              } else {
                this.$Message.warning(res.data.message);
              }
            })
          } else {
            service_teacher.teacherService
              .selectIncomeDetail({'access-token': this.access_token, 'month': this.month}).then(res => {
              if (res.status === 200 && res.data.status === 0) {
                this.income_detail = res.data.income_detail;
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
          if ((cur_year + '-' + cur_month) === this.month) {
            this.$Message.info('为确保您的收益，请下月再结算！');
          } else {
            service_withdraw.withdrawService.withdrawConfirm({
              'access-token': this.access_token, 'month': this.month, 'salary': this.salary}).then(res => {
                if (res.status === 200 && res.data.status === 0) {
                  this.$Message.success(res.data.message);
                  this.$router.push({name: 'TeacherEarnings'});
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

