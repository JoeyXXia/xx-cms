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
        <xx-card>
          <pie-echart :pie-data="showGoodCatagoryCount"></pie-echart>
        </xx-card>
      </el-col>
      <el-col :span="10">
        <xx-card>
          <map-echart :map-data="showGoodsAddressSale" />
        </xx-card>
      </el-col>
      <el-col :span="7">
        <xx-card> <rose-echart :rose-data="showGoodCatagoryCount" /> </xx-card
      ></el-col>
    </el-row>

    <!-- in the bottom  -->
    <el-row :gutter="10">
      <el-col :span="12">
        <xx-card>
          <line-echart v-bind="showGoodsCategorySale"></line-echart>
        </xx-card>
      </el-col>
      <el-col :span="12">
        <xx-card>
          <bar-echart v-bind="showGoodsCategoryFavor" />
        </xx-card>
      </el-col>
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

const showGoodsCategorySale = computed(() => {
  const labels = categoryGoodsSale.value.map((item) => item.name)
  const values = categoryGoodsSale.value.map((item) => item.goodsCount)
  return { labels, values }
})

const showGoodsCategoryFavor = computed(() => {
  const labels = categoryGoodsFavor.value.map((item) => item.name)
  const values = categoryGoodsFavor.value.map((item) => item.goodsFavor)
  return { labels, values }
})

const showGoodsAddressSale = computed(() => {
  return goodsAddressSale.value.map((item) => ({
    name: item.address,
    value: item.count
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
