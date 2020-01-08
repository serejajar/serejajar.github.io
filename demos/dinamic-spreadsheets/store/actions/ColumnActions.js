/* export */const ADD_COLUMN = 'ADD_COLUMN' 
/* export */const CHANGE_COLUMN_TITLE = 'CHANGE_COLUMN_TITLE'

/* export */function addColumn(data) {
  return { type: ADD_COLUMN, payload: data }
}

/* export */function changeColumnTitle(i, title) {
  return { type: CHANGE_COLUMN_TITLE, payload: { i, title } }
}
