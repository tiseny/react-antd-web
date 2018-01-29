import React from 'react'
import { Layout, Menu, Icon } from 'antd';

import { Link } from 'react-router';

import { SIDE_MENU } from '../../constants'

const Sider = Layout.Sider;
const SubMenu = Menu.SubMenu;

class PageSide extends React.PureComponent {

  state = {
    current: ''
  }

  componentWillReceiveProps(nextProps) {
    let current = this.currentRouter()

    this.setState({
      current
    })
  }

  componentDidMount() {
    let current = this.currentRouter()

    this.setState({
      current
    })
  }

  render() {
    const { collapsed } = this.props

    return  <Sider
      trigger={null}
      collapsible
      width={256}
      collapsed={collapsed}
    >
      <div className="logo">
        <a href="/">
          <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"/>
          <h1>买塑网<span></span></h1>
        </a>
      </div>
      <div className="menu-wrap">
        <Menu
          theme="dark"
          onClick={this.handleClick}
          defaultOpenKeys={[this.state.current]}
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
      </div>
    </Sider>
  }

  handleClick = (e) => {
    this.setState({
      current: e.key
    });
  }

  currentRouter = () => {
    const pathname = window.location.pathname
    let current = ''
    // 如果是以前缀为
    SIDE_MENU.forEach((item, key) => {
      item.sub.forEach((subitem, subkey) => {
        if (pathname.indexOf(subitem.router) === 0) {
          current = `${key}-${subkey}`
          return;
        }
      })
    })
    return current
  }
}

export default PageSide