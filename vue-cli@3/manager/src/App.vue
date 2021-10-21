<template>
  <div id="app">
    <!-- 头部区域 -->
    <header class="header">后台管理系统</header>
    <!-- 中间主体区域 -->
    <div class="main">
      <!-- 左侧菜单栏 -->
      <div class="content left">
        <ul>
          <li><router-link to="/users">用户管理</router-link></li>
          <li><router-link to="/rights">权限管理</router-link></li>
          <li><router-link to="/goods">商品管理</router-link></li>
          <li><router-link to="/orders">订单管理</router-link></li>
          <li><router-link to="/settings">系统设置</router-link></li>
        </ul>
      </div>
      <!-- 右侧内容区域 -->
      <div class="content right">
        <div class="main-content">
          <router-view />
        </div>
      </div>
    </div>
    <!-- 尾部区域 -->
    <footer class="footer">版权信息</footer>
  </div>
</template>

<script>


export default {
  name: "app",
  components: {

  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
