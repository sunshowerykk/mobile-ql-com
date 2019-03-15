import {TEMPLATE_POST, TEMPLATE_GET, TEMPLATE_Form_POST} from './index'

const service_user = {
  userService: {
    signIn: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_Form_POST('/api/user/login', data, resolve)
      })
    },

    isLogin:(data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/api/user/islogin', data, resolve)
      })
    },
  }
}

export default service_user
