const CHANGE_ROWS_VALUE = 'CHANGE_ROWS_VALUE'
const CHANGE_ROW_TOTAL_VALUE = 'CHANGE_ROW_TOTAL_VALUE'

function changeRowValue(prop, title) {
  return { type: CHANGE_ROWS_VALUE, payload: { prop, title } }
}

function changeRowTotalValue(total) {
  return { type: CHANGE_ROW_TOTAL_VALUE, payload: total }
}
