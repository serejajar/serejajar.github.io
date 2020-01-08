// import { Map } from 'immutable';
// import { CHANGE_ROWS_VALUE, CHANGE_ROW_TOTAL_VALUE } from '../actions/RowsActions'

const reduxState = localStorage.getItem('reduxState')
const rowsInitialState = reduxState ? JSON.parse(reduxState).rows : {
  data: {},
  total: 10
};
console.log('rows initialState', rowsInitialState);


/* export */function rowsReducer(state = rowsInitialState, action) {
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
