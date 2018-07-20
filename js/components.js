// 文章列表条目组件
const PostItem = props => {
  return e('li', { className: 'post-item' }, props.title)
}

// 文章列表组件
class PostList extends React.Component {
  constructor () {
    super()
    this.state = {
      page: 1,
      pagesize: 6,
      loading: false,
      list: []
    }
  }

  componentWillMount () {
    this.setState({
      loading: true
    })
    getPosts({ page: this.state.page, pagesize: this.state.pagesize }, res => {
      if (res && res.length) {
        this.setState({
          loading: false,
          list: res
        })
      }
    })
  }

  render () {
    return e('ul', { className: 'post-list' }, [this.state.list.map((item, index) => {
      return e(PostItem, { key: index, title: item.title })
    }), this.state.loading && e('img', { key: 'post-loading', className: 'post-loading', src: 'img/loading.svg' })])
  }
}

