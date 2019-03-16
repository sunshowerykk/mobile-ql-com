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
  }
}

export default service_user
