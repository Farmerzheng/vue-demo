<template>
  <!-- <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div> -->
  <div id="app">
    <!-- 头部区域 -->
    <!-- <el-row class="header">
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">后台管理系统</div>
      </el-col>
    </el-row> -->
    <!-- 中间主体区域 -->
    <!-- <div class="main"> -->
    <!-- 左侧菜单栏 -->
    <!-- <div class="content left">
        <ul>
          <li><router-link to="/users">用户管理</router-link></li>
          <li><router-link to="/rights">权限管理</router-link></li>
          <li><router-link to="/goods">商品管理</router-link></li>
          <li><router-link to="/orders">订单管理</router-link></li>
          <li><router-link to="/settings">系统设置</router-link></li>
        </ul>
      </div> -->
    <!-- 右侧内容区域 -->
    <!-- <div class="content right">
        <div class="main-content">
          <router-view />
        </div>
      </div>
    </div> -->
    <!-- 尾部区域 -->
    <!-- <el-row class="footer">
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">版权信息</div>
      </el-col>
    </el-row> -->
    <el-container style="height: 100vh; border: 1px solid #eee">
      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
        </el-header>
        <el-container>
          <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
            <el-menu>
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-message"></i>导航一
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1">
                    <router-link to="/users">选项一</router-link>
                  </el-menu-item>
                  <el-menu-item index="1-2">
                    <router-link to="/goods">选项二</router-link>
                  </el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-message"></i>导航二
                </template>
                <el-menu-item-group>
                  <el-menu-item index="2-1">
                    <router-link to="/orders">选项一</router-link>
                  </el-menu-item>
                  <el-menu-item index="2-2">
                    <router-link to="/rights">选项二</router-link>
                  </el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </el-aside>
          <el-main>
            <router-view />
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  data () {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }
    return {
      tableData: Array(20).fill(item)
    }
  }
}
</script>

<style lang='less' scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
  height: 100%;
}
// .header,
// .footer {
//   background-color: @color;
// }
// .header {
//   height: 50px;
//   background-color: #545c64;
//   line-height: 50px;
//   text-align: center;
//   font-size: 24px;
//   color: #fff;
// }
// .footer {
//   height: 40px;
//   line-height: 40px;
//   background-color: #888;
//   position: absolute;
//   bottom: 0;
//   width: 100%;
//   text-align: center;
//   color: #fff;
// }
// .main {
//   display: flex;
//   position: absolute;
//   top: 50px;
//   bottom: 40px;
//   width: 100%;
// }
// .content {
//   flex: 1;
//   text-align: center;
//   // height: 100%;
// }
// .left {
//   flex: 0 0 20%;
//   background-color: #545c64;
// }
// .left a {
//   color: white;
//   text-decoration: none;
// }
// .right {
//   margin: 5px;
// }
// .btns {
//   width: 100%;
//   height: 35px;
//   line-height: 35px;
//   background-color: #f5f5f5;
//   text-align: left;
//   padding-left: 10px;
//   box-sizing: border-box;
// }
// button {
//   height: 30px;
//   background-color: #ecf5ff;
//   border: 1px solid lightskyblue;
//   font-size: 12px;
//   padding: 0 20px;
// }
// .main-content {
//   margin-top: 10px;
// }
// ul {
//   margin: 0;
//   padding: 0;
//   list-style: none;
// }
// ul li {
//   height: 45px;
//   line-height: 45px;
//   background-color: #a0a0a0;
//   color: #fff;
//   cursor: pointer;
//   border-bottom: 1px solid #fff;
// }

// table {
//   width: 100%;
//   border-collapse: collapse;
// }

// td,
// th {
//   border: 1px solid #eee;
//   line-height: 35px;
//   font-size: 12px;
// }

// th {
//   background-color: #ddd;
// }
</style>
