import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { actions as userActionCreators } from '../redux/modules/user'

import "antd/dist/antd.min.css";
// 引入common样式
import '../static/css/common.less';


class Main extends React.PureComponent {

  render() {
    const children = this.props.children
   
    return children
  }

}

const stateToProps = state => ({
  ...state.user
})

const dispatchToProps = dispatch => ({
  actions: bindActionCreators(userActionCreators, dispatch)
})

export default connect(stateToProps, dispatchToProps)(Main);
