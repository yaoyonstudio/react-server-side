// 获取文章列表函数
const getPosts = (params, fn) => {
  return ajax(`${apiUrl}/posts?page=${params.page}&per_page=${params.pagesize}`, 'GET', {}, fn)
}
