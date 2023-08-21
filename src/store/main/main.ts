import { getEntireDepartments, getEntireRoles } from '@/service/main/main'
import { defineStore } from 'pinia'

interface IMainStore {
  entireRoles: any[]
  entireDepartments: any[]
}

const useMainStore = defineStore('main', {
  state: (): IMainStore => ({
    entireRoles: [],
    entireDepartments: []
  }),
  actions: {
    async fetchEntireDataAction() {
      const rolesResult = await getEntireRoles()
      const departmentsResult = await getEntireDepartments()
      this.entireRoles = rolesResult.data.list
      this.entireDepartments = departmentsResult.data.list
    }
  }
})

export default useMainStore
