import {TEMPLATE_Form_POST, TEMPLATE_GET, TEMPLATE_POST} from './index'

const service_course = {
  courseService: {
    courseList: ({}) => {
      return new Promise((resolve, data, reject) => {
        TEMPLATE_GET('/course/list', data, resolve)
      })
    },

    courseShare: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/course/detail', data, resolve)
      })
    },

    courseVideo: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/course/course-video', data, resolve)
      })
    },

    courseOrder: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/course/course-order', data, resolve)
      })
    },

    packageOrder: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/course/package-order', data, resolve)
      })
    },

    confirmOrder: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/order/confirm-order', data, resolve)
      })
    },
    confirmPay: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/order/pay', data, resolve)
      })
    },
    bookOrder: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/order/book-order', data, resolve)
      })
    },

    check: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/course/check', data, resolve)
      })
    },
  },
}

export default service_course
