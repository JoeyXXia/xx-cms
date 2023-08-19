import { useRoute } from 'vue-router';
<template>
  <div class="crumb">
    <el-breadcrumb separator-icon="ArrowRight">
      <template v-for="item in breadcrumbs" :key="item.name">
        <el-breadcrumb-item :to="item.path">
          {{ item.name }}
        </el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import userLoginStore from '@/store/login/login'
import { mapPathToBreadCrumbs } from '../../../utils/map-menus'

const route = useRoute()
const userMenus = userLoginStore().userMenus
const breadcrumbs = computed(() => {
  return mapPathToBreadCrumbs(route.path, userMenus)
})
</script>

<style lang="less" scoped>
.crumb {
  color: red;
}
</style>
