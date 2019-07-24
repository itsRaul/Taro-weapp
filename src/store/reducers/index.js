import {combineReducers} from 'redux'
import menu from './menu'
import topic from './topic'

const reducer = combineReducers({
  menu,
  topic
})

export default reducer