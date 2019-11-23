class PageContainer extends React.Component {
  render() {
    const { page, user, getPhotos } = this.props

    if (!user.name) {
      return null;
    }

    return (
      <Page
        photos={page.photos}
        year={page.year}
        isFetching={page.isFetching}
        error={page.error}
        getPhotos={getPhotos}
      />
    )
  }
}

const pageMapStateToProps = store => {
  return {
    page: store.page,
    user: store.user,
  }
}

const pageMapDispatchToProps = dispatch => {
  return {
    getPhotos: year => dispatch(getPhotos(year)),
  }
}

const pageConnector = ReactRedux.connect(
  pageMapStateToProps,
  pageMapDispatchToProps
);
PageContainer = pageConnector(PageContainer);
