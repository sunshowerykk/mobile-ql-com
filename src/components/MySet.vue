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
    import service from '@/http/services/user.js'
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
            service.userService.getSet(this.token).then(res => {
            if (res.status === 200) {
              this.settings = res.data;
              this.settings.picture = res.data.picture;
              console.log(this.settings);
            }
          })
          },
          update: function () {
            service.userService.changeSet(this.settings, this.token).then(res => {
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

<style scoped>

  .adresform {
    padding: 0.2rem;
  }

  .adresform .form ul li {
    margin-bottom: 0.2rem;
  }

  .adresform .form label {
    font-size: 0.24rem;
    color: #666;
    display: block;
    margin-bottom: 0.1rem;
  }

  .adresform .form label i {
    color: #DB2C1B;
    margin-right: 0.2rem;
  }

  .adresform .form .text {
    width: 100%;
    height: 0.88rem;
    text-indent: 0.2rem;
    font-size: 0.28rem;
    color: #999;
    border: none;
    background: #f5f5f5;
    border-radius: 0.1rem;
  }

  .adresform .form .tera {
    height: 2rem;
    padding-top: 0.1rem;
  }

  .setUpForm {
    padding: 0;
  }

  .setUpForm .form ul li {
    overflow: hidden;
    border-bottom: 1px solid #ddd; /*background:#e8e8e8;*/
    margin-bottom: 0;
  }

  .setUpForm .form ul li:last-child {
    border-bottom: none;
  }

  .setUpForm .form li label {
    float: left;
    width: 20%;
    line-height: 0.88rem;
    text-align: center;
    margin-bottom: 0;
    min-width: 80px;
    text-align: right;
  }

  .setUpForm .form li .text {
    float: right;
    width: 78%;
    background: none;
  }
  .setUpForm .form li .text::-webkit-input-placeholder{
    color: #999;
  }

  .setUpForm .form li a {
    display: block;
    width: 100%;
    height: 0.88rem;
    line-height: 0.88rem;
    font-size: 0.24rem;
    color: #666;
    background: url(../assets/img/more.png) no-repeat 97%;
    background-size: 0.32rem 0.32rem;
    text-indent: 0.25rem;
  }

  .setUpForm .form li .text1 {
    width: 100%;
    text-indent: 0.3rem;
  }

  .setUpForm .form li .upload {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 0.88rem;
  }

  .setUpForm .form li .upload .upload_btn {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 9;
    cursor: pointer;
  }

  .setUpForm .form li .upload span {
    position: absolute;
    top: 0;
    left: 0.3rem;
    font-size: 0.28rem;
    color: #999;
    display: inline-block;
    height: 0.88rem;
    line-height: 0.88rem;
  }

  .setUpForm .form li .tera {
    height: 2rem;
    width: 70%;
    float: left;
    border: 1px solid #eee;
    margin: 10px 0 0 10px;
  }

  .botFixbtn {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 99;
    width: 100%;
  }

  .botFixbtn .btn {
    width: 100%;
    height: 0.88rem;
    font-size: 0.3rem;
    color: #fff;
    background: #DB2C1B;
    border: none;
    cursor: pointer;
  }

</style>
