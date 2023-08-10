import { LOGIN_TOKEN } from '../../global/constants';
<template>
  <div class="main-menu">
    <div class="logo">
      <img class="img" src="@/assets/img/logo.svg" alt="" />
      <h2 class="title">XX管理系统</h2>
    </div>
    <div class="menu">
      <el-menu
        active-text-color="#fff"
        background-color="#001529"
        default-active="3"
        text-color="#b7bdc3"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Navigator One</span>
          </template>
          <el-menu-item>
            <span>Navigator Two</span>
          </el-menu-item>
          <el-menu-item>
            <span>Navigator Two</span>
          </el-menu-item>
          <el-menu-item>
            <span>Navigator Two</span>
          </el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Navigator One</span>
          </template>
          <el-menu-item>
            <span>Navigator Two</span>
          </el-menu-item>
          <el-menu-item>
            <span>Navigator Two</span>
          </el-menu-item>
          <el-menu-item>
            <span>Navigator Two</span>
          </el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Navigator One</span>
          </template>
          <el-menu-item>
            <span>Navigator Two</span>
          </el-menu-item>
          <el-menu-item>
            <span>Navigator Two</span>
          </el-menu-item>
          <el-menu-item>
            <span>Navigator Two</span>
          </el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Navigator One</span>
          </template>
          <el-menu-item>
            <span>Navigator Two</span>
          </el-menu-item>
          <el-menu-item>
            <span>Navigator Two</span>
          </el-menu-item>
          <el-menu-item>
            <span>Navigator Two</span>
          </el-menu-item>
        </el-sub-menu>
      </el-menu>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.main-menu {
  height: 100%;
  background-color: #001529;
}
.logo {
  display: flex;
  height: 28px;
  padding: 12px 10px 8px 10px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;

  .img {
    height: 100%;
    margin: 0 10px;
  }

  .title {
    font-size: 16px;
    font-weight: 700;
    color: white;
    white-space: nowrap;
  }
}

.el-menu {
  border-right: none;
  user-select: none;
}

.el-sub-menu {
  .el-menu-item {
    padding-left: 50px !important;
    background-color: #0c2135;
  }
  .el-menu-item:hover {
    color: #fff;
  }
  .el-menu-item.is-active {
    background-color: #0a60bd;
  }
}
</style>
