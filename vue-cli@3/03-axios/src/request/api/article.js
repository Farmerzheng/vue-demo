/**
 * article模块接口列表
 */

import base from '../base' // 导入接口域名列表
import axios from 'axios' // 导入http中创建的axios实例
// import qs from 'qs' // 根据需求是否导入qs模块

const article = {
  // 新闻列表
  articleList: (param) => {
    console.log(`${base.sq}/comment/music`, param)
    return axios.get(`${base.sq}/comment/music`, { params: param })
  },
  // 新闻详情,演示
  articleDetail: (id, param) => {
    return axios.get(`${base.sq}/topic/${id}`, {
      params: param
    })
  },
  // post提交
  login: (params) => {
    return axios.post(`${base.sq}/accesstoken`, params)
  }
  // 其他接口…………
}

export default article
