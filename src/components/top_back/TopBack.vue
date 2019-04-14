<!--头部返回-->
<template>
    <div class="top_back-box">
      <slot name="headerTxt">
        header
      </slot>
      <!--<span class="backIcon" >-->
        <x-icon type="ios-arrow-back" size="30" class="backIcon" @click="back"></x-icon>
      <!--</span>-->
      <slot name="share"></slot>

    </div>
</template>

<script>
    export default {
      name: "TopBack",
      methods:{
          back() {
            alert(123);
            // this.$router.back(-1);
            window.history.back(-1);
          }
      }
    }
</script>

<style scoped>
  .vux-x-icon {
    fill: #fff;
  }
  .top_back-box{
    height: 0.88rem;
    text-align: center;
    line-height: 0.88rem;
    background-color: #db2c1b;
    position: relative;
    font-size: 0.32rem;
    color: #fff;
  }
  .backIcon{
    position: absolute;
    left:0;
    top: 0;
    height: 0.88rem;
    padding: 0 0.1rem;
  }

</style>
