import types from '../types'
import { CnodeModel } from '../../../api/api'
const cnondeModel = new CnodeModel()

//请求首页数据
export function getTopicList(params) {
  return  async dispatch=>{
    let result = await cnondeModel.getTopics(params)
    
    if (result&&result.data) {
      if (result.success) {   
        dispatch({type:types.GET_TOPIC_LIST,list:result.data})
      }
    }
  }
}
//请求下一页数据
export function getNextList(params) {
  return async dispatch => {
    let result = await cnondeModel.getTopics(params)
    if (result&&result.data) {
      if (result.success) {
        if (result.data.length > 0) {
          dispatch({type:types.APPEND_TOPIC_LIST,list:result.data,page:params.page})
        }
      }
    }
  }
}
//请求话题详情
export function getTopicInfo(params) {
  return async dispatch => {
    let result =  await cnondeModel.topInfo(params)
    if(result&&result.data&&result.success){
      dispatch({type:types.GET_TOPIC_INFO,infoData:result.data}) 
    }else{
        console.error('请求话题详情失败！')
    }
  }
}


