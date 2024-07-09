<template>
  <div class="xx-code">
    <span> code</span>
  </div>
</template>

<script setup lang="ts">
defineProps({
  language: {
    type: String,
    default: 'html'
  },
  code: {
    type: String,
    default: ''
  }
})
</script>

<style lang="less" scoped></style>
