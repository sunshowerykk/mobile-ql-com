import request from '@/utils/request'

export const host = 'api.ql.com';

export function login(phone, password) {
  return request({
    url: 'user/login',
    method: 'post',
    data: {
      'phone': phone,
      'password': password
    }
  })
}
