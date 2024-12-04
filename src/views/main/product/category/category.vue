<template>
  <div class="category">
    <page-search
      :search-config="searchFormConfig"
      @query-click="handleQueryClick"
      @reset-click="handleResetClick"
    />
  </div>
</template>

<script setup lang="ts" name="category">
import pageSearch from '@/components/page-search/page-search.vue'
import { searchFormConfig } from './config/search.config'
import usePageContent from '@/hooks/usePageContent'

const { contentRef, handleQueryClick, handleResetClick } = usePageContent()
</script>

<style scoped>
.category {
}
</style>
