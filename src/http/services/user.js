import {TEMPLATE_POST, TEMPLATE_GET, TEMPLATE_Form_POST} from './index'

const service_user = {
  userService: {
    signIn: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_Form_POST('/api/user/login', data, resolve)
      })
    },
    isLogin:(data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/api/user/islogin', data, resolve)
      })
    },
    smsCode:(data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_Form_POST('http://api.ql.com/user/logincode', data, resolve)
      }) 
    },
    changePassword:(data) =>{
      return new Promise((resolve, reject) => {
        TEMPLATE_Form_POST('http://api.ql.com/user/changepassword', data, resolve)
      }) 
    }
  },
  personalService: {
    incomeStatistics: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/api/personal//income-statistics', data, resolve)
      })
    },
    income: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/api/personal//income', data, resolve)
      })
    },
    incomeCheck: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/api/personal//income-check', data, resolve)
      })
    },
    incomeMonthCheck: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/api/personal//income-month-check', data, resolve)
      })
    },
    incomeMonth: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/api/personal//income-month', data, resolve)
      })
    },
    updateAlipay: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/api/personal//update-alipay', data, resolve)
      })
    },
    getAlipay: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/api/personal//get-alipay', data, resolve)
      })
    },
    register:(data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_Form_POST('http://api.ql.com/user/signup', data, resolve)
      }) 
    },
    changeSet:(data, token) =>{
      return new Promise((resolve, reject) => {
        TEMPLATE_Form_POST('http://api.ql.com/personal/change-set?access-token=' + token, data, resolve)
      }) 
    },
    getSet:(data) =>{
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('http://api.ql.com/personal/user-profile?access-token=' + data, '', resolve);
      }) 
    },
    getMessage:(data) =>{
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('http://api.ql.com/personal/message-list?access-token=' + data, '', resolve);
      }) 
    },
    getCollections:(data) =>{
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('http://api.ql.com/personal/collection-list?access-token=' + data, '', resolve);
      }) 
    },
    getDuration:(data) =>{
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('http://api.ql.com/personal/duration?access-token=' + data, '', resolve);
      }) 
    },
    getQrcode:(data) =>{
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('http://api.ql.com/personal/qrcode?access-token=' + data, '', resolve);
      }) 
    },
    getWxAccessToken:(data) =>{
      return new Promise((resolve, reject) => {
        TRMPLATE_GET('https://qyapi.weixin.qq.com/cgi-bin/gettoken?corpid=id&corpsecret=secrect',data,resolve);
      })
    },
  }
}

export default service_user
