import {TEMPLATE_Form_POST, TEMPLATE_GET} from './index'

const service = {
  courseService: {
    courseList: ({}) => {
      return new Promise((resolve, data, reject) => {
        TEMPLATE_GET('http://api.ql.com/course/list', data, resolve)
      })
    },

    courseShare: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('http://api.ql.com/course/detail', data, resolve)
      })
    }
  }
}

export default service
