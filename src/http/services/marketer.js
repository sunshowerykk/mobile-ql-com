import { TEMPLATE_POST, TEMPLATE_GET, TEMPLATE_Form_POST } from './index'

const service_marketer = {
  marketerService: {
    income: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/market/income', data, resolve)
      })
    },

    monthIncome: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/market/month-income', data, resolve)
      })
    },

    addSubordinate: (data, token) => {
      console.log(data)
      return new Promise((resolve, reject) => {
        TEMPLATE_Form_POST('/market/add-marketer?access-token='+token, data, resolve)
      })
    }
  }
}

export default service_marketer
