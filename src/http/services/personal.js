import {TEMPLATE_Form_POST, TEMPLATE_GET, TEMPLATE_POST} from './index'

const service = {
  personalService: {
    courseList: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/personal/course-list', data, resolve)
      })
    },

      courseVideo: (data) => {
        return new Promise((resolve, reject) => {
          TEMPLATE_GET('/course/course-video', data, resolve)
        })
      },

    courseHomework: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/personal/course-homework', data, resolve)
      })
    },

    courseTestList: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/personal/test-list', data, resolve)
      })
    },

    goldInfo: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/personal/gold-info', data, resolve)
      })
    },

    orderList: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/personal/order-list', data, resolve)
      })
    },

    collectionCourse: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/personal/collection-course', data, resolve)
      })
    },

    updateAddress: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/personal/update-address', data, resolve)
      })
    },


  }
}

export default service
