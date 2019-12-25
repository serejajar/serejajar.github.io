const ADD_COLUMN = 'ADD_COLUMN'
const CHANGE_COLUMN_TITLE = 'CHANGE_COLUMN_TITLE'

function addColumn(data) {
  return { type: ADD_COLUMN, payload: data }
}

function changeColumnTitle(i, title) {
  return { type: CHANGE_COLUMN_TITLE, payload: { i, title } }
}
