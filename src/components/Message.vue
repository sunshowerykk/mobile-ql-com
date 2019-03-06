<template>
    <div class="font-box">
      <TopBack>
        <span slot="headerTxt">消息中心</span>
      </TopBack>

      <div class="newsList">
        <ul>
          <li>
            <a href="#">
              <h5>2019年，看透日常背后的经济逻辑，范更少的错，走更远的录</h5>
              <span class="time">2019年1月16日14:14</span>
            </a>
          </li>
          <li>
            <a href="#">
              <h5>2019年，看透日常背后的经济逻辑，范更少的错，走更远的录</h5>
              <span class="time">2019年1月16日14:14</span>
            </a>
          </li>
          <li>
            <a href="#">
              <h5>2019年，看透日常背后的经济逻辑，范更少的错，走更远的录</h5>
              <span class="time">2019年1月16日14:14</span>
            </a>
          </li>
          <li>
            <a href="#">
              <h5>2019年，看透日常背后的经济逻辑，范更少的错，走更远的录</h5>
              <span class="time">2019年1月16日14:14</span>
            </a>
          </li>
          <li>
            <a href="#">
              <h5>2019年，看透日常背后的经济逻辑，范更少的错，走更远的录</h5>
              <span class="time">2019年1月16日14:14</span>
            </a>
          </li>
        </ul>

      </div>
    </div>
</template>

<script>
    export default {
        name: "Message"
    }
</script>

<style scoped>
  .newsList {
    padding: 0.2rem;
  }

  .newsList li {
    padding: 0.2rem;
    border-bottom: 1px solid #ececec;
  }

  .newsList li:last-child {
    border-bottom: none;
  }

  .newsList li h5 {
    font-size: 0.28rem;
    color: #333;
    margin-bottom: 0.2rem;
  }

  .newsList li .time {
    display: block;
    text-align: right;
    font-size: 0.24rem;
    color: #999;
  }

</style>
