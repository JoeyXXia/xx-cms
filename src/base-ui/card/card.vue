<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>card</span>
      </div>
    </template>
    <div class="item">
      <slot></slot>
    </div>
  </el-card>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: 'Title'
  }
})
</script>

<style lang="less" scoped></style>
