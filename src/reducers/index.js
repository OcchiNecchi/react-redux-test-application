// Reducerとは、Actionを元にStateを更新するメソッドのこと
import { combineReducers } from 'redux'
import count from './count'

export default combineReducers( { count } )