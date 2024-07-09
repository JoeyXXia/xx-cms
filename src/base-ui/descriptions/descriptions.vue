<template>
  <div class="description">
    <el-descriptions title="User Info">
      <el-descriptions-item label="Place">description</el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: ''
  },
  column: {
    type: Number,
    default: 1
  },
  tableDatas: {
    type: Array,
    default: () => []
  }
})
</script>

<style lang="less" scoped></style>
