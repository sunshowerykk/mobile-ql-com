import {TEMPLATE_Form_POST, TEMPLATE_GET, TEMPLATE_POST} from './index'

const service = {
  packageService: {
    packageList: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/package/list', data, resolve)
      })
    },

    packageDetail: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/package/detail', data, resolve)
      })
    }

  }
}

export default service
