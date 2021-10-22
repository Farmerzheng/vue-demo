// 也就是set、get中的get，
// 有一个参数state。
// 外部调用方式：store.getters.name()

export const province = (state) => {
    return state.province
}
export const studentList = (state) => {
    return state.studentList
}
export const slideFlag = (state) => {
    return state.slideFlag
}
export const teacherGroupList = (state) => {
    return state.teacherGroupList
}
export const teacherName = (state) => {
    return state.teacherName
}