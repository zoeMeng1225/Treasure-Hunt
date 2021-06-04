import React, {Component} from 'react';

import {Col, message, Row } from 'antd';
import { Form, Input, Button, Checkbox } from 'antd';

import SplitLayout from '../components/SplitLayout/SplitLayout.js';
import LoginPhoto from '../assets/images/login_img.jpg'

import { Link } from 'react-router-dom';
import axios from "axios";

class Login extends Component {

    onFinish(userData) {
        console.log(userData)
        //console.log('finished')
        //const{ username, password} = values;
        const opt = {
            method:"POST",
            url: "/login",
            data:{
                user_id: userData["student-email"], 
                password: userData.password,
            },
            headers: {"Content-Type": "application/json"}
        };
        axios(opt)
            .then((res) => {
                if (res.status == 200){
                    const {data} = res;
                    //redirect to Home Page 
                }
            })
            .catch((err) => {
                console.log("login failed: ", err.message);
                //send an error message
            });
    };

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
                                <Button id="login-button" block htmlType="submit"> 
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