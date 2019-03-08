<!--精品课-->
<template>
    <div>
      <div class="header">
        <div class="logo">
          <img src="../assets/img/logo.png" />
        </div>
        <router-link to="" class="toLogin">登录</router-link>
      </div>

      <!--导航-->
      <Navigation></Navigation>

      <div class="setMeal exCourse">
        <div class="tit">
          <h3>精品课程</h3>
        </div>
        <div class="list">
          <ul>
            <li>
              <router-link to="/ClassShare">
                <div class="item clearfix">
                  <div class="img_txt">
                    <div class="txt">
                      <strong>数学</strong>
                      <strong>小白课堂</strong>
                      <i class="line"></i>
                      <span>20考研数学</span>
                    </div>
                    <img src="../assets/img/img9.png"  />
                  </div>
                  <div class="info">
                    <h5>20考研 数学 小白课堂</h5>
                    <span class="by">李永乐</span>
                    <span class="alreay">已更新至120课时</span>
                    <div class="prise">
                      <span>366</span>
                      <span class="bought"><i></i>11</span>
                    </div>
                  </div>
                </div>
              </router-link>
            </li>
            <li>
              <router-link to="/ClassShare">
                <div class="item clearfix">
                  <div class="img_txt bg2">
                    <div class="txt">
                      <strong>数学</strong>
                      <strong>小白课堂</strong>
                      <i class="line"></i>
                      <span>20考研数学</span>
                    </div>
                    <img src="../assets/img/img10.png"  />
                  </div>
                  <div class="info">
                    <h5>20考研 数学 小白课堂</h5>
                    <span class="by">李永乐</span>
                    <span class="alreay">已更新至120课时</span>
                    <div class="prise">
                      <span>366</span>
                      <span class="bought"><i></i>11</span>
                    </div>
                  </div>
                </div>
              </router-link>
            </li>
            <li>
              <router-link to="/ClassShare">
                <div class="item clearfix">
                  <div class="img_txt bg3">
                    <div class="txt">
                      <strong>数学</strong>
                      <strong>小白课堂</strong>
                      <i class="line"></i>
                      <span>20考研数学</span>
                    </div>
                    <img src="../assets/img/img11.png"  />
                  </div>
                  <div class="info">
                    <h5>20考研 数学 小白课堂</h5>
                    <span class="by">李永乐</span>
                    <span class="alreay">已更新至120课时</span>
                    <div class="prise">
                      <span>366</span>
                      <span class="bought"><i></i>11</span>
                    </div>
                  </div>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>

    </div>
</template>

<script>
    import service from '@/http/services/user.js'
    export default {
      name: "ClassQuality",
      data() {
        return {
          courseList: ''
        }
      },

      methods: {

      },

      mounted: function () {

      }
    }
</script>

<style scoped>
  .exCourse .list li {
    box-shadow: none;
    border-bottom: 1px solid #ECECEC;
    padding-bottom: 0.2rem;
    margin-bottom: 0.2rem;
  }

  .exCourse .list li:last-child {
    border-bottom: none;
  }

  .exCourse .list li .img_txt {
    float: left;
    width: 35%;
    position: relative;
    border-radius: 0.1rem;
    background: #22c09d;
    color: #fff;
  }

  .exCourse .list li .bg2 {
    background: #e4c14d;
  }

  .exCourse .list li .bg3 {
    background: #e4c14b;
  }

  .exCourse .list .img_txt img {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 1.1rem;
  }

  .exCourse .list .img_txt .txt {
    padding: 0.2rem;
  }

  .exCourse .list .img_txt strong {
    display: block;
    font-size: 0.26rem;
    line-height: 0.4rem;
  }

  .exCourse .list .img_txt span {
    display: block;
    font-size: 0.18rem;
  }

  .exCourse .list .img_txt i.line {
    display: block;
    width: 0.3rem;
    height: 0.05rem;
    background: #fff;
    margin: 0.1rem 0 0.05rem;
  }

  .exCourse .list .info {
    float: right;
    width: 62%;
    line-height: 19px;
  }

  .exCourse .list .info h5 {
    font-size: 0.28rem;
    color: #333;
    padding:2px 0;
  }

  .exCourse .list .info .by {
    font-size: 0.26rem;
    color: #999;
    display: block;
  }

  .exCourse .list .info .alreay {
    font-size: 0.2rem;
    color: #000;
    display: block;
  }

  .exCourse .list .info .prise {
    overflow: hidden;
    font-size: 0.28rem;
    color: #DB2C1B;
  }

  .exCourse .list .info .prise .bought {
    float: right;
    font-size: 0.22rem;
    color: #999;
    margin-top: 0.1rem;
  }

  .exCourse .list .info .prise .bought i {
    display: inline-block;
    width: 0.3rem;
    height: 0.3rem;
    background: url(../assets/img/ivon11.png) no-repeat center;
    background-size: 0.3rem 0.3rem;
    vertical-align: top;
    margin: 0.05rem 0.1rem;
  }
</style>
