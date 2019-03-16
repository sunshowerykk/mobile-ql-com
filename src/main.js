// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Navigation from './components/navigation';  //引用公共组件默认情况下找的是index文件
import TopBack from './components/top_back'
import Share from './components/share'
import VueCookies from 'vue-cookies'
<<<<<<< HEAD
import iView from 'iview'
import "./assets/css/course.css"
import 'iview/dist/styles/iview.css';

=======
import iView from 'iview' //导入iview组件库
import 'iview/dist/styles/iview.css';// 导入iview样式
import wx from 'weixin-js-sdk';
>>>>>>> c0b60f7b26aad5f9fd90c323cb56070a5d61f16d
//swiper引用
//import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
//import 'swiper/dist/css/swiper.css'

//vant引入
/*import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);*/

Vue.config.productionTip = false;

Vue.use(Navigation); //使用导航
Vue.use(TopBack);  //返回公共组件
Vue.use(Share);  //分享公共组件
Vue.use(VueCookies);
<<<<<<< HEAD
Vue.use(iView);
=======
Vue.use(iView);//使用iview组件
Vue.use(wx);

>>>>>>> c0b60f7b26aad5f9fd90c323cb56070a5d61f16d

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

