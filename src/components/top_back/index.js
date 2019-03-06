/**
 * 导出组件，里面需要install注册组件
 * */
import TopBackComponent from './TopBack.vue'
const TopBack = {
  install:function (Vue) {
    Vue.component('TopBack',TopBackComponent);
  }
}

export default TopBack;
