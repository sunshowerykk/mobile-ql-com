<!--公开课-->
<template>
    <div>
      <div class="header">
        <div class="logo">
          <img src="../assets/img/logo.png" />
        </div>
        <router-link to="" class="toLogin">学员端</router-link>
      </div>
      <Navigation></Navigation>

      <div class="setMeal publicClass">
        <div class="tit">
          <h3>升本公开课</h3>
        </div>
        <div class="list">
          <ul>
            <li>
              <router-link :to="{name: 'PublicClassDetail', params:{id: '1'}}">
                <div class="item">
                  <video class="video" poster="../assets/img/img13.png" id="video1">
                    <source src="" type="video/mp4">抱歉，你的浏览器不能查看该视频
                  </video>
                  <div class="txt">
                    <span class="classtype">天文漫谈</span>
                    <strong class="tip">北极星与小熊座</strong>
                    <span class="time"><i></i>11'12</span>
                  </div>
                </div>
              </router-link>
            </li>
            <li>
              <router-link :to="{name: 'PublicClassDetail', id: '1'}">
                <div class="item">
                  <video class="video" poster="../assets/img/img14.png" id="video2">
                    <source src="" type="video/mp4">抱歉，你的浏览器不能查看该视频
                  </video>
                  <div class="txt">
                    <span class="classtype">天文漫谈</span>
                    <strong class="tip">北极星与小熊座</strong>
                    <span class="time"><i></i>11'12</span>
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
    export default {
        name: "PublicClass"
    }
</script>

<style scoped>
  .publicClass .list li {
    box-shadow: none;
    position: relative;
    width: 100%;
    height: 3.6rem;
    overflow: hidden;
  }

  .publicClass .list li .item {
    background: none;
    height: 3.6rem;
    overflow: hidden;
  }

  /*.publicClass .list li img{display:block;width:100%;height:3.6rem;}*/
  .publicClass .list .txt {
    position: absolute;
    top: 0;
    height: 100%;
    left: 0;
    width: 100%;
    text-align: center;
    color: #fff;
  }

  .publicClass .list .txt span {
    display: block;
    text-align: center;
  }

  .publicClass .list .txt strong {
    display: block;
    text-align: center;
    font-size: 0.4rem;
  }

  .publicClass .list .classtype {
    padding-top: 1rem;
    font-size: 0.28rem;
  }

  .publicClass .list span.time {
    font-size: 0.24rem;
  }

  .publicClass .list span.time i {
    display: inline-block;
    width: 0.32rem;
    height: 0.32rem;
    background: url(../assets/img/icon15_1.png) no-repeat center;
    background-size: 0.32rem 0.32rem;
    vertical-align: top;
    margin-right: 0.1rem;
    margin-top: 0.08rem;
  }

  .publicClass .list li .viedo {
    height: 3.6rem;
  }
</style>
