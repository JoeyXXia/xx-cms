<template>
  <div class="description">
    <el-descriptions class="margin-top" :title="title" :column="column" border>
      <template v-for="(itemData, index) in tableDatas" :key="index">
        <el-descriptions-item>
          <template #label>{{ (itemData as any).name }}</template>
          <el-tag size="small">{{ (itemData as any).description }}</el-tag>
        </el-descriptions-item>
      </template>
    </el-descriptions>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: ''
  },
  column: {
    type: Number,
    default: 1
  },
  tableDatas: {
    type: Array,
    default: () => []
  }
})
</script>

<style lang="less" scoped>
.description {
  margin-bottom: 20px;
}
</style>
