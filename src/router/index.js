import Vue from 'vue'
import Router from 'vue-router'
import main from '@/pages/main'
import Login from '@/pages/login/Login' //登录
import Register from '@/pages/login/Register' //注册
import RegisterNew from '@/pages/login/RegisterNew' //注册
import VerificationCode from '@/pages/login/VerificationCode' //忘记密码
import home from '@/pages/main/home/index' //首页
import SetMeal from '@/pages/main/package/SetMeal' //套餐
import SetMealDetail from '@/pages/main/package/SetMealDetail' //套餐详情
import ClassQuality from '@/pages/main/course/ClassQuality' //精品课
import ClassShare from '@/pages/main/course/ClassShare' //精品课详情页
import PublicClass from '@/pages/main/open/PublicClass' //公开课
import Library from '@/pages/main/library/Library' //图书
import Notice from '@/components/Notice' //公告
import LibraryDetail from '@/pages/main/library/LibraryDetail' //图书详情
import InformationList from '@/pages/main/information/informationList' //资讯列表
import InformationDetail from '@/pages/main/information/informationDetail' //资讯详情
import PayCenter from '@/pages/main/pay/PayCenter'  //支付中心
import PayOk from '@/pages/main/pay/PayOk'  //支付成功
import UserCenter from '@/pages/main/user/UserCenter'   // 个人中心
import MyClass from '@/pages/main/user/MyClass'   // 我的课程
import MyClassDetail from '@/pages/main/user/MyClassDetail'   // 我的课程详情
import Message from '@/pages/main/user/Message'//消息中心
import MessageDetail from '@/pages/main/user/MessageDetail'//消息详情
import MyGold from '@/pages/main/user/MyGold'//我的金币
import MyOrder from '@/pages/main/user/MyOrder'//我的订单
import MyCollect from '@/pages/main/user/MyCollect'//我的收藏
import MyEarnings from '@/pages/main/user/MyEarnings'//我的收益
import MyGeneralize from '@/pages/main/user/MyGeneralize'//收益明细
import EditInfo from '@/pages/main/user/EditInfo'//绑定账号
import MyPublicity from '@/pages/main/user/MyPublicity'//我的宣传页
import MySet from '@/pages/main/user/MySet'//我的设置
import QualityCourseVideo from '@/pages/main/course/QualityCourseVideo'//视频播放页

// 市场端组件引入
import MarketerCenter from '@/pages/marketer/MarketerCenter' //个人中心
import MarketEarnings from '@/pages/marketer/MarketEarnings' // 收益
import MyFile from '@/pages/marketer/MyFile' // 我的协议
import SubordinateList from '@/pages/marketer/SubordinateList' // 下级管理
import AddSubordinate from '@/pages/marketer/AddSubordinate' // 添加下级
import EditSubordinate from '@/pages/marketer/EditSubordinate' // 修改下级
import MarketGeneralize from '@/pages/marketer/MarketGeneralize' // 市场端收益明细

// 教师端组件引入
import TeacherCenter from '@/pages/teacher/TeacherCenter' //教师个人中心
import TeacherEarnings from '@/pages/teacher/TeacherEarnings' //教师收益
import TeacherGeneralize from '@/pages/teacher/TeacherGeneralize' //教师收益明细
import TeacherClass from '@/pages/teacher/TeacherClass' //教师收益明细

