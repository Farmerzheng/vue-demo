// 暴露给用户使用，借此触发mutations中的方法，保存数据（可执行异步操作）
// mutation是存放处理数据的方法的集合
// 我们使用的时候需要commit。
// 但是commit是同步函数，而且只能是同步执行。
// 那我们想异步操作怎么办？
// 在actions中提交mutation，
// 并且可以包含任何的异步操作。
// actions可以理解为将mutations里面处里数据的方法变成可异步的方法，
// 简单的说就是异步操作数据

// import * as types from './mutation_types.js'

// 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation (commit)

// export const changePersonLater = function ({
//   commit
// }, person) {
// console.log('start change')
// setTimeout(function() {
//     console.log('3s later finish change')
//     commit(types.SET_NAME, person.name);
//     commit(types.SET_AGE, person.age);
// }, 3000);

// }

// [types.SET_PROVINCE] (state, province) {
//     state.province = province
//   },
//   [types.SET_STUDENTLIST] (state, list) {
//     state.studentList = list
//   },
//   [types.SET_SLIDEFLAG] (state, list) {
//     state.slideFlag = list
//   },
//   [types.SET_TEACHERGROUPLIST] (state, list) {
//     state.teacherGroupList = list
//   },
//   [types.SET_TEACHERNAME] (state, name) {
//     state.teacherName = name
//   }

// 触发保存菜单栏的路径方法
export const SET_PROVINCE = ({
  commit
}, payload) => {
  commit('SET_PROVINCE', payload)
}

// 触发获取当前点击的数据源方法
export const SET_SLIDEFLAG = ({
  commit
}, payload) => {
  commit('SET_SLIDEFLAG', payload)
}

// 触发获取当前点击的元数据方法
export const SET_TEACHERGROUPLIST = ({
  commit
}, payload) => {
  commit('SET_TEACHERGROUPLIST', payload)
}

// 触发获取所有数据源方法
export const saveDbSource = ({
  commit
}, payload) => {
  commit('saveDbSource', payload)
}

// 触发保存搜索后选择单条元数据方法
export const saveSelectJobMeta = ({
  commit
}, payload) => {
  commit('saveSelectJobMeta', payload)
}

// 触发保存搜索专题数据方法
export const saveSpecialSubject = ({
  commit
}, payload) => {
  commit('saveSpecialSubject', payload)
}

// 触发保存复制元数据方法
export const saveDuplicateJobMeta = ({
  commit
}, payload) => {
  commit('saveDuplicateJobMeta', payload)
}
