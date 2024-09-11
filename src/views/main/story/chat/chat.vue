<template>
  <div class="chat">
    <xx-editor v-model:value="htmlString" />
  </div>
</template>

<script setup lang="ts" name="chat">
import XxEditor from '@/base-ui/editor/editor.vue'
import { ref } from 'vue'
const htmlString = ref<string>('joeyxia')
</script>

<style scoped>
.chat {
}
</style>
