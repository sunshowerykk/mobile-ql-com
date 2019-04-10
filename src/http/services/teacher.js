import { TEMPLATE_POST, TEMPLATE_GET, TEMPLATE_Form_POST } from './index'

const service_teacher = {
  teacherService: {
    income: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/teacher/income', data, resolve)
      })
    },
  }
}

export default service_teacher
