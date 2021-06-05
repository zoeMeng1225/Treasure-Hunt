import React, {Component} from 'react';

import {Col, Row } from 'antd';
import { Form, Input, Button, Checkbox } from 'antd';

import SplitLayout from '../SplitLayout/SplitLayout';
import SignUpPhoto from '../../../assets/images/signup_img.jpg'

import { Link } from 'react-router-dom';
import axios from "axios";

class SignUp extends Component {

    onFinish(userData) {
        console.log(userData)
        // const opt = {
        //     method:"POST",
        //     url: "/signup",
        //     data:{
        //         email: userData["student-email"],
        //         user_id: userData["student-email"], 
        //         password: userData.password,
        //         //first_name: userData.first_name,
        //         //
        //     },
        //     headers: {"Content-Type": "application/json"}
        // };
        // axios(opt)
        //     .then((res) => {
        //         if (res.status == 200){
        //             const {data} = res;
        //             //redirect to Home Page 
        //         }
        //     })
        //     .catch((err) => {
        //         console.log("login failed: ", err.message);
        //         //send an error message
        //     });
        }

    onFinishFailed() {
        console.log('failed')
    }

    render() {
        return (
            <SplitLayout
                src={ SignUpPhoto }
                content="right"
            >
                <Row className="form-container" justify="center" align="middle">
                    <div className="form">
                        <div className="form-header"> Sign Up </div>

                        <Form
                            name="signup-form"
                            layout="vertical"
                            initialValues={{ remember: true }}
                            onFinish={this.onFinish}
                            onFinishFailed={this.onFinishFailed}
                            requiredMark={false}
                        >

                            <Form.Item
                                className="form-item"
                                name="username"
                                label="Username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Username is required',
                                    },
                                ]}
                                hasFeedback
                            >
                                <Input placeholder="Username"/>
                            </Form.Item>

                            <Form.Item
                                className="form-item"
                                name="email"
                                label="Email"
                                rules={[
                                    {
                                        type: 'email',
                                        message: 'The inputted value is not a valid email',
                                    },
                                    {
                                        required: true,
                                        message: 'Email is required',
                                    },
                                ]}
                            >
                                <Input placeholder="Email"/>
                            </Form.Item>

                            <Form.Item
                                className="form-item"
                                name="password"
                                label="Password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Password is required',
                                    },
                                ]}
                                hasFeedback
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item
                                className="form-item"
                                name="confirm"
                                label="Confirm Password"
                                dependencies={['password']}
                                hasFeedback
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please confirm your password!',
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue('password') === value) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject(new Error('Passwords do not match'));
                                        },
                                    }),
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Row>
                                <Col
                                    span={11}
                                >
                                    <Form.Item
                                        className="form-item"
                                        label="First Name"
                                        name="first-name"
                                        rules={[{ required: true, message: 'First Name is required' }]}
                                    >
                                        <Input placeholder="First Name" />
                                    </Form.Item>
                                </Col>
                                <Col
                                    span={11}
                                    offset={2}
                                >
                                    <Form.Item
                                        className="form-item"
                                        label="Last Name"
                                        name="last-name"
                                        rules={[{ required: true, message: 'Last Name is required' }]}
                                    >
                                        <Input placeholder="Last Name" />
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Form.Item
                                className="form-item"
                                label="Address Line"
                                name="address-line-1"
                                rules={[{ required: true, message: 'Address is required' }]}
                            >
                                <Input placeholder="Address Line" />
                            </Form.Item>

                            <Row>
                                <Col
                                    span={10}
                                >
                                    <Form.Item
                                        className="form-item"
                                        label="City"
                                        name="city"
                                        rules={[{ required: true, message: 'City is required' }]}
                                    >
                                        <Input placeholder="City" />
                                    </Form.Item>
                                </Col>
                                <Col
                                    span={4}
                                    offset={2}
                                >
                                    <Form.Item
                                        className="form-item"
                                        label="State"
                                        name="state"
                                        rules={[{ required: true, message: 'State is required' }]}
                                    >
                                        <Input placeholder="State" />
                                    </Form.Item>
                                </Col>
                                <Col
                                    span={6}
                                    offset={2}
                                >
                                    <Form.Item
                                        className="form-item"
                                        label="Zip Code"
                                        name="zipcode"
                                        rules={[{ required: true, message: 'Zip Code is required' }]}
                                    >
                                        <Input placeholder="Zip Code" />
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Form.Item>
                                <Button id="signup-button" block htmlType="submit">
                                    Sign up
                                </Button>
                            </Form.Item>

                            <div>
                                <span>Already have an Account? </span>
                                <Link
                                    to="/login"
                                >
                                    Login
                                </Link>
                            </div>
                        </Form>
                    </div>
                </Row>
            </SplitLayout>
        );
    }
}

export default SignUp;