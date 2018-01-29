import React from 'react'
import { Input, Button, Row, Col, Select, DatePicker, Table } from 'antd';
import moment from 'moment';
import ZH_CN from '../../constants/locale'
import './doing.less'

class Doing extends React.PureComponent {

	state = {
		username: '',
		status: '全部', 
		startdate: moment().subtract(1, 'months'),
		enddate: moment()
	}

	componentDidMount() {
		this.props.onChangeNavBar([{
			name: '首页',
			link: '/'
		},{
			name: '我的订单-交易中'
		}])
	}

  render() {
  	const { username, status, startdate, enddate } = this.state

    return <section className="doing-page">
      <div className="form-wrap">
      	<Row>
      		<Col span={4}>
	      		<Input
		          type="text"
		          style={{width: '100%'}}
		          value={username}
		          placeholder="请输入用户名称"
		          onChange={this.handleChange.bind(this, 'username')}
		        />
	        </Col>
	        <Col span={4}>
	      		<DatePicker 
	      			value={moment(startdate,'YYYY-MM-DD')} 
	      			style={{display: 'inline-block'}}
	      			onChange={this.handleChange.bind(this, 'startdate')} 
	      			format="YYYY-MM-DD"
	      			locale={ZH_CN}
	      		/> 
	        </Col>
	        <Col span={1}>-</Col>
	        <Col span={4}>
	        	<DatePicker 
	      			value={moment(enddate,'YYYY-MM-DD')} 
	      			style={{display: 'inline-block'}}
	      			onChange={this.handleChange.bind(this, 'enddate')} 
	      			format="YYYY-MM-DD"
	      			locale={ZH_CN}
	      		/>
	        </Col>
	        <Col span={4}>
	      		<Select
	      			style={{width: '100%'}}
		          value={status}
		          onChange={this.handleChange.bind(this, 'status')}
		        >
		        	<Option value="全部">全部</Option>
		          <Option value="已下单">已下单</Option>
		          <Option value="待付款">待付款</Option>
		          <Option value="待发货">待发货</Option>
		        </Select>
	        </Col>
	        <Col span={4}>
	        	<Button type="default">查询</Button>
	        	<Button type="primary">导出</Button>
	        </Col>
      	</Row>
      </div>
      <div className="main-wrap">
      	{this.renderTable()}
      </div>
    </section>
  }

  renderTable() {
  	const dataSource = [{
		  key: '1',
		  name: '胡彦斌',
		  age: 32,
		  address: '西湖区湖底公园1号'
		}, {
		  key: '2',
		  name: '胡彦祖',
		  age: 42,
		  address: '西湖区湖底公园1号'
		},{
		  key: '12',
		  name: '胡彦斌',
		  age: 32,
		  address: '西湖区湖底公园1号'
		}, {
		  key: '23',
		  name: '胡彦祖',
		  age: 42,
		  address: '西湖区湖底公园1号'
		},{
		  key: '145',
		  name: '胡彦斌',
		  age: 32,
		  address: '西湖区湖底公园1号'
		}, {
		  key: '267',
		  name: '胡彦祖',
		  age: 42,
		  address: '西湖区湖底公园1号'
		},{
		  key: '17',
		  name: '胡彦斌',
		  age: 32,
		  address: '西湖区湖底公园1号'
		}, {
		  key: '222',
		  name: '胡彦祖',
		  age: 42,
		  address: '西湖区湖底公园1号'
		}];

		const columns = [{ 
			title: '操作', 
			dataIndex: '', 
			key: 'x', 
			width: 100,
			fixed: 'left',
			render: () => <a href="#">Delete</a>
		},{
		  title: '姓名',
		  dataIndex: 'name',
		  key: 'name',
		  width: 120,
		}, {
		  title: '年龄',
		  dataIndex: 'age',
		  key: 'age',
		  width: 100,
		}, {
		  title: '住址',
		  dataIndex: 'address',
		  key: 'address',
		}];

		const rowSelection = {
		  onChange: (selectedRowKeys, selectedRows) => {
		    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
		  },
		  getCheckboxProps: record => ({
		    disabled: record.name === 'Disabled User', // Column configuration not to be checked
		  }),
		};

		const pagination = {
			current: 1,
			pageSize: 20,
			total: 100,
			hideOnSinglePage: true,
			onChange: this.handleChangePage
		}

		const footer = () => {
			return <div>footer</div>
		}

		return <Table 
			dataSource={dataSource}
			rowSelection={rowSelection}
			scroll={{ y: 440, x: 1300 }}
			pagination={pagination}
			footer={footer}
			columns={columns} 
		/>
  }

  handleChangePage() {

  }

  handleChange(field, value) {
  	this.setState({
  		[field]: value
  	})
  }
}

export default Doing