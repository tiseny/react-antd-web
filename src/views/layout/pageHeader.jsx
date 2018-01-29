import React from 'react'
import PropTypes from 'prop-types'
import { Layout, Icon, Menu } from 'antd'
import Cookies from 'js-cookie';
const SubMenu = Menu.SubMenu;
const Header = Layout.Header;

class PageHeader extends React.PureComponent {

  static PropTypes = {
    collapsed: PropTypes.bool,    // 标题
    onToggle: PropTypes.func      // icon 名字
  }

  render() {
    const { collapsed, onToggle, onlogout } = this.props
    const username = Cookies.get('username') || ''

    return <Header style={{ background: '#fff', padding: 0 }}>
      <Icon
        className="trigger"
        type={collapsed ? 'menu-unfold' : 'menu-fold'}
        onClick={onToggle}
      />
      <Menu mode="horizontal" onClick={onlogout} className="layout-header-menu">
        <SubMenu title={<span><Icon type="user" />{username}</span>}>
          <Menu.Item key="logout">注销</Menu.Item>
        </SubMenu>
      </Menu>
    </Header>
  }

}

export default PageHeader