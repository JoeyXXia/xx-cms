import {
  getAmountList,
  getCategoryCount,
  getCategoryGoodSale,
  getCategoryGoodFavor,
  getGoodAddressSale,
  getGoodsSaleTop10
} from '@/service/main/analysis/analysis'

import type { IAnalysis } from './type'
import { defineStore } from 'pinia'

const useAnalysisStore = defineStore('analysis', {
  state: (): IAnalysis => ({
    topPanelDatas: [],
    categoryGoodsCount: [],
    categoryGoodsFavor: [],
    categoryGoodsSale: [],
    goodsSaleTop10: [],
    goodsAddressSale: []
  }),
  actions: {
    async getAnalysisDataAction() {
      const resultTopPanelDatas = await getAmountList()
      this.topPanelDatas = resultTopPanelDatas.data

      const goodCount = await getCategoryCount()
      this.categoryGoodsCount = goodCount.data

      const goodSale = await getCategoryGoodSale()
      this.categoryGoodsSale = goodSale.data

      const goodFavor = await getCategoryGoodFavor()
      this.categoryGoodsFavor = goodFavor.data

      const saleTop10 = await getGoodsSaleTop10()
      this.goodsSaleTop10 = saleTop10.data

      const addressSale = await getGoodAddressSale()
      this.goodsAddressSale = addressSale.data
    }
  }
})

export default useAnalysisStore
