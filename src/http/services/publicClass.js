import {TEMPLATE_POST, TEMPLATE_GET, TEMPLATE_Form_POST} from './index'

const service = {
  publicClassService: {
    list: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/api/course/open', data, resolve)
      })
    },
    check: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_Form_POST('/api/course/open-check', data, resolve)
      })
    },
    courseDetail: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/api/course/open-detail', data, resolve)
      })
    }
  }
}

export default service
