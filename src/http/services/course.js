import {TEMPLATE_Form_POST, TEMPLATE_GET} from './index'

const service = {
  courseService: {
    courseList: ({}) => {
      return new Promise((resolve, data, reject) => {
        TEMPLATE_GET('/api/course/list', data, resolve)
      })
    },

    courseShare: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/api/course/detail', data, resolve)
      })
    },

    courseVideo: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/api/course/course-video', data, resolve)
      })
    }
  }
}

export default service
