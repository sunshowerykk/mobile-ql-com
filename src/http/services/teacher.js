import { TEMPLATE_POST, TEMPLATE_GET, TEMPLATE_Form_POST } from './index'

const service_teacher = {
  teacherService: {
    income: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/teacher/income', data, resolve)
      })
    },
    monthIncome: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/teacher/month-income', data, resolve)
      })
    },
    selectMonthIncome: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/teacher/select-month-income', data, resolve)
      })
    },
    incomeDetail: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/teacher/income-detail', data, resolve)
      })
    },
    selectIncomeDetail: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/teacher/select-income-detail', data, resolve)
      })
    },
    getTeacherClass: (data) => {
      return new Promise((resolve, reject) => {
        TEMPLATE_GET('/teacher/teacher-class', data, resolve)
      })
    },
  }
}

export default service_teacher
