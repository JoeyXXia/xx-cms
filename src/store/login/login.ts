import { defineStore } from 'pinia'
import { accountLoginRequest, getUserInfoById, getUserMenuByRoleId } from '@/service/login/login'
import type { IAccount } from '@/types'
import { localCache, sessionCache } from '@/utils/cache'
import router from '@/router'
import { LOGIN_TOKEN } from '@/global/constants'

interface ILonginState {
  token: string
  userInfo: any
  userMenus: any
}

const userLoginStore = defineStore('login', {
  state: (): ILonginState => ({
    token: localCache.getCache(LOGIN_TOKEN) ?? '',
    userInfo: localCache.getCache('userInfo') ?? {},
    userMenus: localCache.getCache('userMenus') ?? []
  }),
  actions: {
    async loginAccountAction(account: IAccount) {
      // get user token
      const longinResult = await accountLoginRequest(account)
      const id = longinResult.data.id
      this.token = longinResult.data.token
      localCache.setCache(LOGIN_TOKEN, this.token)

      // get user information
      const userInfoResult = await getUserInfoById(id)
      const userInfo = userInfoResult.data
      this.userInfo = userInfo

      // get user menu
      const userMenuResult = await getUserMenuByRoleId(this.userInfo.role.id)
      const userMenus = userMenuResult.data
      this.userMenus = userMenus

      //cache user
      localCache.setCache('userInfo', userInfo)
      localCache.setCache('userMenus', userMenus)
      router.push('/main')
    }
  }
})

export default userLoginStore
