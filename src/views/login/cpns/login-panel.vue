<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>

    <div class="tabs">
      <el-tabs type="border-card" stretch v-model="activeName">
        <el-tab-pane label="账号" name="account">
          <template #label>
            <div class="label">
              <el-icon><UserFilled /></el-icon>
              <span class="text">账号登陆</span>
            </div>
          </template>
          <panel-account />
        </el-tab-pane>
        <el-tab-pane label="手机" name="name">
          <template #label>
            <div class="label">
              <el-icon><Cellphone /></el-icon>
              <span class="text">手机登录</span>
            </div>
          </template>
          <panel-phone />
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="controls">
      <el-checkbox label="记住密码" size="large" />
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary">Primary</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PanelAccount from './panel-account.vue'
import PanelPhone from './panel-phone.vue'

const activeName = ref('account')
</script>

<style lang="less" scoped>
.login-panel {
  width: 330px;
  margin-bottom: 150px;

  .title {
    text-align: center;
    margin-bottom: 15px;
  }
}
</style>
