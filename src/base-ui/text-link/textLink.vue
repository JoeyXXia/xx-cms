<template>
  <div class="text-lin">
    <div class="item">
      <span>text-link</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  textArrs: {
    type: Array,
    default: () => []
  }
})
</script>

<style lang="less" scoped></style>
