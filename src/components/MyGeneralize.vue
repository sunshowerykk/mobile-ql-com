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
        <ul>
          <li>
            <img src="../assets/img/img23.png"  />
            <strong class="name"> 某某</strong>
            <span class="source">注册</span>
            <span class="money">488元</span>
            <span class="time">2019-01-17</span>
          </li>
          <li>
            <img src="../assets/img/img23.png"  />
            <strong class="name"> 某某</strong>
            <span class="source">注册</span>
            <span class="money">488元</span>
            <span class="time">2019-01-17</span>
          </li>
          <li>
            <img src="../assets/img/img23.png"  />
            <strong class="name"> 某某</strong>
            <span class="source">注册</span>
            <span class="money">488元</span>
            <span class="time">2019-01-17</span>
          </li><li>
          <img src="../assets/img/img23.png"  />
          <strong class="name"> 某某</strong>
          <span class="source">注册</span>
          <span class="money">488元</span>
          <span class="time">2019-01-17</span>
        </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import { Datetime, Group } from 'vux'
    export default {
        name: "MyGeneralize",
      data(){
          return{
            value1: '请选择时间',
          }
      },
      components: {
        Datetime,
        Group
      },
      methods:{

        change (value) {
          console.log('change', value)
        },

        onConfirm (val) {
          console.log('on-confirm arg', val)
          console.log('current value', this.value1)
        },

        //
        log (str1, str2 = '') {
          console.log(str1, str2)
        },
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
