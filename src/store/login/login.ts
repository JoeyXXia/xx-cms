import { defineStore } from 'pinia'
import { accountLoginRequest } from '@/service/login/login'
import type { IAccount } from '@/types'

const userLoginStore = defineStore('login', {
  state: () => ({
    id: '',
    token: '',
    name: ''
  }),
  actions: {
    async loginAccountAction(account: IAccount) {
      const longinResult = await accountLoginRequest(account)
      this.id = longinResult.data.id
      this.name = longinResult.data.name
      this.token = longinResult.data.token
    }
  }
})

export default userLoginStore
