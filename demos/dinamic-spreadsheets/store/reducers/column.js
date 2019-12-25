function columnReducer(state = [], action) {
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
