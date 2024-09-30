<template>
  <div class="content">
    <div class="header">
      <h3 class="title">{{ contentConfig?.header?.title ?? '数据列表' }}</h3>
      <el-button type="primary" @click="handleNewUserClick">{{
        contentConfig?.header?.btnTitle ?? '新建数据'
      }}</el-button>
    </div>
    <div class="table">
      <el-table style="width: 100%" border :data="pageList" v-bind="contentConfig.childrenTree">
        <template v-for="item in contentConfig.propsList" :key="item.prop">
          <template v-if="item.type === 'timer'">
            <el-table-column align="center" v-bind="item">
              <template #default="scope">
                {{ formatUTC(scope.row[item.prop]) }}
              </template>
            </el-table-column>
          </template>
          <template v-else-if="item.type === 'handler'">
            <el-table-column align="center" v-bind="item">
              <template #default="scope">
                <el-button
                  v-if="isUpdate"
                  size="small"
                  icon="Edit"
                  type="primary"
                  text
                  @click="handleEditBtnClick(scope.row)"
                >
                  编辑
                </el-button>
                <el-button
                  v-if="isDelte"
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
          </template>
          <template v-else-if="item.type === 'custom'">
            <el-table-column algin="center" v-bind="item">
              <template #default="scope">
                <slot :name="item.slotName" v-bind="scope" :prop="item.prop" hName="xx"> </slot>
              </template>
            </el-table-column>
          </template>
          <template v-else>
            <el-table-column align="center" v-bind="item" />
          </template>
        </template>
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
import usePermission from '@/hooks/usePermission'

interface IProps {
  contentConfig: {
    pageName: string
    header?: {
      title?: string
      btnTitle?: string
    }
    propsList: any[]
    childrenTree?: any
  }
}

const props = defineProps<IProps>()

// edit event
const emit = defineEmits(['newClick', 'editClick'])

const isCreate = usePermission(`${props.contentConfig.pageName}:create`)
const isDelte = usePermission(`${props.contentConfig.pageName}:delete`)
const isUpdate = usePermission(`${props.contentConfig.pageName}:update`)
const isQuery = usePermission(`${props.contentConfig.pageName}:query`)

// network request userList data
const systemStore = userSystemStore()
const currentPage = ref(1)
const pageSize = ref(10)
systemStore.$onAction(({ name, after }) => {
  after(() => {
    if (
      name === 'deletePageByIdAction' ||
      name === 'editPageDataAction' ||
      name === 'newPageDataAction'
    ) {
      currentPage.value = 1
    }
  })
})
fetchPageListData()

const { pageList, usersTotalCount } = storeToRefs(systemStore)
// request user data
function fetchPageListData(formData: any = {}) {
  if (!isQuery) return

  const size = pageSize.value
  const offset = (currentPage.value - 1) * size
  const pageInfo = { size, offset }

  const queryInfo = { ...pageInfo, ...formData }
  systemStore.postPageListDataAction(props.contentConfig.pageName, queryInfo)
}

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
  systemStore.deletePageByIdAction(props.contentConfig.pageName, id)
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
