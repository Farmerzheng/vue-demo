// 暴露给用户使用，借此触发mutations中的方法，保存数据（可执行异步操作）
// mutation是存放处理数据的方法的集合
// 我们使用的时候需要commit。
// 但是commit是同步函数，而且只能是同步执行。
// 那我们想异步操作怎么办？
// 在actions中提交mutation，
// 并且可以包含任何的异步操作。
// actions可以理解为将mutations里面处里数据的方法变成可异步的方法，
// 简单的说就是异步操作数据

import * as types from './mutation_types.js'

// 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation (commit)

// export const changePersonLater = function ({
//   commit
// }, person) {
//   console.log('start change')
//   setTimeout(function () {
//     console.log('3s later finish change')
//     commit(types.SET_NAME, person.name)
//     commit(types.SET_AGE, person.age)
//   }, 3000)
// }

// 改变省份
export const changeProvince = ({
  commit
}, payload) => {
  commit(types.SET_PROVINCE, payload)
}

export const changeStudentList = ({
  commit
}, payload) => {
  commit(types.SET_STUDENTLIST, payload)
}

export const changeSlideFlag = ({
  commit
}, payload) => {
  commit(types.SET_SLIDEFLAG, payload)
}

export const changePerson = ({
  commit
}, payload) => {
  commit(types.SET_PERSON, payload)
}
