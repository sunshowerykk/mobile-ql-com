import {TEMPLATE_Form_POST, TEMPLATE_GET, TEMPLATE_POST} from './index'

const service_course = {
  courseService: {
    courseList: (data) => {
      return new Promise((resolve, reject) => {
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
    getAppid: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/h5order/get-appid', data, resolve)
      })
    },
    confirmOrder: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/order/confirm-order', data, resolve)
      })
    },
    confirmPay: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/h5order/get-js-api-param', data, resolve)
      })
    },
    wxcheckorder: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/h5order/wxcheckorder', data, resolve)
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
