<template>
  <div class="main-main">
    <Header></Header>
    <Navigation></Navigation>
    <div class="main-body">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Header from '@/components/header'
import Navigation from '@/components/navigation/Navigation'
export default {
  name: 'home',
  components: {
    Header,
    Navigation
  }
}
</script>
