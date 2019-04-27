<template>
    <div class="font-box">
      <TopBack>
        <span slot="headerTxt">设置</span>
      </TopBack>

      <div class="adresform setUpForm" >
        <div class="form">
          <ul>
            <li>
              <label>用户名</label>
              <input type="text" v-model= "settings.username" class="text" />
            </li>
            <li>
              <label>手机号</label>
              <input type="text" v-model="settings.phone" readonly="readonly" class="text"  />
            </li>
            <!--<li>
              <label>所在学校</label>
              <input type="text" :value="settings.school" readonly="readonly" class="text" />
            </li>-->

            <!--<li>
              <input type="text" placeholder="登录密码设置"  class="text text1" />
            </li>-->
            <li>
              <div class="upload">
                <!--
                <span>头像设置设置</span>
                  <input type="file" class="upload_btn" id="file1" accept="image/*" name="filename">
                -->
                <Upload
                  name="headimg"
                  :on-success="uploadSuccess"
                  :on-error="uploadError"
                  :format="['jpg','jpeg','png']"
                  :max-size='5120'
                  :on-format-error="formatError"
                  :on-exceeded-size="outSize"
                  :action="fileUploadUrl"
                  style="display: inline-block;width:58px;">
                  <img class="avatar" :src="this.settings.picture">
                  <Button icon="ios-cloud-upload-outline">上传头像</Button>
                </Upload>
              </div>
            </li>
            <li>
              <label>支付宝设置</label>
              <input type="text" v-model="settings.alipay_account"  class="text" />
            </li>
            <li>
              <label>收货地址</label>
              <textarea v-model="settings.address" class="text tera"></textarea>
            </li>
          </ul>
        </div>
      </div>
      <div class="botFixbtn">
        <button class="btn" @click="update">修改个人信息</button>
        <button class="btn" @click="exit">退出登录</button>
      </div>
    </div>
</template>

<script>
    import service_user from '@/http/services/user.js'
    export default {
        name: "MySet",
        data() {
          return {
            settings: {
              alipay_account: '',
              username: '',
              address: '',
              picture: ''
            },
            token: '',
            fileUploadUrl:'https://api.kaoben.top/personal/update-headimg?access-token='
          }
        },
        methods: {
          getCookie: function () {
            this.token = this.$cookies.get('access_token');
            this.fileUploadUrl += this.token;
          },
          exit: function () {
            this.$cookies.remove('access_token');
            this.$cookies.remove('isLogin');
            this.$cookies.remove('access_role');
            this.$cookies.remove('userid');
            this.$router.push({path: '/index'});
          },
          initSettings: function () {
            service_user.userService.getSet({'access-token': this.token}).then(res => {
            if (res.status === 200) {
              this.settings = res.data;
              this.settings.picture = res.data.picture;
            }
          })
          },
          update: function () {
            service_user.userService.changeSet(this.settings, this.token).then(res => {
            if (res.status === 200) {
              this.$Message.success('成功修改');
            }
          })
          },
          uploadSuccess: function (res, file) {
            if(res.status == 0) {
              this.settings.picture = res.url;
            }
          },
          uploadError: function (error,file) {
            this.$Message.error('上传头像失败');
          },
          formatError: function () {
            this.$Message.warning('请选择正确格式');
          },
          outSize(res, file) {
            this.$Message.info('最大上传5M的图片呦！');
          }
        },
        mounted: function () {
          this.getCookie();
          this.initSettings();
        }
    }
</script>

