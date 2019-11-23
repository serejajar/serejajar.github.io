class Page extends React.Component {
  onBtnClick = e => {
    const year = +e.currentTarget.innerText
    this.props.getPhotos(year)
  }
  renderButtons = () => {
    let yearNumber = new Date().getFullYear();
    const years = [];
    for (var i = 0; i < 5; i++) {
      years.push(yearNumber - i)
    }


    return years.map((item, index) => {
      const year = yearNumber - index;
      return (
        <button key={year} className="btn" onClick={this.onBtnClick}>
          {year}
        </button>
      )
    })
  }
  renderTemplate = () => {
    const { photos, isFetching, error } = this.props

    if (error) {
      return <p className="error">Error while request photo: {error}</p>
    }

    if (isFetching) {
      return <p>Загрузка...</p>
    } else {
      return photos.map(entry => (
        <div key={entry.id} className="photo">
          <p>
            <img src={entry.sizes[0].url} alt="" />
          </p>
          <p>{entry.likes.count} ❤</p>
        </div>
      ))
    }
  }

  renderHeader = () => {
    const { year, photos } = this.props
    if (year) {
      return `${year} year [${photos.length}]`
    }

    return `Click on a year button to get your photos`;
  }

  render() {
    const { year, photos } = this.props
    return (
      <div className="ib page">
        <p>{this.renderButtons()}</p>
        <h3>
          {this.renderHeader()}
        </h3>
        {this.renderTemplate()}
      </div>
    )
  }
}
