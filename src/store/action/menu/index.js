import types from '../types'
import {getTopicList} from '../topic'
import { CnodeModel } from '../../../api/api'
const cnondeModel = new CnodeModel()

//显示抽屉
export function showDrawer() {
  return (dispatch) => {
    dispatch({type:types.SHOWDRAWER})
  }
}

//隐藏抽屉
export function hideDrawer() {
  return (dispatch) => {
    dispatch({type:types.HIDEDRAWER})
  }
}

//切换当前分类
export function changeCata(cata) {
  return (dispatch) => {
    dispatch({type:types.CHANGECATA,currentCata:cata})
    dispatch(getTopicList({tab:cata.key,page:1,limit:20}))
  }
}