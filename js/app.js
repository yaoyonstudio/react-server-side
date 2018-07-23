$(document).ready(() => {
  console.log('document ready')

  const siteTitle = 'React Server Side demo'
  const siteMenus = [
  	{ id: 1, link: 'index.html', title: '首页'},
  	{ id: 2, link: 'about.html', title: '关于我们'}
]

  // 渲染头部组件
  ReactDOM.render(e(SiteHeader, { title: siteTitle, menus: siteMenus }), document.getElementById('site-header'))

  ReactDOM.render(e(SiteFooter, {}), document.getElementById('site-footer'))

})

