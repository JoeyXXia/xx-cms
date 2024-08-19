<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <template v-for="item in topPanelDatas" :key="item.title">
        <el-col :md="12" :lg="6" :xl="6">
          <statistical-panel v-bind="item" />
        </el-col>
      </template>
    </el-row>

    <!-- in the middle -->
    <el-row :gutter="10">
      <el-col :span="7">
        <xx-card title="分类商品数量(饼图)">
          <pie-echart></pie-echart>
        </xx-card>
      </el-col>
      <el-col :span="10">
        <xx-card title="分类商品数量(饼图)">
          <pie-echart></pie-echart>
        </xx-card>
      </el-col>
      <el-col :span="7">
        <xx-card title="分类商品数量(饼图)"> <pie-echart></pie-echart> </xx-card
      ></el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts" name="dashboard">
import useAnalysisStore from '@/store/main/analysis/analysis'
import { computed } from 'vue'
import statisticalPanel from '@/components/statistical-panel/statistical-panel.vue'
import XxCard from '@/base-ui/card/card.vue'
import {
  PieEchart,
  MapEchart,
  RoseEchart,
  LineEchart,
  BarEchart
} from '@/components/page-charts/index'
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
