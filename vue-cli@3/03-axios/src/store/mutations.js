// 保存所有方法，用来改变state的数据
// mutations：提交修改。也就是set、get中的set
// 第一个参数默认是state
// 外部调用方式：store.commit('SET_AGE', 18)

import * as types from './mutation_types.js'

export default {
  [types.SET_PROVINCE] (state, data) {
    state.province = data
  },
  [types.SET_STUDENTLIST] (state, data) {
    state.studentList = data
  },
  [types.SET_SLIDEFLAG] (state, data) {
    state.slideFlag = data
  },
  [types.SET_PERSON] (state, data) {
    state.person = data
  }
}
