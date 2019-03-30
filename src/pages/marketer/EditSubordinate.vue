<template>
  <div class="add-subordinate">
    <TopBack>
      <span slot="headerTxt">修改代理</span>
    </TopBack>
    <div class="content">
      <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <FormItem label="姓名" prop="name">
          <Input v-model="formValidate.name" placeholder="请输入姓名" />
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
export default {
  name: 'AddSubordinate',
  data () {
    return {
      formValidate: {
        username: 'zhangsan',
        phone: '1888998998999',
        password: '2ewrerwerwer'
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
      }
    }
  },
  methods: {
    handleSubmit (name) {
        this.$refs[name].validate((valid) => {
            if (valid) {
                this.$Message.success('修改成功');
            } else {
                this.$Message.error('修改失败');
            }
        })
    },
    handleReset (name) {
        this.$refs[name].resetFields();
    }
  }
}

</script>