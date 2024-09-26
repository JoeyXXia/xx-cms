import xxRequest from '..'

export function getEntireRoles() {
  return xxRequest.post({
    url: '/role/list'
  })
}
export function getEntireDepartments() {
  return xxRequest.post({
    url: '/department/list'
  })
}

export function getEntireMenus() {
  return xxRequest.post({
    url: '/menu/list'
  })
}