import Address from '@/components/Address' //收货地址
import OpenCoursePayCenter from '@/components/OpenCoursePayCenter' //公开课购买

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [{
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/RegisterNew',
      name: 'RegisterNew',
      component: RegisterNew
    },
    {
      path: '/VerificationCode',
      name: 'VerificationCode',
      component: VerificationCode
    },
    {
      path: '/',
      name: 'main',
      component: main,
      children: [{
          path: '/index',
          name: 'index',
          component: home
        },
        {
          path: '/SetMeal',
          name: 'SetMeal',
          component: SetMeal
        },
        {
          path: '/PublicClass',
          name: 'PublicClass',
          component: PublicClass
        },
        {
          path: '/Library',
          name: 'Library',
          component: Library
        },
        {
          path: '/ClassQuality',
          name: 'ClassQuality',
          component: ClassQuality
        }
      ]
    },
    // 套餐详情
    {
      path: '/SetMealDetail/:pid',
      name: 'SetMealDetail',
      component: SetMealDetail
    },
    // 课程详情
    {
      path: '/ClassShare/:id',
      name: 'ClassShare',
      component: ClassShare
    },
    {
      path: '/InformationDetail/:id',
      name: 'InformationDetail',
      component: InformationDetail
    },
    {
      path: '/informationList',
      name: 'informationList',
      component: InformationList
    },
    {
      path: '/LibraryDetail/:id',
      name: 'LibraryDetail',
      component: LibraryDetail
    },
    {
      path: '/PayCenter/:type/:id',
      name: 'PayCenter',
      component: PayCenter
    },
    {
      path: '/PayOk/:id',
      name: 'PayOk',
      component: PayOk
    },
    {
      path: '/UserCenter/',
      name: 'UserCenter',
      component: UserCenter
    },
    {
      path: '/Message/',
      name: 'Message',
      component: Message
    },
    {
      path: '/MessageDetail/:read_id',
      name: 'MessageDetail',
      component: MessageDetail
    },
    {
      path: '/MyClass/',
      name: 'MyClass',
      component: MyClass
    },
    {
      path: '/MyClassDetail/:id',
      name: 'MyClassDetail',
      component: MyClassDetail
    },
    {
      path: '/MyGold/',
      name: 'MyGold',
      component: MyGold
    },
    {
      path: '/MyOrder/',
      name: 'MyOrder',
      component: MyOrder
    },
    {
      path: '/MyCollect/',
      name: 'MyCollect',
      component: MyCollect
    },
    {
      path: '/MyEarnings/',
      name: 'MyEarnings',
      component: MyEarnings
    },
    {
      path: '/MyGeneralize/',
      name: 'MyGeneralize',
      component: MyGeneralize
    },
    {
      path: '/EditInfo/',
      name: 'EditInfo',
      component: EditInfo
    },
    {
      path: '/MyPublicity/',
      name: 'MyPublicity',
      component: MyPublicity
    },
    {
      path: '/MySet/',
      name: 'MySet',
      component: MySet
    },
    {
      path: '/QualityCourseVideo/',
      name: 'QualityCourseVideo',
      component: QualityCourseVideo
    },
    {
      path: '/Address',
      name: 'Address',
      component: Address
    },
    {
      path: '/Notice/:id',
      name: 'Notice',
      component: Notice
    },
    // 市场专员-个人中心
    {
      path: '/MarketerCenter/',
      name: 'MarketerCenter',
      component: MarketerCenter
    },
    // 市场专员-收益
    {
      path: '/MarketEarnings/',
      name: 'MarketEarnings',
      component: MarketEarnings
    },
    // 市场专员-收益
    {
      path: '/MyFile/',
      name: 'MyFile',
      component: MyFile
    },
    // 市场专员-收益
    {
      path: '/MarketGeneralize/:month',
      name: 'MarketGeneralize',
      component: MarketGeneralize
    },
    // 市场专员-下级管理列表
    {
      path: '/SubordinateList/',
      name: 'SubordinateList',
      component: SubordinateList
    },
    // 市场专员-添加下级
    {
      path: '/AddSubordinate/',
      name: 'AddSubordinate',
      component: AddSubordinate
    },
    // 市场专员-修改下级
    {
      path: '/EditSubordinate/:id',
      name: 'EditSubordinate',
      component: EditSubordinate
    },
    // 教师端
    {
      path: '/TeacherCenter/',
      name: 'TeacherCenter',
      component: TeacherCenter
    },
    {
      path: '/TeacherEarnings/',
      name: 'TeacherEarnings',
      component: TeacherEarnings
    },
    {
      path: '/TeacherGeneralize/:month',
      name: 'TeacherGeneralize',
      component: TeacherGeneralize
    },
    {
      path: '/TeacherClass',
      name: 'TeacherClass',
      component: TeacherClass
    },



    {
      path: '/OpenCoursePayCenter/:id',
      name: 'OpenCoursePayCenter',
      component: OpenCoursePayCenter
    },
  ]
})

// 全局路由守卫
router.beforeEach((to, from, next) => {
  if (to.name === 'main') {
    router.push({
      name: 'index'
    })
    return false;
  }
  let isLogin = global.$cookies.get('isLogin'); // 是否登录
  // 已登录状态；当路由到login时，跳转至home
  if (to.name === 'Login' || to.name === 'Register') {
    if (isLogin) {
      router.push({
        name: 'index'
      });
      return false;
    }
  }
  // to: Route: 即将要进入的目标 路由对象
  // from: Route: 当前导航正要离开的路由
  // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
  // A跳转到B，B页面停留在A页面的滚动位置；解决方法：将scrollTop设置为0
  window.scroll(0, 0);
  // studentNextRoute: 设置学生角色需要路由守卫的路由集合
  const studentNextRoute = ['UserCenter', 'MyClass', 'MyClassDetail', 'MyGold', 'MyOrder', 'MyCollect', 'MyEarnings', 'MyGeneralize', 'PayCenter'];
  // teacherNextRoute: 设置教师角色需要路由守卫的路由集合
  const teacherNextRoute = ['TeacherCenter',  'TeacherEarnings', 'TeacherGeneralize']
  // marketerNextRoute: 设置市场角色需要路由守卫的路由集合
  const marketerNextRoute = ['MarketerCenter', 'MarketEarnings', 'SubordinateList', 'AddSubordinate', 'EditSubordinate']
  // 未登录状态；当路由到nextRoute指定页时，跳转至login
  let role = global.$cookies.get("access_role");
  if (studentNextRoute.includes(to.name) || teacherNextRoute.includes(to.name) || marketerNextRoute.includes(to.name)) {
    if (!isLogin) {
      router.push({
        name: 'Login'
      })
      return false;
    }
  }
  if (role) {
    if (role == 'student') {
      if (teacherNextRoute.includes(to.name) || marketerNextRoute.includes(to.name)) {
        router.push({
          name: 'index'
        });
        return false;
      }
    } else if (role == 'teacher') {
      if (studentNextRoute.includes(to.name) || marketerNextRoute.includes(to.name)) {
        router.push({
          name: 'TeacherCenter'
        });
        return false;
      }
    } else if (role.indexOf('marketer') > -1) {
      if (studentNextRoute.includes(to.name) || teacherNextRoute.includes(to.name)) {
        router.push({
          name: 'MarketerCenter'
        });
        return false;
      }
    } else if (studentNextRoute.includes(to.name) || teacherNextRoute.includes(to.name) || marketerNextRoute.includes(to.name)) {
      router.push({
        name: 'index'
      });
      return false;
    }
  } else if (teacherNextRoute.includes(to.name) || marketerNextRoute.includes(to.name)) {
    router.push({
      name: 'index'
    });
    return false;
  }
  next();
});

export default router;
