class UserContainer extends React.Component {
  render() {
    const { user, handleLogin } = this.props
    return (
      <User
        name={user.name}
        error={user.error}
        isFetching={user.isFetching}
        handleLogin={handleLogin}
      />
    )
  }
}

const userMapStateToProps = store => {
  return {
    user: store.user,
  }
}

const userMapDispatchToProps = dispatch => {
  return {
    handleLogin: () => dispatch(handleLogin()),
  }
}

const userConnector = ReactRedux.connect(
  userMapStateToProps,
  userMapDispatchToProps
);
UserContainer = userConnector(UserContainer);
