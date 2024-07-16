<template>
  <div class="overview">
    <xx-card title="关于">
      <div class="c-left">
        Vue3Admin 是基于 Vue3、Vuex、VueRouter、Vite、 ElementPlus 、TypeScript、Echart5
        等后台系统解决方案。
      </div>
    </xx-card>
    <xx-card title="技术栈">
      <xx-text-link :text-arrs="technologyStacks" />
      <xx-descriptions title="生产环境依赖" :column="2" :table-datas="dependencies" />
      <xx-descriptions title="开发环境依赖" :column="2" :table-datas="devDependencies" />
    </xx-card>
    <xx-card title="项目结构">
      <div class="c-left">
        <xx-code language="bash" :code="projectDir" />
      </div>
    </xx-card>
    <xx-card> </xx-card>
  </div>
</template>

<script setup lang="ts" name="overview">
import XxDescriptions from '@/base-ui/descriptions/descriptions.vue'
import XxTextLink from '@/base-ui/text-link/textLink.vue'
import XxCode from '@/base-ui/code/code.vue'
import XxCard from '@/base-ui/card/card.vue'

import { technologyStacks, dependencies, devDependencies, projectDir } from './config'
</script>

<style scoped>
.overview {
  .c-left {
    text-align: left;
  }
}
</style>
