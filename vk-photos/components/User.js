class User extends React.Component {
  renderTemplate = () => {
    const { name, error, isFetching } = this.props

    if (error) {
      return <p>Error while log in: {error}</p>
    }

    if (isFetching) {
      return <p>Please wait...</p>
    }

    if (name) {
      return <p>Hi, {name}!</p>
    } else {
      return (
        <button className="btn" onClick={this.props.handleLogin}>
          Log in
        </button>
      )
    }
  }
  render() {
    return <div className="ib user">{this.renderTemplate()}</div>
  }
}
