<template>
  <div class="home">
    <el-row>
      <el-col>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="skyblue"
        >
          <el-menu-item index="1">
            <i class="el-icon-s-home"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-s-order"></i>
              <span>订单管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">备餐配餐</el-menu-item>
              <el-menu-item index="2-2">历史订单</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-s-cooperation"></i>
              <span>商品管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1">上架下架</el-menu-item>
              <el-menu-item index="3-2">商品管理</el-menu-item>
              <el-menu-item index="3-2">分类管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-s-tools"></i>
              <span>系统管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="4-1">用户管理</el-menu-item>
              <el-menu-item index="4-2">角色管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
};
</script>
<style lang="scss" scoped>
.home {
  margin: -10px 0 0 -10px;
  .el-menu-vertical-demo {
    width: 202px;
    height: 100vh;
  }
}
</style>