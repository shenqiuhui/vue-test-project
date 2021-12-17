<template>
  <el-container>
    <el-header>
      <el-menu
        :default-active="1"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#ffffff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1">
          处理中心
        </el-menu-item>
        <el-submenu index="2">
          <template v-slot:title>我的工作台</template>
          <el-menu-item index="2-1">选项一</el-menu-item>
          <el-menu-item index="2-2">选项二</el-menu-item>
          <el-menu-item index="2-3">选项三</el-menu-item>
          <el-submenu index="2-4">
            <template v-slot:title>选项四</template>
            <el-menu-item index="2-4-1">二级选项一</el-menu-item>
            <el-menu-item index="2-4-2">二级选项二</el-menu-item>
            <el-menu-item index="2-4-3">二级选项三</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3">
          消息中心
        </el-menu-item>
        <el-menu-item index="4">
          <a href="https://element3-ui.com" target="_blank">
            订单管理
          </a>
        </el-menu-item>
      </el-menu>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <div>
          <router-link to="/">首页</router-link>
        </div>
        <div>
          <router-link to="/about">关于</router-link>
        </div>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333333;
  text-align: center;
}

.el-aside {
  background-color: #d3dce6;
  color: #333333;
}

.el-main {
  background-color: #e9eef3;
  color: #333333;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>
