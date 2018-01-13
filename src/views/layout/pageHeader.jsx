import React from 'react'
import PropTypes from 'prop-types'
import { Layout, Icon } from 'antd';

const { Header } = Layout;

class PageHeader extends React.PureComponent {

  static PropTypes = {
    collapsed: PropTypes.bool,    // 标题
    onToggle: PropTypes.func      // icon 名字
  }

  render() {

    const { collapsed, onToggle } = this.props

    return <Header style={{ background: '#fff', padding: 0 }}>
      <Icon
        className="trigger"
        type={collapsed ? 'menu-unfold' : 'menu-fold'}
        onClick={onToggle}
      />
    </Header>
  }

}

export default PageHeader