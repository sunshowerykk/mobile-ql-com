import { TEMPLATE_POST, TEMPLATE_GET, TEMPLATE_Form_POST } from './index'

const service_withdraw = {
  withdrawService: {
    withdrawConfirm: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/withdraw/withdraw-confirm', data, resolve)
      })
    },
  }
}

export default service_withdraw
