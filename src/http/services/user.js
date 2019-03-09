import {TEMPLATE_POST, TEMPLATE_GET, TEMPLATE_Form_POST} from './index'

const service = {
  userService: {
    signIn: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_Form_POST('http://api.ql.com/user/login', data, resolve)
      })
    },
    register:(data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_Form_POST('http://api.ql.com/user/signup', data, resolve)
      }) 
    },
    smsCode:(data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_Form_POST('http://api.ql.com/user/logincode', data, resolve)
      }) 
    },
    changePassword:(data) =>{
      return new Promise((resolve, reject) => {
        TEMPLATE_Form_POST('http://api.ql.com/user/changepassword', data, resolve)
      }) 
    },
    changeSet:(data) =>{
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('http://api.ql.com/user/', data, resolve);
        TEMPLATE_GET('http://api.ql.com/user/', data, resolve);
        TEMPLATE_GET('http://api.ql.com/user/', data, resolve);
        TEMPLATE_GET('http://api.ql.com/user/', data, resolve);
      }) 
    },
    getSet:(data) =>{
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('http://api.ql.com/personal/user-profile/', data, resolve);
      }) 
    }
  }
}

export default service
