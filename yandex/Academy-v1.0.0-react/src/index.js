// Все комментарии оставлены в самих файлах, здесь подведен итог КР в виде ответов на вопросы из word-документа:

/* Для более простой организации файлов лучше:

1. Исключить вложение одноименного файла в папку: файлы можно src/components/link-button/link-button.jsx

src
├── components
  ├── App.js
  ├── LinkButton.js
  ├── Login

2. Вынести все actions b reducers в отдельную папку store, в
store
├── store.js
├── actions
  ├── SessionActions.js
├── reducers
  ├── index.js
  ├── session.js

3. Так же можно удалить ProfileContainer без потери функционирования (см. profile-container.jsx)
*/

/* Валидация пропсов:
В некоторых файлах валидация отсутствует частично (см. login.jsx, profile.jsx), или отсутствует вообще (profile-container.jsx). Нужна настройка конфигурационного файла webpack, чтобы избежать подобных ошибок.
*/

/* Тесты:
Неправильный snapshot, в остальном работает корректно
*/

/* Роуты:
Будут срабатывать некорректно, например /login/123 и /profile/123 так же будет показывать форму ввода для логина и пароля. Битая ссылка не редиректит на 404 страницу (подробнее см. app.jsx).
*/

/* Компоненты:
Неправильное использование PureComponent (см. комментарии к login.jsx, profile-container.jsx). Функциональные компоненты используются правильно.
*/

/* Store:
Исключая неиспользуемый LOG_OUT (см. комментарий в SessionActions.js ) store работает корректно.
*/

/*
Разное:
1) При перезагрузке страницы (например /login) происходит ошибка. Нужно исправить конфигурационный файл вебпака.
2) Конфиг eslint настроен неправильно, поэтому присутствуют мелкие ошибки, например отсутствие проверок с propTypes.
*/
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './reducers'
import App from './components/app/app.jsx'
import registerServiceWorker from './registerServiceWorker'

const middleware = [thunk]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(reducer, applyMiddleware(...middleware))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
