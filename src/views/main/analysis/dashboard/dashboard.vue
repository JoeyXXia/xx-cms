<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <template v-for="item in topPanelData" :key="item.title">
        <el-col :md="12" :lg="6" :xl="6">
          <statistical-panel :panel-data="item" />
        </el-col>
      </template>
    </el-row>
  </div>
</template>

<script setup lang="ts" name="dashboard">
import useAnalysisStore from '@/store/main/analysis/analysis'
import { computed } from 'vue'
import statisticalPanel from '@/components/statistical-panel/statistical-panel.vue'
// store dispatch network
const analysisStore = useAnalysisStore()
analysisStore.getAnalysisDataAction()

// top PanelData
const topPanelData = computed(() => analysisStore.topPanelDatas)
const categoryGoodsCount = computed(() => {
  return analysisStore.categoryGoodsCount.map((item) => {
    return { value: item.goodsCount, name: item.name }
  })
})
const categoryGoodSale = computed(() => {
  const goodsSale = analysisStore.categoryGoodsSale
  const labels: string[] = []
  const values: any[] = []

  for (const item of goodsSale) {
    labels.push(item.name)
    values.push(item.goodsCount)
  }
  return { labels, values }
})
const addressGoodSale = computed(() => {
  return analysisStore.goodsAddressSale.map((item) => {
    return { name: item.address, value: item.count }
  })
})
</script>

<style scoped>
.dashboard {
  background-color: #f5f5f5;

  .row {
    margin-top: 20px;
  }
}
</style>
