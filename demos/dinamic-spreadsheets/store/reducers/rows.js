// import { Map } from 'immutable';
// import { CHANGE_ROWS_VALUE, CHANGE_ROW_TOTAL_VALUE } from '../actions/RowsActions'

const default = {
  data: {},
  total: 10
}
const reduxState = localStorage.getItem('reduxState')
const initialState = reduxState ? JSON.parse(reduxState).rows : default;

/* export */function rowsReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_ROWS_VALUE: {
      const { prop, title } = action.payload
      const data = Immutable.Map(state.data).set(prop, title).toJS()
      return {
        ...state,
        data
      }
    }
    case CHANGE_ROW_TOTAL_VALUE:
      return { ...state, total: action.payload }
    default:
      return state
  }
}
