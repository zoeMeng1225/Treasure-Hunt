import React, { Component } from 'react';

import { Col, message, Row } from 'antd';
import { Form, Input, Button, Checkbox } from 'antd';
import Logo from 'assets/logos/th_logo.svg';

import SplitLayout from '../SplitLayout/SplitLayout.js';
import LoginPhoto from 'assets/images/login_img.jpg';

import { Link } from 'react-router-dom';
import axios from 'axios';

class Login extends Component {
  onFinish(userData) {
    console.log(userData);
    //console.log('finished')
    //const{ username, password} = values;
    const opt = {
      method: 'POST',
      url: '/login',
      data: {
        user_id: userData['student-email'],
        password: userData.password,
      },
      headers: { 'Content-Type': 'application/json' },
    };
    axios(opt)
      .then((res) => {
        if (res.status == 200) {
          const { data } = res;
          //redirect to Home Page
        }
      })
      .catch((err) => {
        console.log('login failed: ', err.message);
        //send an error message
      });
  }

  onFinishFailed() {
    console.log('failed');
  }

  render() {
    return (
      <div id="login-view">
        <img id="logo" src={Logo} />
        <SplitLayout src={LoginPhoto} content="left">
          <Row className="lv_form-container" justify="center" align="middle">
            <div className="lv_form">
              <div className="lv_form-header"> LOGIN </div>

              <Form
                name="login-form"
                layout="vertical"
                initialValues={{ remember: true }}
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
                requiredMark={false}
              >
                <Form.Item
                  className="lv_form-item"
                  label="Username"
                  name="username"
                  rules={[{ required: true, message: 'Username is required' }]}
                >
                  <Input placeholder="Username" />
                </Form.Item>

                <Form.Item
                  className="lv_form-item"
                  label="Password"
                  name="password"
                  rules={[{ required: true, message: 'Password is required' }]}
                >
                  <Input.Password placeholder="Password" />
                </Form.Item>

                <Form.Item>
                  <Button id="login-button" block htmlType="submit">
                    Login
                  </Button>
                </Form.Item>

                <div>
                  <span>Not registered yet? </span>
                  <Link to="/signup">Create an Account</Link>
                </div>
              </Form>
            </div>
          </Row>
        </SplitLayout>
      </div>
    );
  }
}

export default Login;
