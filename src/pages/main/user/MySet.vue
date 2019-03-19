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
                  :format="['jpg']"
                  :max-size='7024'
                  :on-format-error="formatError"
                  :action="fileUploadUrl"
                  style="display: inline-block;width:58px;">
                  <Button icon="ios-cloud-upload-outline">上传头像</Button>
                  <img :src="this.settings.picture"></img>
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
            fileUploadUrl:'http://api.ql.com/personal/update-headimg?access-token='
          }
        },
        methods: {
          getCookie: function () {
            this.token = this.$cookies.get('access_token');
            this.fileUploadUrl += this.token;
          },
          exit: function () {
            this.$cookies.set('access_token', "", -1);
            this.$router.push({path: '/'});
          },
          initSettings: function () {
            service_user.userService.getSet(this.token).then(res => {
            if (res.status === 200) {
              this.settings = res.data;
              this.settings.picture = res.data.picture;
              console.log(this.settings);
            }
          })
          },
          update: function () {
            service_user.userService.changeSet(this.settings, this.token).then(res => {
            if (res.status === 200) {
              console.log('成功修改')
            }
          })
          },
          uploadSuccess: function (res, file) {
            if(res.status == 0) {
              this.settings.picture = res.url;
              console.log('shangchuan ' + this.settings.picture);
              console.log('成功上传头像')
            }
          },
          uploadError: function (error,file) {
            console.log('上传头像失败')
          },
          formatError: function () {
            console.log('请选择正确格式')
          }
        },
        mounted: function () {
          this.getCookie();
          this.initSettings();
        }
    }
</script>

