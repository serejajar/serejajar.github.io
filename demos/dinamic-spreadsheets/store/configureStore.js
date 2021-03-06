// import { createStore, applyMiddleware } from 'redux'
// import { rootReducer } from './reducers'
// import logger from 'redux-logger'
// import thunk from 'redux-thunk'

/* export */const store = Redux.createStore(rootReducer, Redux.applyMiddleware(ReduxThunk.default, reduxLogger.default))

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})
