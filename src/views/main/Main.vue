<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header height="50px">Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.main {
  height: 100%;
}

.main-content {
  height: 100%;

  .el-aside {
    background-color: red;
  }

  .el-main {
    background-color: green;
  }
}
</style>
