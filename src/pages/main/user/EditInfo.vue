<template>
  <div class="font-box bg">
    <TopBack>
      <span slot="headerTxt">编辑信息</span>
    </TopBack>
    <div class="editInfo">
        <!--<label>支付宝账号</label>-->
        <!--<input type="text" placeholder="请输入支付宝账号" class="text" v-model="alipayaccount"/>-->
        <Form  style="margin-top: 10px" ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="85">
          <FormItem label="支付宝账号" prop="alipayaccount">
            <Input style="width: 300px" v-model="formValidate.alipayaccount" placeholder="请输入支付宝账号" />
          </FormItem>
        </Form>
      <div class="tips">
        <p></p>
        <p></p>
      </div>
      <div class="btnMod">
        <button class="btn" @click="saveAlipay('formValidate')">保存</button>
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
          access_token :'',
          formValidate: {
            alipayaccount: ''
          },
          ruleValidate: {
            alipayaccount: [
              { required: true, message: '账号不能为空', trigger: 'blur' }
            ]
          },
        }
      },
      created () {
        this.access_token = this.$cookies.get("access_token");
      },
      methods:{
        saveAlipay(name) {
          this.$refs[name].validate((valid => {
            if (valid) {
              service_user.userService.updateAlipay({'access-token': this.access_token,'alipay_account' : this.formValidate.alipayaccount}).then(res => {
                if (res.status === 200 && res.data.status === 0) {
                  this.$Message.info(res.data.message);
                  this.$router.go(-1);
                } else {
                  this.$Message.warning(res.data.message);
                }
              })
            } else {
              this.$Message.info('请检查表单的错误！');
            }
          }))
        },

        init() {
          service_user.userService.getAlipay({'access-token': this.access_token}).then(res => {
            if (res.status === 200) {
              console.log(res.data);
              this.formValidate.alipayaccount = res.data;
            }
          })
        }
      },
      mounted() {
          this.init();
      }
    }

</script>
