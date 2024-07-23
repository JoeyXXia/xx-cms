import xxRequest from '@/service/index'

enum AnalysisAPI {
  amountList = '/goods/amount/list',
  categoryGoodsCount = '/goods/category/count',
  categoryGoodsSale = '/goods/category/sale',
  categoryGoodsFavor = '/goods/category/favor',
  goodsSaleTop10 = '/goods/sale/top10',
  goodsAddressSale = '/goods/address/sale'
}

export function getAmountList() {
  return xxRequest.get({
    url: AnalysisAPI.amountList
  })
}

export function getCategoryCount() {
  return xxRequest.get({
    url: AnalysisAPI.categoryGoodsCount
  })
}

export function getCategoryGoodSale() {
  return xxRequest.get({
    url: AnalysisAPI.categoryGoodsSale
  })
}

export function getCategoryGoodFavor() {
  return xxRequest.get({
    url: AnalysisAPI.categoryGoodsFavor
  })
}

export function getGoodsSaleTop10() {
  return xxRequest.get({
    url: AnalysisAPI.goodsSaleTop10
  })
}

export function getGoodAddressSale() {
  return xxRequest.get({
    url: AnalysisAPI.goodsAddressSale
  })
}
