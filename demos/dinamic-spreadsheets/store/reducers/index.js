import { combineReducers } from 'redux'

const rootReducer = Redux.combineReducers({
  columns: columnReducer,
  rows: rowsReducer,
})
