import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// 引入element-UI组件
import { Button, Select } from 'element-ui'

const app = createApp(App)

// 挂在路由
app.use(router)

//传入一个全局配置对象。该对象目前支持 size 与 zIndex 字段。size 用于改变组件的默认尺寸，zIndex 设置弹框的初始 z-index（默认值：2000）
// app.use(Element, { size: 'small', zIndex: 3000 });


app.component(Button.name, Button);
app.component(Select.name, Select);

app.mount('#app')