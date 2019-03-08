import {TEMPLATE_POST, TEMPLATE_GET, TEMPLATE_Form_POST} from './index'

const service = {
  userService: {
    signIn: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_Form_POST('http://api.ql.com/user/login', data, resolve)
      })
    }
  }
}

export default service
