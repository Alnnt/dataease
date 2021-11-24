import request from '@/utils/request'

export function queryAuthModel(data) {
  return request({
    url: 'authModel/queryAuthModel',
    method: 'post',
    loading: true,
    timeout: 30000,
    data
  })
}
