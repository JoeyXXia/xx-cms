import userLoginStore from '@/store/login/login'

function usePermission(permissionID: string) {
  const loginStore = userLoginStore()

  const { permissions } = loginStore

  return !!permissions.find((item) => item.includes(permissionID))
}

export default usePermission
