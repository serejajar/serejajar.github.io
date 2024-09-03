[
  'header',
  '.tm-base-layout__header',
  '.tm-page__sidebar',
  '.tm-article-presenter__footer',
  '.tm-footer-menu',
  '.tm-footer'
].forEach((selector) => {
  document.querySelector(selector)?.remove()
})

document.querySelector('.article-formatted-body').style.fontSize = '12px'
