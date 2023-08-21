import xxRequest from '@/service'

// user nework request
export function postUsersListData(queryInfo: any) {
  return xxRequest.post({
    url: '/users/list',
    data: queryInfo
  })
}

export function deleteUserById(id: number) {
  return xxRequest.delete({
    url: `/users/${id}`
  })
}

export function newUsersData(userInfo: any) {
  return xxRequest.post({
    url: '/users',
    data: userInfo
  })
}

export function editUserData(id: number, userInfo: any) {
  return xxRequest.post({
    url: `/users/${id}`,
    data: userInfo
  })
}

//page request

export function postPageListData(pageName: any, queryInfo: any) {
  return xxRequest.post({
    url: `/${pageName}/list`,
    data: queryInfo
  })
}

export function deletePageById(pageName: string, id: number) {
  return xxRequest.delete({
    url: `/${pageName}/${id}`
  })
}

export function newPageData(pageName: string, pageInfo: any) {
  return xxRequest.post({
    url: `${pageName}`,
    data: pageInfo
  })
}

export function editPageData(pageName: string, id: number, pageInfo: any) {
  return xxRequest.post({
    url: `/${pageName}/${id}`,
    data: pageInfo
  })
}
