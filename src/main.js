// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import TopBack from './components/top_back';
import Share from './components/share';
import VueCookies from 'vue-cookies';

import iView from 'iview';
import 'iview/dist/styles/iview.css';
import '@/assets/css/main.scss'

import wx from 'weixin-js-sdk';
//swiper引用
//import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
//import 'swiper/dist/css/swiper.css'

//vant引入
/*import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);*/

Vue.config.productionTip = false;

Vue.use(TopBack); //返回公共组件
Vue.use(Share); //分享公共组件
Vue.use(VueCookies);
Vue.use(iView); //使用iview组件
Vue.use(wx);

router.push('/index');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
});
