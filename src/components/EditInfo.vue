<template>
  <div class="font-box bg">
    <TopBack>
      <span slot="headerTxt">编辑信息</span>
    </TopBack>
    <div class="editInfo">
      <div class="accountNumber">
        <label>支付宝账号</label>
        <input type="text" placeholder="手机号/邮箱" class="text" v-model="alipayaccount"/>
      </div>
      <div class="tips">
        <p></p>
        <p></p>
      </div>
      <div class="btnMod">
        <button class="btn" @click="saveAlipay">保存</button>
      </div>
    </div>
  </div>
</template>

<script>
  import service from '@/http/services/user.js'
  import { Datetime, Group } from 'vux'
    export default {
        name: "EditInfo",
      data(){
        return{
         alipayaccount : '',
          access_token :'',
        }
      },
      methods:{
        saveAlipay() {
          service.personalService.updateAlipay({'access-token': this.access_token,'alipay_account' : this.alipayaccount}).then(res => {
            if (res.status === 200) {
             this.success();
            }
          })
        },
        success () {
          this.$Message.success('修改成功');
        },
        init() {
          service.personalService.getAlipay({'access-token': this.access_token}).then(res => {
            if (res.status === 200) {
              console.log(res.data);
              this.alipayaccount = res.data;
            }
          })
        }
      },
      mounted() {
          this.init();
          this.access_token = this.$cookies.get("access_token");
      }
    }

</script>

<style scoped>
  .bg{
    background: #fafafa;
    position: fixed;
    width: 100%;
    height: 100%;
  }
  .editInfo .tips {
    padding: 0.2rem;
  }

  .editInfo .tips p {
    font-size: 0.28rem;
    color: #999;
  }

  .editInfo .btnMod {
    padding: 1rem 0.2rem;
  }

  .editInfo .btnMod .btn {
    width: 100%;
    height: 0.88rem;
    font-size: 0.3rem;
    background: #DB2C1B;
    color: #fff;
    border: none;
    border-radius: 0.1rem;
  }

  .accountNumber {
    background: #fff;
    height: 0.88rem;
    overflow: hidden;
  }

  .accountNumber label {
    float: left;
    width: 30%;
    font-size: 0.28rem;
    color: #333;
    text-align: center;
    line-height: 0.88rem;
  }

  .accountNumber .text {
    width: 68%;
    height: 0.88rem;
    font-size: 0.28rem;
    border: none;
  }
</style>
