import {TEMPLATE_POST, TEMPLATE_GET, TEMPLATE_Form_POST} from './index'

const service = {
  bookService: {
    list: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('http://api.ql.com/book/list', data, resolve)
      })
    },
    detail: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('http://api.ql.com/book/detail', data, resolve)
      })
    },
    order: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_Form_POST('http://api.ql.com/book/order', data, resolve)
      })
    },
    info: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('http://api.ql.com/personal/user-profile', data, resolve)
      })
    },
  }
}

export default service
