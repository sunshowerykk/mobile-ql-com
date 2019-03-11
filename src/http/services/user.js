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
    changeSet:(data, token) =>{
      return new Promise((resolve, reject) => {
        TEMPLATE_Form_POST('http://api.ql.com/personal/change-set?access-token=' + token, data, resolve)
      }) 
    },
    getSet:(data) =>{
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('http://api.ql.com/personal/user-profile?access-token=' + data, '', resolve);
      }) 
    },
    getMessage:(data) =>{
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('http://api.ql.com/personal/message-list?access-token=' + data, '', resolve);
      }) 
    },
    getCollections:(data) =>{
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('http://api.ql.com/personal/collection-list?access-token=' + data, '', resolve);
      }) 
    },
  }
}

export default service
