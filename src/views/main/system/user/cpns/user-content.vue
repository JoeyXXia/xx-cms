<template>
  <div class="content">
    <div class="header">
      <h3 class="title">用户列表</h3>
      <el-button type="primary">新建用户</el-button>
    </div>
    <div class="table">
      <el-table style="width: 100%" border>
        <el-table-column align="center" type="selection" width="60px" />
        <el-table-column align="center" type="index" label="序号" width="60px" />
        <el-table-column align="center" prop="name" label="用户名" width="150px" />
        <el-table-column align="center" prop="realname" label="真实姓名" width="150px" />
        <el-table-column align="center" prop="cellphone" label="手机号码" width="150px" />
        <el-table-column align="center" prop="enable" label="状态" width="100px"> </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped></style>
