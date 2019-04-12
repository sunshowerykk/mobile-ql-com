import { TEMPLATE_POST, TEMPLATE_GET, TEMPLATE_Form_POST } from './index'

const service_message = {
  messageService: {
    messageDetail: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/personal/message-view', data, resolve)
      })
    },
  }
}

export default service_message
