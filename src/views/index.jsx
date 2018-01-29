import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { actions as userActionCreators } from '../redux/modules/user'
import { browserHistory, Link } from 'react-router';
import { Layout, message, Breadcrumb  } from 'antd';
import { PageHeader, PageSide } from './layout'

import Cookies from 'js-cookie'

import "antd/dist/antd.min.css";
// 引入common样式
import '../static/css/common.less';

class Main extends React.PureComponent {

	state = {
		collapsed: false,
    navbars: []
	}

  componentWillMount() {
    const username = localStorage.getItem('username')
    const pathname = window.location.pathname

    if (!!username && new RegExp('^/login.*').test(pathname)) {
      browserHistory.push('/')
    }
  }

  componentWillReceiveProps(nextProps) {
    const pathname = this.props.location.pathname
    const nextPathName =  nextProps.location.pathname
    
    if (pathname !== nextPathName) {
      this.setState({
        navbars: []
      })
    }
  }

  render() {
  	const { collapsed, navbars } = this.state
  	const result = this.checkRouter()
    const children = this.props.children
    const childProps = {
      onChangeNavBar: this.handleInitNavbars.bind(this)
    }

   	return (
 			result.needLayout ? <Layout className="page-layout">
		   	<PageSide collapsed={collapsed} />
		    <Layout>
		      <PageHeader 
            collapsed={collapsed} 
            onToggle={this.handleToggle.bind(this)}
            onlogout={this.handleLogout.bind(this)}
          />
		      <Layout.Content style={{ margin: '20px',height: '100%' }}>
            {navbars.length > 0 && 
              <Breadcrumb style={{height: '40px'}}>
                {
                  navbars.map((item, key) => 
                    <Breadcrumb.Item key={key}>
                      {
                        item.link ? <Link to={item.link}>{item.name}</Link> : item.name
                      }
                    </Breadcrumb.Item>
                  ) 
                }
              </Breadcrumb>
            }
		        <div style={{ background: '#fff',  minHeight: 360, height: navbars.length > 0 ? "calc(100% - 40px)" : '100%'}}>
		          {React.cloneElement(children, childProps)}
		        </div>
		      </Layout.Content>
		    </Layout>
	  	</Layout> : children
	  )
  }

  handleInitNavbars(navbars) {
    this.setState({
      navbars
    })
  }

  handleToggle() {
  	this.setState({
  		collapsed: !this.state.collapsed
  	})
  }

  handleLogout() {
    this.props.actions.logout({
      uid: Cookies.get('uid'),
      session_id: Cookies.get('session_id')
    },json => {
      if (json.status) {
        // 清楚 cookie
        Cookies.remove('username')
        Cookies.remove('uid')
        Cookies.remove('session_id')
        // 复制一份。用作前端判断是否有登录的凭据
        Cookies.remove('token')

        browserHistory.push('/login')
      } else {
        message.error(json.msg)
      }
    })
   
  }

  // 检查路由
  checkRouter() {
    const pathname = window.location.pathname

    let needLayout = true

    // 遍历 名单
    for(let i = 0; i < this.UN_CHILD_PAGE.length; i ++) {
      if (new RegExp(this.UN_CHILD_PAGE[i]).test(pathname)) {
        needLayout = false
        break;
      }
    }

    return {
      needLayout  // 是否是子页面，
    }
  }

  UN_CHILD_PAGE = ['^/login.*', '^/register.*']
}

const stateToProps = state => ({
  ...state.user
})

const dispatchToProps = dispatch => ({
  actions: bindActionCreators(userActionCreators, dispatch)
})

export default connect(stateToProps, dispatchToProps)(Main);
