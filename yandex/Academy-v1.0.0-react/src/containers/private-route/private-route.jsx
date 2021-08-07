import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

// Можно лучше: Добавив проверку propTypes для component и isAuth. Подробнее: https://ru.reactjs.org/docs/typechecking-with-proptypes.html#proptypes
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        rest.isAuth ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  )
}
// Можно лучше: так как в этом контейнере уже получено значение user из state, то можно обойтись без контейнера ProfileContainer и передавать данные сразу компоненту Profile
const mapStateToProps = state => {
  return {
    isAuth: state.session.user,
  }
}

export default connect(mapStateToProps)(PrivateRoute)
