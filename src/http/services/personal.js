import {TEMPLATE_Form_POST, TEMPLATE_GET, TEMPLATE_POST} from './index'

const service = {
  personalService: {
    courseList: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/api/personal/course-list', data, resolve)
      })
    },

      courseVideo: (data) => {
        return new Promise((resolve, reject) => {
          TEMPLATE_GET('/api/course/course-video', data, resolve)
        })
      },

  }
}

export default service
