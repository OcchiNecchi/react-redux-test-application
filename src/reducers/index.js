// Reducerとは、Actionを元にStateを更新するメソッドのこと
import { combineReducers } from 'redux'
import events from './events'

export default combineReducers( { events } )