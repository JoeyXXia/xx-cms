<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <template v-for="item in topPanelDatas" :key="item.title">
        <el-col :md="12" :lg="6" :xl="6">
          <statistical-panel v-bind="item" />
        </el-col>
      </template>
    </el-row>
  </div>
</template>

<script setup lang="ts" name="dashboard">
import useAnalysisStore from '@/store/main/analysis/analysis'
import { computed } from 'vue'
import statisticalPanel from '@/components/statistical-panel/statistical-panel.vue'
import { storeToRefs } from 'pinia'
// store dispatch network
const analysisStore = useAnalysisStore()
analysisStore.getAnalysisDataAction()

// top PanelData
const {
  topPanelDatas,
  categoryGoodsCount,
  categoryGoodsFavor,
  categoryGoodsSale,
  goodsAddressSale
} = storeToRefs(analysisStore)

// get data
const showGoodCatagoryCount = computed(() => {
  return categoryGoodsCount.value.map((item) => ({
    name: item.name,
    value: item.goodsCount
  }))
})
</script>

<style scoped>
.dashboard {
  background-color: #f5f5f5;

  .el-row {
    margin-top: 20px;
  }
}
</style>
