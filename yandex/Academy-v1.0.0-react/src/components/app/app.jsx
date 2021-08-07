import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import PrivateRoute from '../../containers/private-route/private-route.jsx'
import LoginContainer from '../../containers/login-container/login-container'
import LinkButton from '../link-button/link-button.jsx'
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx'
import ProfileContainer from '../../containers/profile-container/profile-container.jsx'
import NotFound from '../not-found/not-found.jsx'

// Можно лучше: в label={'Главная'} фигурные скобки нужны только переменных, тут можно можно использовать кавычки label='Главная'
const App = () => (
    <div>
      <header className="header">
        <div className="top-menu">
          <LinkButton to="/" label={'Главная'} />
          <LinkButton to="/profile" label={'Профиль'} />
          <LinkButton to="/login" label={'Логин'} />
          <LinkButton to="/kvazavr" label={'Не найдено'} />
        </div>
      </header>
      <div className="content">
        {/* Можно лучше: рутинг (и другие блоки кода с отдельной логикой) лучше всего выводить в отдельный файл, так код будет проще поддерживать. */}
        <Switch>
          <Route exact path="/" component={WelcomeScreen} />
          {/* Можно лучше: /login/123, /profile/123 также будет показывать форму ввода для логина и пароля */}
          <Route path="/login" component={LoginContainer} />
          <PrivateRoute path="/profile" component={ProfileContainer} />
          {/* Надо исправить: Если url битый - редирект на /kvazavr */}
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
)

export default App
