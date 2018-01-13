import React from 'react'
import classNames from 'classnames';
import { Button } from 'antd';
import './index.less';

class NoRights extends React.PureComponent {
  render() {
    return (
      <div className="exception">
	      <div className="imgBlock">
	        <div
	          className="imgEle"
	          style={{ backgroundImage: `url('https://gw.alipayobjects.com/zos/rmsportal/wZcnGqRDyhPOEYFcZDnb.svg')` }}
	        />
	      </div>
	      <div className="content">
	        <h1>403</h1>
	        <div className="desc">抱歉，您没有权限访问。</div>
	        <div className="actions">
	          <Button type="primary">返回首页</Button>
	        </div>
	      </div>
	    </div>
    )
  }
}

export default NoRights