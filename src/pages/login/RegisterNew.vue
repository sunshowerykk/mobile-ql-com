<template>
    <div class="layout register-new">
        <div v-loading="loading">
          <div class="y_banner">
            <img src="../../assets/img/register-new/banner.png"/>
          </div>
          <div class="y_banner_text">
              <div class="box">
                  <h5>验证码以发送到手机：{{registerForm.phone}}</h5>
                  <label><input type="text" placeholder="验证码" v-model="registerForm.smscode" /><span class="msgs">{{countdown}}s</span></label>
                  <label><input type="password" autocomplete="new-password" placeholder="设置密码" v-model="registerForm.password" /></label>
                  <button id="qr" @click="handleRegiter">最后一步，立即领取</button>
              </div>
              <div class="box2">
                  <label><input class="inp" v-model="registerForm.phone" type="text" placeholder="输入手机号，注册下单赠送考本资料" /></label>
                  <button @click="handleSms">免费领取考本资料</button>
              </div>
              <p>*关注微信公众号“都想学考本帮”进入学习入口</p>
          </div>
          <div class="y_lable">
              <h2 class="y_title">专家团队教研·课程内容精准</h2>
              <img src="../../assets/img/register-new/lable.png" />
          </div>
        </div>
        <div id="slideBox" class="slideBox">
            <div class="top">
                <h2 class="y_title">名校师资授课·保证教学质量</h2>
                <h6>北京大学、中国人民大学、山东大学等名校毕业博士，授课经验丰富</h6>
            </div>
            <div class="bd">
                <Carousel
                    v-model="slideSetting.slideStart"
                    :autoplay="slideSetting.autoplay"
                    :autoplay-speed="slideSetting.autoplaySpeed"
                    :dots="slideSetting.dots"
                    :radius-dot="slideSetting.radiusDot"
                    :trigger="slideSetting.trigger"
                    :arrow="slideSetting.arrow">
                    <CarouselItem>
                        <dl class="clearfix">
                            <dd><a href="#">
                                <div class="img"><img src="../../assets/img/register-new/y_img1.png" /></div>
                                <h4>孙凌钰<span>博士</span></h4>
                                <h6>都想学山东省专升本大学语文教研组组长</h6>
                                <p>2014年在北京大学获文学博士学位；主攻专业比较文学与世界文学；主讲课程为本科生必修课“外国文学史”“西方文论概论”，选修课“西方文论经典导读”等；</p>
                            </a></dd>
                            <dd><a href="#">
                                <div class="img"><img src="../../assets/img/register-new/y_img2.png" /></div>
                                <h4>张未然<span>博士</span></h4>
                                <h6>都想学山东省专升本大学语文教研组成员</h6>
                                <p>北京大学、巴黎大学双博士学位；主要讲授课程：中文写作、汉语词汇、构词法；</p>
                            </a></dd>
                        </dl>
                    </CarouselItem>
                    <CarouselItem>
                        <dl class="">
                            <dd><a href="#">
                                <div class="img"><img src="../../assets/img/register-new/y_img3.png" /></div>
                                <h4>郑柳依<span>博士</span></h4>
                                <h6>都想学山东省专升本大学英语教研组成员</h6>
                                <p>天津外国语大学学士，康普顿斯大学博士；主讲课程：英语阅读、英语写作；</p>
                            </a></dd>
                            <dd><a href="#">
                                <div class="img"><img src="../../assets/img/register-new/y_img4.png" /></div>
                                <h4>陈见柯<span>博士</span></h4>
                                <h6>都想学山东省专升本高等数学教研组组长</h6>
                                <p>先后在山东师范大学、首都师范大学、北京师范大学获得学士、硕士、博士学位，中国科学院博士后，主讲本科生必修课高等数学，多年考研及专升本辅导经验。</p>
                            </a></dd>
                        </dl>
                    </CarouselItem>
                    <CarouselItem>
                        <dl class="">
                            <dd><a href="#">
                                <div class="img"><img src="../../assets/img/register-new/y_img5.png" /></div>
                                <h4>马建丽<span>博士</span></h4>
                                <h6>都想学山东省专升本大学英语教研组组长</h6>
                                <p>影视剧译制教研室主任，博士，硕士生导师；翻译电影《星球大战前传III》，《痴男怨女》、《一级戒备》《惊魂五天》。擅长讲授课程：英语翻译。</p>
                            </a></dd>
                            <dd><a href="#">
                                <div class="img"><img src="../../assets/img/register-new/y_img6.png" /></div>
                                <h4>刘  玥<span>博士</span></h4>
                                <h6>都想学山东省专升本大学语文教研组成员</h6>
                                <p>山东济南人，2014年在中国人民大学获博士文学学位；主讲课程有《古代汉语》《汉语史》《中国语言学史》《汉语文字学》《汉语词汇学》等;</p>
                            </a></dd>
                        </dl>
                    </CarouselItem>
                </Carousel>
            </div>
        </div>
        <div class="y_list">
            <h2 class="y_title">课堂形式多样·直播录播皆有</h2>
            <ul>
                <li>
                    <div class="box clearfix">
                        <div class="img">
                            <img src="../../assets/img/register-new/y_list2.jpg" />
                        </div>
                        <div class="text">
                            <h4><img src="../../assets/img/register-new/y_icon1.png" />直播授课</h4>
                            <p>直播互动，现场感更好</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="box clearfix">
                        <div class="img">
                            <img src="../../assets/img/register-new/y_list1.jpg" />
                        </div>
                        <div class="text">
                            <h4><img src="../../assets/img/register-new/y_icon2.png" />录播授课</h4>
                            <p>课程内容更精准，全是干货</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="y_listing">
            <h2 class="y_title">课程内容丰富·保证学习效果</h2>
            <ul class="clearfix">
                <li>
                    <img src="../../assets/img/register-new/y_list6.jpg" />
                    <p><i></i>答疑互动</p>
                </li>
                <li>
                    <img src="../../assets/img/register-new/y_list3.jpg" />
                    <p><i></i>随堂测试</p>
                </li>
                <li>
                    <img src="../../assets/img/register-new/y_list4.jpg" />
                    <p><i></i>错题本</p>
                </li>
                <li>
                    <img src="../../assets/img/register-new/y_list5.jpg" />
                    <p><i></i>学情报告</p>
                </li>
            </ul>
        </div>
        <div class="y_seqencing">
            <h2 class="y_title">多种班型·任你选择</h2>
            <ul>
                <li class="clearfix">
                    <div class="left fl">
                        <i>01</i>
                        <h4>零基础班</h4>
                    </div>
                    <div class="text fl">
                        <p>供大一、大二学生提前备考使用，结合考试大纲系统讲解课本知识，高效打造坚实基础。</p>
                    </div>
                </li>
                <li class="clearfix">
                    <div class="left fl">
                        <i>02</i>
                        <h4>强化班</h4>
                    </div>
                    <div class="text fl">
                        <p>紧扣考试大纲，精讲精练，学练一体，强化训练巩固所学，模拟训练，强化考点。</p>
                    </div>
                </li>
                <li class="clearfix">
                    <div class="left fl">
                        <i>03</i>
                        <h4>冲刺班</h4>
                    </div>
                    <div class="text fl">
                        <p>讲解考试要点、突出高频考点，考前预测，提升考试能力，创造高分神话。</p>
                    </div>
                </li>
                <li class="clearfix">
                    <div class="left fl">
                        <i>04</i>
                        <h4>协议班</h4>
                    </div>
                    <div class="text fl">
                        <p>冲刺阶段全封闭集中面授，考前突击15天，让你升本更有保障。同时提供密押试卷4套用以模拟考试，让你豁然开朗。不过线就退款！</p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="y_qr">
            <div class="top">
                <h3>关注微信公众号·即刻学习</h3>
                <h6>无需下载app,不占用手机内存</h6>
            </div>
            <div class="img">
                <img src="../../assets/img/register-new/y_qr.jpg" />
                <p>长按识别</p>
            </div>
        </div>
        <div class="qr_box">
            <div class="box">
                <h3>关注微信公众号，进入学习入口</h3>
                <img src="../../assets/img/register-new/y_qr.jpg" />
                <p>长按二维码识别</p>
            </div>
        </div>
        <div class="h110"></div>
        <div class="y_footer clearfix">
            <div class="left fl">注册下单赠送考本资料</div>
            <div class="btn fr"><a href="#">领取资料</a></div>
        </div>
    </div>
