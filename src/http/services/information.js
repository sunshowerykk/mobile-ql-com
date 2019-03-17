import {TEMPLATE_POST, TEMPLATE_GET, TEMPLATE_Form_POST} from './index'

const service = {
  informationService: {
    list: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('http://api.ql.com//information/list', data, resolve)
      })
    },
    detail: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('http://api.ql.com//information/info', data, resolve)
      })
    },
  }
}

export default service