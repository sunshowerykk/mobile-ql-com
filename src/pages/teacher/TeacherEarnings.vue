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
    <router-link :to="{'name': 'TeacherGeneralize', params:{month: 'all'}}" class="er-btn">明细查询</router-link>

    <div class="ear_get-time-box" v-loading="loading">
      <group title="" class="ear_time-group">
        <datetime
          v-model="value1"
          format="YYYY-MM"
          title=""
          @on-hide="log('hide', $event)"></datetime>
      </group>

      <span></span>

      <group title="" class="ear_time-group">
        <datetime
          v-model="value2"
          format="YYYY-MM"
          title=""
          @on-confirm="onConfirm2"
          @on-hide="log2('hide', $event)"></datetime>
      </group>
    </div>

    <div class="incomeLst" v-show="income === 0 || monthIncome.length === 0">
      <span>您在当前所选时间区间暂时还没有收益哦~加油吧！</span>
    </div>

    <Table border :columns="title" :data="monthIncome" v-if="monthIncome.length > 0" size="small">
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
  import service_teacher from '@/http/services/teacher'
  import service_marketer from '@/http/services/marketer'
  import { Datetime, Group } from 'vux'
    export default {
        name: "TeacherEarnings",
      data(){
          return{
            value1: '起始月份',
            value2: '结束月份',
            access_token: '',
            income : '',
            settlement: '',
            monthIncome:'',
            loading: true,
            title: [
              {
                title: '月份',
                key: 'month',
                sortable: true
              },
              {
                title: '课程销售额',
                key: 'income',
                sortable: true
              },
              {
                title: '提成',
                key: 'salary',
                width: '80px',
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
        log (str1, str2 = '') {
          console.log(str1, str2)
        },
        log2 (str1, str2 = '') {
          console.log(str1, str2)
        },
        onConfirm2 (val) {
          console.log('on-confirm arg', val)
          this.loading = true;
          service_teacher.teacherService.selectMonthIncome({'access-token': this.access_token,'start_month' :this.value1,'end_month' : this.value2}).then(res => {
            if (res.status === 200) {
              this.monthIncome = res.data.my_income;
              this.loading = false;
              console.log(this.monthincome);
            }
          })
        },
        init() {
          service_teacher.teacherService.income({'access-token': this.access_token}).then(res => {
            if (res.status === 200 && res.data.status == 0) {
              this.income = res.data.income;
              this.settlement = res.data.settlement;
            } else {
              this.$Message.warning(res.data.message);
            }
          })
        },
        initMonthCheck() {
          service_teacher.teacherService.monthIncome({'access-token': this.access_token}).then(res => {
            if (res.status === 200 && res.data.status == 0) {
              this.monthIncome = res.data.my_income;
              this.loading = false;
              console.log(this.monthIncome)
            } else {
              this.$Message.warning(res.data.message);
            }
          })
        },
        show(index) {
          // this.$Message.info(this.monthIncome[index].month);
          this.$router.push({name: 'TeacherGeneralize',
                             params:{month: this.monthIncome[index].month,
                                     status: this.monthIncome[index].status,
                                     salary: this.monthIncome[index].salary
                                    }});
        }

      },
      mounted() {
          this.init();
          this.initMonthCheck();
      }
    }
</script>

