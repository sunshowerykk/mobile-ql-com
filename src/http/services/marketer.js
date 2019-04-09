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

    selectMonthIncome: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/market/select-month-income', data, resolve)
      })
    },

    addSubordinate: (data, token) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_Form_POST('/market/add-marketer?access-token='+token, data, resolve)
      })
    },
    subordinateList: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/market/marketer-list', data, resolve)
      })
    },
    getMarketer: (data)  => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/market/marketer-one', data, resolve)
      })
    },
    updateMarketer: (token, data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_Form_POST('/market/update-marketer?access-token='+token, data, resolve)
      })
    },
    delSubordinate: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/market/del-subordinate', data, resolve)
      })
    },
    directIncome: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/market/direct-income', data, resolve)
      })
    },

    monthDirectIncome: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/market/month-direct-income', data, resolve)
      })
    },

    indirectIncome: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/market/indirect-income', data, resolve)
      })
    },

    monthIndirectIncome: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/market/month-indirect-income', data, resolve)
      })
    },

    withdrawConfirm: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/withdraw/withdraw-confirm', data, resolve)
      })
    },

  }
}

export default service_marketer
