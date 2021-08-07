import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'

// Нужно исправить: PureComponent используется только для повышения производительности, так как позволяет управлять рендерингом этого (и дочерних компонентов) сравнивая состояние props и state. Подробнее: https://ru.reactjs.org/docs/react-api.html#reactpurecomponent
class Login extends PureComponent {
  // Отлично! Использование присвоения напрямую (state = {}, handleSubmit = e и т.д.) упрощают код, позволяет избежать потери this для методов, и в этом случае не нужен конструктор с вызовом super() в нем.
  state = {
    redirectToPreviousRoute: false,
    userName: '',
    password: '',
  }

  // Можно лучше: Упростить код получая в handleSubmit значения полей через e.target.elements. Подробнее: https://learn.javascript.ru/form-elements#navigatsiya-formy-i-elementy . В этом случае можно удалить handleChange и все переменные связанные с авторизацией в this.state
  handleSubmit = e => {
    e.preventDefault()
    const { userName, password } = this.state

    this.props.logIn(
      {
        userName,
        password,
      },
      () => {
        this.setState({ redirectToPreviousRoute: true })
      }
    )
  }
  // Можно лучше: см. комментарий к handleSubmit
  handleChange = e => {
    const value = e.currentTarget.value
    const fieldName = e.currentTarget.dataset.fieldName

    this.setState(prev => ({
      ...prev,
      [fieldName]: value,
    }))
  }

  render() {
    const { location, errorMessage } = this.props
    // Надо исправить: редирект должен быть на /profile
    const { from } = location.state || { from: { pathname: '/' } }
    const { userName, password, redirectToPreviousRoute } = this.state

    if (redirectToPreviousRoute) {
      return <Redirect to={from} />
    }

    return (
      <div>
        {errorMessage && <p>{errorMessage}</p>}
        <form onSubmit={this.handleSubmit}>
          {/* Можно лучше: можно удалить аттрибуты onChange, и value (см. комментарий к handleSubmit )*/}
          <input
            data-field-name={'userName'}
            type={'text'}
            onChange={this.handleChange}
            placeholder={'Имя'}
            value={userName}
          />
          {/* Надо исправить: символы пароля лучше скрыть используя соответсвующее значение атрибута type */}
          <input
            data-field-name={'password'}
            type={'text'}
            onChange={this.handleChange}
            placeholder={'Пароль'}
            value={password}
          />
          <button type="submit">Log in</button>
        </form>
      </div>
    )
  }
}

Login.propTypes = {
  logIn: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
}

export default Login
