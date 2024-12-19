<template>
  <div class="category">
    <page-search
      :search-config="searchFormConfig"
      @query-click="handleQueryClick"
      @reset-click="handleResetClick"
    />
    <page-content ref="pageContentRef" :contentConfig="contentTableConfig"></page-content>
  </div>
</template>

<script setup lang="ts" name="category">
import pageSearch from '@/components/page-search/page-search.vue'
import PageContent from '@/components/page-content/page-content.vue'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'

import usePageContent from '@/hooks/usePageContent'

const { contentRef, handleQueryClick, handleResetClick } = usePageContent()
</script>

<style scoped>
.category {
}
</style>
