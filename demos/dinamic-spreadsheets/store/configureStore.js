const store = Redux.createStore(rootReducer, Redux.applyMiddleware(ReduxThunk.default, reduxLogger.default))
