import {TEMPLATE_POST, TEMPLATE_GET, TEMPLATE_Form_POST} from './index'

const service = {
  publicClassService: {
    list: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('http://api.ql.com/course/open', data, resolve)
      })
    },
    check: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_Form_POST('http://api.ql.com/course/open-check', data, resolve)
      })
    },
    courseDetail: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('http://api.ql.com/course/open-detail', data, resolve)
      })
    }
  }
}

export default service