</template>
<script>
  import service from '@/http/services/user.js'
  import $ from 'jquery'
  export default {
    name: "RegisterNew",
    data() {
      return {
        registerForm: {
          phone: '',
          password: '',
          username: '',
          smscode: '',
          invite: ''
        },
        countdown: 60,
        smsForm: {
          channel: 'signup',
        },
        loading: false,
        slideSetting: {
            slideStart: 0,
            autoplay: true,
            autoplaySpeed: 4000,
            dots: 'outside',
            radiusDot: true,
            trigger: 'click',
            arrow: 'hover'
        }
      }
    },
    methods: {
      //获取注册表单
      handleRegiter: function () {
        this.registerForm.username = '尊敬的用户';
        if (!this.registerForm.phone) {
          this.$Message.warning('手机号不能为空');
          return false;
        } else if (!this.registerForm.smscode) {
          this.$Message.warning('验证码不能为空');
          return false;
        } else if (!this.registerForm.username) {
          this.$Message.warning('用户名不能为空');
          return false;
        } else if (this.registerForm.password.length < 6) {
          this.$Message.warning('密码不能低于6位');
          return false;
        }
        this.loading = true;
        service.userService.register(this.registerForm).then(res => {
          if(res.status === 200 && res.data.status === 0) {
            this.$Message.success('注册成功，请登录');
            this.$router.push({ path: "/login" });
          } else {
            this.$Message.error(res.data.message);
          }
          this.loading = false;
        })
      },
      //获取验证码
      handleSms: function() {
        let reg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
        if (reg.test(this.registerForm.phone)) {
          service.userService.smsCode({channel: 'signup',phone: this.registerForm.phone}).then(res => {
            if(res.status === 200 && res.data.status === 0) {
              $(".y_banner_text .box2").slideUp();
              $(".y_banner_text .box").slideDown();
              let invalId = setInterval(() => {
                if (this.countdown === 0) {
                  clearInterval(invalId);
                } else {
                  this.countdown--;
                }
              }, 1000);
              this.$Message.success('短信验证码发送成功');
            } else {
              this.$Message.warning(res.data.message);
            }
          });
        } else {
          this.$Message.warning('电话号码格式不正确');
        }
      },
    },
    mounted () {
      if (this.$route.query.invite) {
        this.$cookies.set("invite", this.$route.query.invite, 60*60*24*20);
      }
      this.registerForm.invite = this.$route.query.invite || this.$cookies.get("invite");
      $(window).scroll(function() {
        //获取窗口已滚动的高度
        var windowScrollTop=$(window).scrollTop();
        //如果大约100PX，就渐显出“回到顶部”，否则即隐藏
        if(windowScrollTop>600)
        {
            $(".y_footer").slideDown();
        }else{
            $(".y_footer").slideUp();
        }
      });
    }
  }
</script>