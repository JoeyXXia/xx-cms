import { BASE_URL, TIME_OUT } from './config/index'
import XXRequest from './request'

const xxrequest = new XXRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {}
})

export default xxrequest
