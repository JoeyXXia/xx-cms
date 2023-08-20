<template>
  <div class="user">
    <user-search />
  </div>
</template>

<script setup lang="ts" name="user">
import UserSearch from './cpns/user-search.vue'
</script>

<style scoped>
.user {
  border-radius: 8px;
  overflow: hidden;
}
</style>
