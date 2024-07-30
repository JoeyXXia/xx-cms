<template>
  <div class="statistical">
    <div class="header">
      <span>{{ panelData.title }}</span>
      <el-tooltip content="Top center" placement="top">
        <el-icon><Warning /></el-icon>
      </el-tooltip>
    </div>
    <div class="content"></div>
    <div class="footer"></div>
  </div>
</template>

<script setup lang="ts">
import CountUp from '@/base-ui/count-up/countup.vue'

defineProps({
  panelData: {
    type: Object,
    default: function () {
      return {}
    }
  }
})
</script>

<style lang="less" scoped></style>
