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
        <div>
          <p>Note: if you use Firefox 70^ it will <a href="https://support.mozilla.org/en-US/kb/content-blocking">block VK API</a>. Please add exception via clicking on the shield icon near adress bar.</p>
          <button className="btn" onClick={this.props.handleLogin}>
            Log in
          </button>
        </div>
      )
    }
  }
  render() {
    return <div className="ib user">{this.renderTemplate()}</div>
  }
}
