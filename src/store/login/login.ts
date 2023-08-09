import { defineStore } from 'pinia'
import { accountLoginRequest } from '@/service/login/login'
import type { IAccount } from '@/types'
import { localCache, sessionCache } from '@/utils/cache'
import router from '@/router'
import { LOGIN_TOKEN } from '@/global/constants'

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

      router.push('/main')
    }
  }
})

export default userLoginStore
