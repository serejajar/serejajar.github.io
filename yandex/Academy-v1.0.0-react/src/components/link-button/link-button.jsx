// Отлично!: Вывести часто повторяемый код в отдельный компонент - это хорошая идея!
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const LinkButton = ({to, label}) => {
  // Нужно исправить: <a><button>Название</button></a> - не является валидным html, т.е. это может не работать в каком-то браузере. Проверить валидность можно тут: https://validator.w3.org/#validate_by_input . Здесь лучше использовать тэг <a> и добавить к нему стили.
  return (
    <Link to={to}>
      <button>{label}</button>
    </Link>
  )
}

LinkButton.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

export default LinkButton
