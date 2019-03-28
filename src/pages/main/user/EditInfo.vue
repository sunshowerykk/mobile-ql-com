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
  import service_user from '@/http/services/user.js'
  import { Datetime, Group } from 'vux'
    export default {
        name: "EditInfo",
      data(){
        return{
         alipayaccount : '',
          access_token :'',
        }
      },
      created () {
        this.access_token = this.$cookies.get("access_token");
      },
      methods:{
        saveAlipay() {
          service_user.userService.updateAlipay({'access-token': this.access_token,'alipay_account' : this.alipayaccount}).then(res => {
            if (res.status === 200) {
             this.success();
            }
          })
        },
        success () {
          this.$Message.success('修改成功');
        },
        init() {
          service_user.userService.getAlipay({'access-token': this.access_token}).then(res => {
            if (res.status === 200) {
              console.log(res.data);
              this.alipayaccount = res.data;
            }
          })
        }
      },
      mounted() {
          this.init();
      }
    }

</script>
