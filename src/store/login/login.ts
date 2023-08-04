import { defineStore } from 'pinia'
import { accountLoginRequest } from '@/service/login/login'

const userLoginStore = defineStore('login', {
  state: () => ({
    id: '',
    token: '',
    name: ''
  }),
  actions: {
    async loginAccountAction(account: any) {
      const longinResult = await accountLoginRequest(account)
      this.id = longinResult.data.id
      this.token = longinResult.data.token
      this.name = longinResult.data.name
    }
  }
})

export default userLoginStore
