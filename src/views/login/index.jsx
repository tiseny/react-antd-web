import React, { Component } from 'react'; 
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { actions as userActionCreators } from '../../redux/modules/user'

import { Spin, Form, Input, Button, message } from 'antd';
import './index.less';

const FormItem = Form.Item;

@Form.create()
class Login extends React.PureComponent {

  constructor(props) {
  	super(props);
  	this.state = {
  		passwordDirty: false,
  		loginBtnText: '登录'
  	};
  }

	render() {
    const { loginPending, form } = this.props;
    const getFieldDecorator = form.getFieldDecorator;

		return (
			<div className="login-container">	
				<div className="inner-background"></div>
				<div className="login-form">
					<Spin tip="载入中..." spinning={loginPending}>
						<div className="login-logo">
				       <span>Ant Design</span>
				    </div>
						<Form onSubmit={this.handleSubmit.bind(this)}>
			        <FormItem hasFeedback>
                {getFieldDecorator('username', { 
                	initialValue: 'admin', 
                	rules: [
                		{ required: true, message: '用户名不能为空' }, 
                	]})(
                  <Input size="large" placeholder="用户名" />
                )}
			        </FormItem>
			        <FormItem hasFeedback>
                {getFieldDecorator('password', { 
                	rules: [
                		{ required: true, message: '密码不能为空' }
                	]})(
                  <Input size="large" type="password" placeholder="密码" />
                )}
			        </FormItem>
			        <FormItem>
			          <Button 
			          	type="primary" 
			          	htmlType="submit" 
			          	size="large" 
			          	loading={loginPending}
			          >
			          	{loginPending ? '登录中...' : '登录'}
			          </Button>
			        </FormItem>
			        <div className="login-account">
                <span>账号：admin</span>
                <span>密码：123456</span>
			        </div>
		        </Form>
	        </Spin>
				</div>
			</div>
		)
	}

	handleSubmit(e) { // 登录
  	e.preventDefault();

    const {actions, form} = this.props;

    localStorage.removeItem('username')

    form.validateFieldsAndScroll((err, values) => {
	    if (!err) {
	    	let username = values.username
	    	let password = values.password

	    	if (username === 'admin' && password === '123456') {
	    		actions.login({
	    			username,
	    			password
	    		})		

	    		// 
	    		localStorage.setItem('username', username)

	    		browserHistory.push('/')

	    	} else{

	    		message.error('用户名或者密码错误')
	    	}
	    }
    });
	}

}

const stateToProps = state => ({
  ...state.user
})

const dispatchToProps = dispatch => ({
  actions: bindActionCreators(userActionCreators, dispatch)
})

export default connect(stateToProps, dispatchToProps)(Login);