import http from 'axios'
import qs from 'qs'

export const TEMPLATE_GET = (str, data, resolve) => {
  http.get(str, {
    params: data || {}
  }).then(res => {
    if (res.status === 200) {
      resolve(res)
    } else {
      resolve(res.data || {
        status: 1,
        msg: '请求失败'
      })
    }
  })
}

const TEMPLATE_DELETE = (str, data, resolve) => {
  http.get(str, {
    params: data || {}
  }).then(res => {
    if (res.status === 200) {
      resolve(res)
    } else {
      resolve(res.data || {
        status: 1,
        msg: '请求失败'
      })
    }
  })
}

export const TEMPLATE_Form_POST = (str, data, resolve) => {
  http.post(str, qs.stringify(data), {headers: {'Content-Type':'application/x-www-form-urlencoded'}}).then(res => {
    if (res.status === 200) {
      resolve(res)
    } else {
      resolve(res.data || {
        status: 1,
        msg: '请求失败'
      })
    }
  })
}

export const TEMPLATE_POST = (str, data, resolve) => {
  http.post(str, data).then(res => {
    if (res.status === 200) {
      resolve(res)
    } else {
      resolve(res.data || {
        status: 1,
        msg: '请求失败'
      })
    }
  })
}

export const TEMPLATE_PUT = (str, data, resolve) => {
  http.put(str, data).then(res => {
    if (res.status === 200) {
      resolve(res)
    } else {
      resolve(res.data || {
        status: 1,
        msg: '请求失败'
      })
    }
  })
}

const service = {
  homeService: {
    getHomeData: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/api/site/index', data, resolve)
      })
    },
  }
}

export default service
