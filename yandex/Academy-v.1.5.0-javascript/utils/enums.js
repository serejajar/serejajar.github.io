const PageEnum = {
  SiteWrapper: {
    // Можно лучше: при использовании получаются слишком длинные названия PageEnum.SiteWrapper.SEARCH, что влияет на читаемость кода. Также названия свойств в верхнем регистре лучше избегать, чтобы не возникало путаницы с константами.
    SEARCH: document.querySelector(`.columns__search-item`),
    rating: document.querySelector(`.columns__rating`)
  }
};
