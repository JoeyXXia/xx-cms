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
    <xx-card title="项目规范">
      <xx-descriptions
        title="文件命名规范"
        :column="1"
        :table-datas="[
          { name: '文件夹', description: '统一小写, 多个单词使用-分割' },
          { name: '文件(.ts .vue .json .d.ts)', description: '统一小写, 多个单词使用-分割' }
        ]"
      />
      <xx-descriptions
        title="编写组件规范"
        :column="1"
        :table-datas="[
          { name: '组件的文件', description: '统一小写, 多个单词使用-分割' },
          {
            name: '组件的目录结构',
            description: '例如 button 组件：button/src/index.vue, 统一在button/index.ts导出'
          },
          {
            name: '组件导包顺序',
            description: '导vue技术栈的包 , 导第三方的工具函数 , 导本地的组件, 导本地的工具函数'
          },
          { name: '组件的名称', description: '统一大写开头，驼峰命名' },
          { name: '组件属性顺序', description: 'name, components, props, emits, setup ...' },
          { name: 'template标签', description: '小写加 - ( 例如：<case-panel/> )' },
          {
            name: 'template标签属性顺序',
            description: 'v-if , v-for , ref, class, style, ... ,事件'
          },
          { name: '组件的props', description: '小写开头，驼峰命名，必须编写类型默认值' },
          {
            name: '组件的样式',
            description: '作用域：scoped, lang = scss / less  ; 类名：统一小写, 多个单词使用-分割'
          }
        ]"
      />
    </xx-card>

    <xx-card title="Git提交规范">
      <xx-descriptions
        :column="1"
        :table-datas="[
          { name: 'add 操作', description: 'git add ' },
          { name: 'commit 操作', description: 'npm run  commit ' },
          { name: 'pull 操作', description: 'git pull ' },
          { name: 'push 操作', description: 'git push ' }
        ]"
      />
    </xx-card>
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

  .el-card {
    margin-bottom: 20px;

    &:deep(.el-card_header span) {
      font-weight: 700;
    }
  }

  .description {
    &:deep(.el-descriptions_title) {
      font-weight: 400;
    }
  }
}
</style>
