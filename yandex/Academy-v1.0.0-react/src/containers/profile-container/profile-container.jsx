import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import Profile from '../../components/profile/profile.jsx'

// Можно лучше: ProfileContainer можно убрать и передавать имя пользователя прямо в Profile. Или если он необходим в дальнейшем, упростить его используя login-container.js
// Нужно исправить: PureComponent (см. описание в login.jsx)
class ProfileContainer extends PureComponent {
  render() {
    const { user } = this.props
    return <Profile user={user} />
  }
}

const mapStateToProps = state => ({
  user: state.session.user,
})

// Нужно исправить: пустой mapDispatchToProps можно не передавать в connect()
const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)
