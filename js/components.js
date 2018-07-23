// 文章列表条目组件
const PostItem = props => {
  return e('li', { className: 'flex-r flex-s-b post-item' }, [
    e('img', { key: 'post-item-img', src: props.data.thumbnailurl }),
    e('aside', { key: 'post-item-aside', className: 'flexItem' }, [
      e('h4', { key: 'post-item-title' }, props.data.title),
      e('div', { key: 'post-item-excerpt', className: 'post-item-excerpt', dangerouslySetInnerHTML: { __html: props.data.excerpt } }),
      e('footer', { key: 'post-footer', className: 'post-footer' }, [
        e('span', { key: 'post-item-date'}, props.data.datestr)
      ])
    ])
  ])
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
      return e(PostItem, { key: index, data: item })
    }), this.state.loading && e('img', { key: 'post-loading', className: 'post-loading', src: 'img/loading.svg' })])
  }
}


// 头部组件
const SiteHeader = props => {
  return  e('main', { className: 'flex-r flex-c-b main' }, [
    e('h1', { key: 'site-title', className: 'site-title' }, props.title),
    e('nav', { key: 'site-menu', className: 'site-menu'}, [props.menus.map((menu, index) => {
      return e('a', { key: index, className: 'site-menu-link', href: menu.link }, menu.title)
    })])
  ])
}


// 底部组件
const SiteFooter = props => {
  return e('main', { className: 'main' },
    e('p', { dangerouslySetInnerHTML: { __html: '&copy; 2018 版权所有' } })
  )
}




