/* export */const CHANGE_ROWS_VALUE = 'CHANGE_ROWS_VALUE'
/* export */const CHANGE_ROW_TOTAL_VALUE = 'CHANGE_ROW_TOTAL_VALUE'

/* export */function changeRowValue(prop, title) {
  return { type: CHANGE_ROWS_VALUE, payload: { prop, title } }
}

/* export */function changeRowTotalValue(total) {
  return { type: CHANGE_ROW_TOTAL_VALUE, payload: total }
}
