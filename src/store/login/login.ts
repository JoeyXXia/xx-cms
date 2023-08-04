import { defineStore } from 'pinia'
import { accountLoginRequest } from '@/service/login/login'
import type { IAccount } from '@/types'
import { localCache, sessionCache } from '@/utils/cache'

const LOGIN_TOKEN = 'login-token'

const userLoginStore = defineStore('login', {
  state: () => ({
    id: '',
    token: localCache.getCache(LOGIN_TOKEN) ?? '',
    name: ''
  }),
  actions: {
    async loginAccountAction(account: IAccount) {
      const longinResult = await accountLoginRequest(account)
      this.id = longinResult.data.id
      this.name = longinResult.data.name
      this.token = longinResult.data.token

      localCache.setCache(LOGIN_TOKEN, this.token)
    }
  }
})

export default userLoginStore
