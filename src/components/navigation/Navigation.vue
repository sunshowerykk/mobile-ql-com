<template>
    <div class="labsMod">
      <nav>
        <router-link to="/index"><span>首页</span></router-link>
        <router-link to="/SetMeal"><span>套餐</span></router-link>
        <router-link to="/ClassQuality"><span>精品课</span></router-link>
        <router-link to="/PublicClass"><span>公开课</span></router-link>
        <router-link to="/Library"><span>图书</span></router-link>
        <router-link to="/informationList"><span>资讯</span></router-link>
      </nav>
    </div>
</template>

<script>
  export default {
    name: "navigation"
  }
</script>

<style scoped>
  nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 0.7rem;
    font-size: 0.3rem;
    text-align: center;
  }
  a {
    display: block;
    flex-grow: 1;
    color: #333;
    height: 100%;
  }
  a span {
    display: inline-block;
    height: 100%;
    line-height: 0.7rem;
    height: 100%;
    box-sizing: border-box;
    padding: 0 0.18rem;
  }
  .router-link-exact-active {
    color: #DB2C1B;
  }
  .router-link-exact-active span {
    border-bottom: 0.04rem solid #DB2C1B;
  }
  .labsMod {
    border-bottom: 1px solid #ECECEC;
  }
</style>
