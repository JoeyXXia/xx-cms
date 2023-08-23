<template>
  <div class="user">
    <department-search @query-click="handleQueryClick" @reset-click="handleResetClick" />
    <department-content
      ref="contentRef"
      @new-click="handleNewClick"
      @edit-click="handleEtitClick"
    />
    <department-modal ref="modalRef" />
  </div>
</template>

<script setup lang="ts" name="user">
import DepartmentSearch from './cpns/department-search.vue'
import DepartmentContent from './cpns/department-content.vue'
import DepartmentModal from './cpns/department-modal.vue'
import { ref } from 'vue'

const contentRef = ref<InstanceType<typeof DepartmentContent>>()
function handleQueryClick(formData: any) {
  contentRef.value?.fetchPageListData(formData)
}
function handleResetClick() {
  contentRef.value?.fetchPageListData()
}

// modal
const modalRef = ref<InstanceType<typeof DepartmentModal>>()

function handleNewClick() {
  modalRef.value?.setModalVisaible()
}
function handleEtitClick(itemData: any) {
  modalRef.value?.setModalVisaible(false, itemData)
}
</script>

<style scoped>
.user {
  border-radius: 8px;
  overflow: hidden;
}
</style>
