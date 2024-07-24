<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <template>
        <el-col :md="12" :lg="6" :xl="6"> </el-col>
      </template>
    </el-row>
  </div>
</template>

<script setup lang="ts" name="dashboard">
import useAnalysisStore from '@/store/main/analysis/analysis'

const analysisStore = useAnalysisStore()
</script>

<style scoped>
.dashboard {
}
</style>
