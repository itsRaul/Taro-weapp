import types from '../../action/types'

const DEFAULT_STATE = {
  page: 1,
  limit: 20,
  list: [],
  topicinfo:{},
  replies:[],
  admireState:false  //点赞状态
}

export default function topiclist(state=DEFAULT_STATE,action) {
  switch(action.type) {
    case types.GET_TOPIC_LIST:
      return {
        ...state,
        list:action.list,
        
      }
    case types.APPEND_TOPIC_LIST:
      return {
        ...state,
        list:state.list.concat(action.list),
        page:action.page
      }
    case types.GET_TOPIC_INFO:
      return {
        ...state,
        replies:action.infoData.replies,
        topicinfo:{...action.infoData,replies:null}
      }
    default:
      return {...state}
  }
}