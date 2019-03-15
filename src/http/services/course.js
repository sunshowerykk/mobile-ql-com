import {TEMPLATE_Form_POST, TEMPLATE_GET, TEMPLATE_POST} from './index'

const service_course = {
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
    },

    courseOrder: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/api/course/course-order', data, resolve)
      })
    },

    confirmOrder: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/api/order/confirm-order', data, resolve)
      })
    },

    bookOrder: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/api/order/book-order', data, resolve)
      })
    },


  }
}

export default service_course
