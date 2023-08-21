<template>
  <div class="user">
    <user-search @query-click="handleQueryClick" @reset-click="handleResetClick" />
    <user-content ref="contentRef" @new-click="handleNewClick" @edit-click="handleEtitClick" />
  </div>
</template>

<script setup lang="ts" name="user">
import UserSearch from './cpns/user-search.vue'
import UserContent from './cpns/user-content.vue'
import { ref } from 'vue'

const contentRef = ref<InstanceType<typeof UserContent>>()
function handleQueryClick(formData: any) {
  contentRef.value?.fetchUserListData(formData)
}
function handleResetClick() {
  contentRef.value?.fetchUserListData()
}

//modal
function handleNewClick() {}
function handleEtitClick() {}
</script>

<style scoped>
.user {
  border-radius: 8px;
  overflow: hidden;
}
</style>
