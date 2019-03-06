<template>
    <div class="font-box">
      <div class="header">
        <div class="logo">
          <img src="../assets/img/logo.png" />
        </div>
        <router-link to="" class="toLogin">学员端</router-link>
      </div>
      <Navigation></Navigation>

      <div class="setMeal recommdBooks">
        <div class="tit">
          <h3>推荐图书</h3>
        </div>
        <div class="list">
          <ul>
            <li>
              <router-link :to="{'name': 'LibraryDetail', params:{id: '1'}}">
                <div class="inner clearfix">
                  <div class="img">
                    <img src="../assets/img/img15.png"  />
                  </div>
                  <div class="info">
                    <h5>2019年湖南省普通高校专升本考试高等数学教材</h5>
                    <div class="prise">
                      <strong>￥48预订价</strong>
                      <span><strike>￥79</strike>售价</span>
                    </div>
                  </div>
                </div>
              </router-link>
            </li>
            <li>
              <router-link :to="{'name': 'LibraryDetail', params:{id: '1'}}">
                <div class="inner clearfix">
                  <div class="img">
                    <img src="../assets/img/img15.png"  />
                  </div>
                  <div class="info">
                    <h5>2019年湖南省普通高校专升本考试高等数学教材</h5>
                    <div class="prise">
                      <strong>￥48预订价</strong>
                      <span><strike>￥79</strike>售价</span>
                    </div>
                  </div>
                </div>
              </router-link>
            </li>
            <li>
              <router-link :to="{name: 'LibraryDetail', params:{id: '1'}}">
                <div class="inner clearfix">
                  <div class="img">
                    <img src="../assets/img/img15.png"  />
                  </div>
                  <div class="info">
                    <h5>2019年湖南省普通高校专升本考试高等数学教材</h5>
                    <div class="prise">
                      <strong>￥48预订价</strong>
                      <span><strike>￥79</strike>售价</span>
                    </div>
                  </div>
                </div>
              </router-link>
            </li>
            <li>
              <router-link :to="{'name': 'LibraryDetail', params:{id: '1'}}">
                <div class="inner clearfix">
                  <div class="img">
                    <img src="../assets/img/img15.png"  />
                  </div>
                  <div class="info">
                    <h5>2019年湖南省普通高校专升本考试高等数学教材</h5>
                    <div class="prise">
                      <strong>￥48预订价</strong>
                      <span><strike>￥79</strike>售价</span>
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
    export default {
        name: "Library"
    }
</script>

<style scoped>

  .recommdBooks .list li {
    box-shadow: none;
    border-bottom: 1px solid #ececec;
  }

  .recommdBooks .list li .img {
    float: left;
    width: 28%;
  }

  .recommdBooks .list li .img img {
    display: block;
    width: 100%;
  }

  .recommdBooks .list li .info {
    float: right;
    width: 70%;
  }

  .recommdBooks .list li .info h5 {
    font-size: 0.3rem;
    color: #000;
    line-height: 0.35rem;
    margin-bottom: 0.3rem;
  }

  .recommdBooks .list li .info .prise strong {
    font-size: 0.28rem;
    color: #dd2523;
    margin-right: 0.2rem;
  }

  .recommdBooks .list li .info .prise span {
    font-size: 0.24rem;
    color: #999;
  }
</style>
