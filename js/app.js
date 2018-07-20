$(document).ready(() => {
  console.log('document ready')
  
  // 渲染文章列表
  ReactDOM.render(e(PostList), document.getElementById('post-container'))
})

