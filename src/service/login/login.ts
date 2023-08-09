import xxRequest from '..'
import type { IAccount } from '@/types'

export function accountLoginRequest(account: IAccount) {
  return xxRequest.post({
    url: '/login',
    data: account
  })
}

export function getUserInfoById(id: number) {
  return xxRequest.get({
    url: `/users/${id}`
  })
}
