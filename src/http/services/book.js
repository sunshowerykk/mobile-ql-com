import {TEMPLATE_POST, TEMPLATE_GET, TEMPLATE_Form_POST} from './index'

const service = {
  bookService: {
    list: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/api/book/list', data, resolve)
      })
    },
    detail: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/api/book/detail', data, resolve)
      })
    },
    order: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_Form_POST('/api/book/order', data, resolve)
      })
    },
    info: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/api/personal/user-profile', data, resolve)
      })
    },
  }
}

export default service
