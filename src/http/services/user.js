import {TEMPLATE_POST, TEMPLATE_GET, TEMPLATE_Form_POST} from './index'

const service_user = {
  userService: {
    signIn: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_Form_POST('/user/login', data, resolve)
      })
    },
    isLogin: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/user/islogin', data, resolve)
      })
    },
    smsCode: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_Form_POST('/user/logincode', data, resolve)
      })
    },
    changePassword: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_Form_POST('/user/changepassword', data, resolve)
      })
    },

    incomeStatistics: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/personal/income-statistics', data, resolve)
      })
    },
    income: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/personal/income', data, resolve)
      })
    },
    incomeCheck: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/personal/income-check', data, resolve)
      })
    },
    incomeMonthCheck: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/personal/income-month-check', data, resolve)
      })
    },
    incomeMonth: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/personal/income-month', data, resolve)
      })
    },
    updateAlipay: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/personal/update-alipay', data, resolve)
      })
    },
    getAlipay: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/personal/get-alipay', data, resolve)
      })
    },
    register: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_Form_POST('/user/signup', data, resolve)
      })
    },
    changeSet: (data, token) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_Form_POST('/personal/change-set?access-token=' + token, data, resolve)
      })
    },
    getSet: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/personal/user-profile', data, resolve);
      })
    },
    getMessage: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/personal/message-list?access-token=' + data, '', resolve);
      })
    },
    getCollections: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/personal/collection-list?access-token=' + data, '', resolve);
      })
    },
    getDuration: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/personal/duration', data, resolve);
      })
    },
    getQrcode: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/personal/qrcode?access-token=' + data, '', resolve);
      })
    },
    getWxAccessToken: (data) => {
      return new Promise((resolve, reject) => {
        TRMPLATE_GET('https://qyapi.weixin.qq.com/cgi-bin/gettoken?corpid=id&corpsecret=secrect', data, resolve);
      })
    }
  }
}

export default service_user
