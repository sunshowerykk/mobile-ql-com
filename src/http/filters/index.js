import axios from 'axios'
import iView from 'iview'
import router from '../../router'
import store from '@/stores'
import VueCookies from 'vue-cookies'

let reqCount = 0
axios.defaults.timeout = 45000

axios.interceptors.request.use(
  config => {
    if (VueCookies.get('access_token')) {
      config.headers.Authorization = 'Bearer ' + VueCookies.get('access_token')
    }
    if (reqCount === 0) {
      iView.Spin.show()
    }
    reqCount++
    return config
  },
  error => {
    reqCount--
    if (reqCount === 0) {
      setTimeout(() => {
        iView.Spin.hide()
      }, 300)
    }
    return error // 返回接口返回的错误信息
  }
)

axios.interceptors.response.use(
  res => {
    return res
  },
  error => {
    return error
  }
)

export default axios
