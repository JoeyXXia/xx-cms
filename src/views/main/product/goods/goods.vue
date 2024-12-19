<template>
  <div class="goods">
    <page-search
      :search-config="searchFormConfig"
      @query-click="handleQueryClick"
      @reset-click="handleResetClick"
    />

    <page-content ref="pageContentRef" :content-config="contentTableConfig"></page-content>
  </div>
</template>

<script setup lang="ts" name="goods">
import pageSearch from '@/components/page-search/page-search.vue'
import pageContent from '@/components/page-content/page-content.vue'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'

import usePageContent from '@/hooks/usePageContent'

const { handleQueryClick, handleResetClick } = usePageContent()
</script>

<style scoped>
.goods {
}
</style>
