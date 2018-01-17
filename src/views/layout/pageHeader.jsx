import React from 'react'
import PropTypes from 'prop-types'
import { Layout, Icon, Menu } from 'antd'

const SubMenu = Menu.SubMenu;
const Header = Layout.Header;

class PageHeader extends React.PureComponent {

  static PropTypes = {
    collapsed: PropTypes.bool,    // 标题
    onToggle: PropTypes.func      // icon 名字
  }

  render() {

    const { collapsed, onToggle, logout } = this.props

    return <Header style={{ background: '#fff', padding: 0 }}>
      <Icon
        className="trigger"
        type={collapsed ? 'menu-unfold' : 'menu-fold'}
        onClick={onToggle}
      />
      <Menu mode="horizontal" onClick={logout} className="layout-header-menu">
        <SubMenu title={<span><Icon type="user" />admin</span>}>
          <Menu.Item key="logout">注销</Menu.Item>
        </SubMenu>
      </Menu>
    </Header>
  }

}

export default PageHeader