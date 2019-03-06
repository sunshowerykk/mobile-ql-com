<template>
    <div class="font-box">
      <TopBack>
        <span slot="headerTxt">我的金币</span>
      </TopBack>

      <div class="goldCoin">
        <div class="money">
          <strong>25</strong>
        </div>
        <div class="detaillist">
          <h3>明细</h3>
          <ul>
            <li>
              <a href="#">
                <h5 class="source">注册赠送</h5>
                <span class="time">2018-01-17</span>
                <strong class="num positive">+20</strong>
              </a>
            </li>
            <li>
              <a href="#">
                <h5 class="source">注册赠送</h5>
                <span class="time">2018-01-17</span>
                <strong class="num negative">-20</strong>
              </a>
            </li>
            <li>
              <a href="#">
                <h5 class="source">注册赠送</h5>
                <span class="time">2018-01-17</span>
                <strong class="num positive">+20</strong>
              </a>
            </li>
            <li>
              <a href="#">
                <h5 class="source">注册赠送</h5>
                <span class="time">2018-01-17</span>
                <strong class="num negative">-20</strong>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "MyGold"
    }
</script>

<style scoped>
  .goldCoin .money {
    padding: 0.3rem 0;
    background: #DB2C1B;
  }

  .goldCoin .money strong {
    display: block;
    text-align: center;
    font-size: 0.5rem;
    color: #fff;
  }

  .goldCoin .detaillist h3 {
    height: 0.7rem;
    line-height: 0.7rem;
    padding-left: 0.4rem;
    border-bottom: 1px solid #ECECEC;
    font-size: 0.3rem;
    color: #000;
    position: relative;
    background: #fff;
  }

  .goldCoin .detaillist h3:before {
    position: absolute;
    top: 0.24rem;
    left: 0.2rem;
    content: "";
    width: 0.05rem;
    height: 0.26rem;
    background: #DB2C1B;
  }

  .goldCoin .detaillist li {
    padding: 0.2rem;
    position: relative;
    background: #fff;
    margin-bottom: 0.1rem;
  }

  .goldCoin .detaillist li h5 {
    font-size: 0.28rem;
    color: #666;
  }

  .goldCoin .detaillist li span {
    font-size: 0.24rem;
    color: #999;
  }

  .goldCoin .detaillist li strong {
    position: absolute;
    top: 0.2rem;
    right: 0.2rem;
    font-size: 0.26rem;
    color: #000;
    font-weight: bold;
  }

  .goldCoin .detaillist li strong.negative {
    color: #999;
  }

</style>
