import Vue from 'vue'
import { Row, Button, Select, Col, Container, Aside, Menu, Submenu, MenuItemGroup, MenuItem, Header, Dropdown, DropdownMenu, DropdownItem, Main, Table, TableColumn } from 'element-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import less from 'less'

// 挂载element-ui 组件
Vue.component(Button.name, Button)
Vue.component(Select.name, Select)
Vue.component(Col.name, Col)
Vue.component(Row.name, Row)
Vue.component(Container.name, Container)
Vue.component(Aside.name, Aside)
Vue.component(Menu.name, Menu)
Vue.component(Submenu.name, Submenu)
Vue.component(MenuItemGroup.name, MenuItemGroup)
Vue.component(MenuItem.name, MenuItem)
Vue.component(Header.name, Header)
Vue.component(Dropdown.name, Dropdown)
Vue.component(DropdownMenu.name, DropdownMenu)
Vue.component(DropdownItem.name, DropdownItem)
Vue.component(Main.name, Main)
Vue.component(Table.name, Table)
Vue.component(TableColumn.name, TableColumn)

Vue.use(less)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
