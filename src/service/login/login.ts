import xxRequest from '..'

export function accountLoginRequest(account: any) {
  return xxRequest.post({
    url: '/login',
    data: account
  })
}
