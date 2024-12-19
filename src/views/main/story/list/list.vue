<template>
  <div class="list">
    <page-search :search-config="searchFormConfig" />
    <page-content :content-config="contentTableConfig"></page-content>
  </div>
</template>

<script setup lang="ts" name="list">
import pageSearch from '@/components/page-search/page-search.vue'
import pageContent from '@/components/page-content/page-content.vue'

import usePageContent from '@/hooks/usePageContent'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'

const { handleQueryClick, handleResetClick } = usePageContent()
</script>

<style scoped>
.list {
}
</style>
