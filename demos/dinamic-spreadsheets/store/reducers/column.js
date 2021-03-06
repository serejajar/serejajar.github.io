// import { List } from 'immutable';
// import { ADD_COLUMN, CHANGE_COLUMN_TITLE } from '../actions/ColumnActions'

const reduxState = localStorage.getItem('reduxState')
const columnInitialState = reduxState ? JSON.parse(reduxState).columns : [];

/* export */function columnReducer(state = columnInitialState, action) {
  switch (action.type) {
    case ADD_COLUMN: {
      let newData = action.payload
      return [
        ...state,
        newData
      ]
    }
    case CHANGE_COLUMN_TITLE: {
      const { i, title } = action.payload
      return Immutable.List(state)
              .update(i, val => ({
                ...val,
                title
              }))
              .toJS()
    }
    default:
      return state
  }
}
