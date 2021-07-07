// Reducerとは、Actionを元にStateを更新するメソッドのこと
import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import events from './events'

export default combineReducers({ events, form })