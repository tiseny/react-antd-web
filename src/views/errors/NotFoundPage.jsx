import React from 'react'
import classNames from 'classnames';
import { Button } from 'antd';
import './index.less';

class NotFoundPage extends React.PureComponent {
  render() {
    return (
      <div className="exception">
	      <div className="imgBlock">
	        <div
	          className="imgEle"
	          style={{ backgroundImage: `url('https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg')` }}
	        />
	      </div>
	      <div className="content">
	        <h1>404</h1>
	        <div className="desc">抱歉，你访问的页面不存在</div>
	        <div className="actions">
	          <Button type="primary">返回首页</Button>
	        </div>
	      </div>
	    </div>
    )
  }
}

export default NotFoundPage

