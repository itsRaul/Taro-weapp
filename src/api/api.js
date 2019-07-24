import { HTTP } from '../utils/request'

class CnodeModel extends HTTP {
  getTopics(data) {
    return this.request({
      url: '/topics',
      data:data
    })
  }
  topInfo(data) {
    return this.request({
      url: `/topic/${data.id}`,
      data:data.mdrender
    })
  }
}

export { CnodeModel }