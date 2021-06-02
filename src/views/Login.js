import React, {Component} from 'react';

import {Col, Row } from 'antd';
import { Form, Input, Button, Checkbox } from 'antd';

import SplitLayout from '../components/SplitLayout/SplitLayout.js';
import LoginPhoto from '../assets/images/login_img.jpg'

import { Link } from 'react-router-dom';

class Login extends Component {

    onFinish() {
        console.log('finished')
    }

    onFinishFailed() {
        console.log('failed')
    }

    render() {
        return (
            <SplitLayout
                src={ LoginPhoto }
                content="left"
            >
                <Row className="form-container" justify="center" align="middle">
                    <div className="form">
                        <div className="form-header"> LOGIN </div>

                        <Form
                            name="login-form"
                            layout="vertical"
                            initialValues={{ remember: true }}
                            onFinish={this.onFinish}
                            onFinishFailed={this.onFinishFailed}
                            requiredMark={false}
                        >
                            <Form.Item
                                className="form-item"
                                label="Student Email"
                                name="student-email"
                                rules={[{ required: true, message: 'Student Email is required' }]}
                            >
                                <Input placeholder="Enter your student email" />
                            </Form.Item>

                            <Form.Item
                                className="form-item"
                                label="Password"
                                name="password"
                                rules={[{ required: true, message: 'Password is required' }]}
                            >
                                <Input.Password placeholder="Enter password" />
                            </Form.Item>

                            <Form.Item>
                                <Button id="login-button" block>
                                    Login
                                </Button>
                            </Form.Item>

                            <div>
                                <span>Not registered yet? </span>
                                <Link
                                    to="/signup"
                                >
                                    Create an Account
                                </Link>
                            </div>
                        </Form>
                    </div>
                </Row>
            </SplitLayout>
        );
    }
}

export default Login;