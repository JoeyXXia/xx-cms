<template>
  <div class="content">
    <div class="header">
      <h3 class="title">部门列表</h3>
      <el-button type="primary" @click="handleNewUserClick">新建部门</el-button>
    </div>
    <div class="table">
      <el-table style="width: 100%" border :data="pageList">
        <el-table-column align="center" type="selection" width="60px" />
        <el-table-column align="center" type="index" label="序号" width="60px" />
        <el-table-column align="center" prop="name" label="部门名称" width="150px" />
        <el-table-column align="center" prop="leader" label="部门领导" width="150px" />
        <el-table-column align="center" prop="parentId" label="上级部门" width="150px" />
        <el-table-column align="center" label="创建时间" prop="createAt">
          <template #default="scope">
            {{ formatUTC(scope.row.createAt) }}
          </template>
        </el-table-column>
        <el-table-column align="center" label="更新时间" prop="updateAt">
          <template #default="scope">
            {{ formatUTC(scope.row.updateAt) }}
          </template>
        </el-table-column>
        <el-table-column align="center" label="操作" width="150px">
          <template #default="scope">
            <el-button
              size="small"
              icon="Edit"
              type="primary"
              text
              @click="handleEditBtnClick(scope.row)"
            >
              编辑
            </el-button>
            <el-button
              size="small"
              icon="Delete"
              type="danger"
              text
              @click="handleDeleteBtnClick(scope.row.id)"
            >
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <el-pagination
        layout="total, sizes, prev, pager, next, jumper"
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[10, 20, 30]"
        :total="usersTotalCount"
        @size-change="handelSizeChnange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import userSystemStore from '@/store/main/sysytem/system'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import { formatUTC } from '@/utils/format'
const systemStore = userSystemStore()
const currentPage = ref(1)
const pageSize = ref(10)
fetchPageListData()

const { pageList, usersTotalCount } = storeToRefs(systemStore)
// request user data
function fetchPageListData(formData: any = {}) {
  const size = pageSize.value
  const offset = (currentPage.value - 1) * size
  const pageInfo = { size, offset }

  const queryInfo = { ...pageInfo, ...formData }
  systemStore.postPageListDataAction('department', queryInfo)
}
// edit event
const emit = defineEmits(['newClick', 'editClick'])

//pagination event
function handelSizeChnange() {
  fetchPageListData()
}
function handleCurrentChange() {
  fetchPageListData()
}

function handleNewUserClick() {
  emit('editClick')
}
function handleEditBtnClick(itemData: any) {
  emit('editClick', itemData)
}
function handleDeleteBtnClick(id: number) {
  systemStore.deletePageByIdAction('department', id)
}
defineExpose({ fetchPageListData })
</script>

<style lang="less" scoped>
.content {
  margin-top: 20px;
  padding: 20px;
  background-color: #fff;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 10px;

  .title {
    font-size: 22px;
  }
}
.table {
  :deep(.el-table_cell) {
    padding: 12px 0;
  }

  .el-button {
    margin-left: 0;
    padding: 5px 8px;
  }
}
.pagination {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}
</style>
