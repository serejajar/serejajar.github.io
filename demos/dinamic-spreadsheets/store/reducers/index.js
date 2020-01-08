import { combineReducers } from 'redux'
import { columnReducer } from './column'
import { rowsReducer } from './rows'

/* export */ const rootReducer = Redux.combineReducers({
  columns: columnReducer,
  rows: rowsReducer,
})
