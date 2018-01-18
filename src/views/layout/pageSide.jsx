import React from 'react'
import { Layout, Menu, Icon } from 'antd';

import { Link } from 'react-router';

import { SIDE_MENU } from '../../constants'

const Sider = Layout.Sider;
const SubMenu = Menu.SubMenu;

class PageSide extends React.PureComponent {

  state = {
    current: '1'
  }

  render() {
    const { collapsed } = this.props

    return  <Sider
      trigger={null}
      collapsible
      collapsedWidth={47}
      collapsed={collapsed}
    >
      <div className="logo" />
      <Menu
        theme="dark"
        onClick={this.handleClick}
        defaultOpenKeys={['sub1']}
        selectedKeys={[this.state.current]}
        mode="inline"
      >
        {
          SIDE_MENU.map((item, key) => 
            <SubMenu key={key} title={<span><Icon type={item.icon} /><span>{item.name}</span></span>}>
              {
                item.sub.map((subItem, subkey) => 
                  <Menu.Item key={`${key}-${subkey}`}>
                    <Link to={subItem.router}>
                     {subItem.name}
                    </Link>
                  </Menu.Item>
                )
              }
            </SubMenu>
          )
        }
      </Menu>
    </Sider>
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
}

export default PageSide