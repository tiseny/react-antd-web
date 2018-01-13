import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { actions as userActionCreators } from '../redux/modules/user'

import { Layout } from 'antd';
import { PageHeader, PageSide } from './layout'

import "antd/dist/antd.min.css";
// 引入common样式
import '../static/css/common.less';

class Main extends React.PureComponent {

	state = {
		collapsed: false
	}

  render() {
  	const { collapsed } = this.state
  	const result = this.checkRouter()
    const children = this.props.children

   	return (
 			result.needLayout ? <Layout className="page-layout">
		   	<PageSide collapsed={collapsed}/>
		    <Layout>
		      <PageHeader collapsed={collapsed} onToggle={this.handleToggle.bind(this)}/>
		      <Layout.Content style={{ margin: '24px 16px',height: '100%' }}>
		        <div style={{ padding: 24, background: '#fff', minHeight: 360, height: '100%'}}>
		          {children}
		        </div>
		      </Layout.Content>
		    </Layout>
	  	</Layout> : children
	  )
  }

  handleToggle() {
  	this.setState({
  		collapsed: !this.state.collapsed
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
