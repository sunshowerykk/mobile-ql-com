<template>
  <div class="add-subordinate">
    <TopBack>
      <span slot="headerTxt">修改代理</span>
    </TopBack>
    <div class="content" v-loading="loading">
      <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <FormItem label="姓名" prop="username">
          <Input v-model="formValidate.username" placeholder="请输入姓名" />
        </FormItem>
        <FormItem label="电话号" prop="phone">
          <Input v-model="formValidate.phone" placeholder="请输入电话号" />
        </FormItem>
        <FormItem label="密码" prop="password">
          <Input type="password" v-model="formValidate.password" placeholder="请输入密码" />
        </FormItem>
        <FormItem class="operate">
          <Button type="primary" @click="handleSubmit('formValidate')">修改</Button>
        </FormItem>
    </Form>
    </div>
  </div>
</template>

<script>
import service_marketer from '@/http/services/marketer'
export default {
  name: 'AddSubordinate',
  data () {
    return {
      formValidate: {
        username: '',
        phone: '',
        password: '',
        userid: ''
      },
      ruleValidate: {
        username: [
            { required: true, message: '用户名不能为空', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '电话号码不能为空', trigger: 'blur' }
        ],
        password: [
            { required: true, message: '密码不能为空', trigger: 'blur' }
        ]
      },
      loading: false
    }
  },
  mounted () {
    this.loading = true;
    this.formValidate.userid = this.$route.params.id;
    service_marketer.marketerService.getMarketer({
      'access-token': this.$cookies.get('access_token'),
      'userid': this.formValidate.userid
    }).then(res => {
      if (res.status === 200 && res.data.status === 0) {
        this.formValidate.username = res.data.data.username;
        this.formValidate.phone = res.data.data.phone;
      } else {
        this.$router.push({
          name: 'SubordinateList'
        });
        this.$Message.error(res.data.message);
      }
      this.loading = false;
    })
  },
  methods: {
    handleSubmit (name) {
        this.$refs[name].validate((valid) => {
            if (valid) {
              let userid = this.$route.params.id;
              this.loading = true;
              service_marketer.marketerService.updateMarketer(this.$cookies.get('access_token'), this.formValidate).then(res => {
                if (res.status === 200 && res.data.status === 0) {
                  this.$router.push({
                    name: 'SubordinateList'
                  });
                  this.$Message.success('修改成功');
                } else {
                  this.$Message.error(res.data.message);
                }
                this.loading = false;
              })
            } else {
              this.$Message.error('信息有误');
            }
        })
    },
    handleReset (name) {
        this.$refs[name].resetFields();
    }
  }
}

</script>