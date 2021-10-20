import Vue from 'vue'
import { Row,Button, Select } from 'element-ui';
import App from './App.vue'

//在引入 Element 时，可以传入一个全局配置对象。该对象目前支持 size 与 zIndex 字段。size 用于改变组件的默认尺寸，zIndex 设置弹框的初始 z-index（默认值：2000）
Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };

Vue.config.productionTip = false
// 挂在element-ui 组件
 Vue.use(Button)
 Vue.use(Select)
 Vue.use(Row)
new Vue({
  render: h => h(App),
}).$mount('#app')
