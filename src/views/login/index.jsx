import React, { Component } from 'react'; // 引入了React
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
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

	handleSubmit = (e) => { // 登录
  	e.preventDefault();
      const {actions, form} = this.props;
    form.validateFieldsAndScroll((err, values) => {
	    if (!err) {
        let username = values.username, // 用户名
            password = values.password, // 密码
            loginParams = { // 登录参数
                username: username,
                password: password	
            };
	    }
    });
	}

	// 验证用户名
	checkUsername = (rule, value, callback) => {
		const form = this.props.form;
      if (!value) {
        callback();
      } else if (!Config.checkEng(value)) {
    		callback(Config.message.usernameEng);
	    } else {
	    	callback();
	    }
	}

	// 验证密码
	checkPassword = (rule, value, callback) => {
		const form = this.props.form;
	    if (value && this.state.passwordDirty) {
	    	form.validateFields(['confirm'], { force: true });
	    }
	    callback();
	}

	render() {
    const { loading, loginInfo, form } = this.props;
    const getFieldDecorator = form.getFieldDecorator;

		return (
			<div className="login-container">	
				<div className="inner-background"></div>
				<div className="login-form">
					<Spin tip="载入中..." spinning={false}>
						<div className="login-logo">
				       <span>Ant Design</span>
				    </div>
						<Form onSubmit={this.handleSubmit}>
			        <FormItem hasFeedback>
                {getFieldDecorator('username', { 
                	initialValue: 'sosout', 
                	rules: [
                		{ required: true, message: '' }, 
                		{ validator: this.checkUsername }
                	]})(
                  <Input size="large" placeholder="用户名" maxLength="6" />
                )}
			        </FormItem>
			        <FormItem hasFeedback>
                {getFieldDecorator('password', { 
                	rules: [
                		{ required: true, message: '' }, 
                		{ validator: this.checkPassword }
                	]})(
                  <Input size="large" type="password" placeholder="密码" maxLength="6" />
                )}
			        </FormItem>
			        <FormItem>
			          <Button 
			          	type="primary" 
			          	htmlType="submit" 
			          	size="large" 
			          	loading={loginInfo && loginInfo.length > 0 ? true : false}
			          >
			          	{loginInfo && loginInfo.length > 0 ? '登录中...' : '登录'}
			          </Button>
			        </FormItem>
			        <div className="login-account">
                <span>账号：sosout</span>
                <span>密码：sosout</span>
			        </div>
		        </Form>
	        </Spin>
				</div>
			</div>
		)
	}
}

export default Login;
