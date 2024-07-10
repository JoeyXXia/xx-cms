<template>
  <div class="overview">
    <xx-card title="关于">
      <div class="c-left">
        Vue3Admin 是基于 Vue3、Vuex、VueRouter、Vite、 ElementPlus 、TypeScript、Echart5
        等后台系统解决方案。
      </div>
    </xx-card>
    <xx-text-link></xx-text-link>
    <xx-descriptions></xx-descriptions>
    <xx-code></xx-code>
  </div>
</template>

<script setup lang="ts" name="overview">
import XxDescriptions from '@/base-ui/descriptions/descriptions.vue'
import XxTextLink from '@/base-ui/text-link/textLink.vue'
import XxCode from '@/base-ui/code/code.vue'
import XxCard from '@/base-ui/card/card.vue'
</script>

<style scoped>
.overview {
}
</style>
