import React, {Component} from 'react';

import {Col, Row } from 'antd';
import { Form, Input, Button, Checkbox } from 'antd';

import SplitLayout from '../components/SplitLayout/SplitLayout';
import SignUpPhoto from '../assets/images/signup_img.jpg'

import { Link } from 'react-router-dom';

class SignUp extends Component {

    onFinish() {
        console.log('finished')
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
                                name="email"
                                label="Email"
                                rules={[
                                    {
                                        type: 'email',
                                        message: 'The inputted value is not a valid email',
                                    },
                                    {
                                        required: true,
                                        message: 'Please enter your email',
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
                                        message: 'Please input your password',
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

                            <Form.Item
                                className="form-item"
                                label="First Name"
                                name="first-name"
                                rules={[{ required: true, message: 'First Name is required' }]}
                            >
                                <Input placeholder="First Name" />
                            </Form.Item>

                            <Form.Item
                                className="form-item"
                                label="Last Name"
                                name="last-name"
                                rules={[{ required: true, message: 'Last Name is required' }]}
                            >
                                <Input placeholder="Last Name" />
                            </Form.Item>

                            <Form.Item
                                className="form-item"
                                label="Address Line"
                                name="address-line-1"
                                rules={[{ required: true, message: 'Address is required' }]}
                            >
                                <Input placeholder="Address Line 1" />
                            </Form.Item>

                            <Form.Item
                                className="form-item"
                                label="Address Line 2 (Optional)"
                                name="address-line-2"
                            >
                                <Input placeholder="Address Line 2" />
                            </Form.Item>

                            <Form.Item
                                className="form-item"
                                label="City"
                                name="city"
                                rules={[{ required: true, message: 'City is required' }]}
                            >
                                <Input placeholder="City" />
                            </Form.Item>

                            <Row>
                                <Col
                                    span={11}
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
                                    span={11}
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
                                <Button id="signup-button" block>
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





// /// From antd

// import React, { useState } from 'react';
// import { Form, Input, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';

// const { Option } = Select;

// const residences = [
//   {
//     value: 'zhejiang',
//     label: 'Zhejiang',
//     children: [
//       {
//         value: 'hangzhou',
//         label: 'Hangzhou',
//         children: [
//           {
//             value: 'xihu',
//             label: 'West Lake',
//           },
//         ],
//       },
//     ],
//   },
//   {
//     value: 'jiangsu',
//     label: 'Jiangsu',
//     children: [
//       {
//         value: 'nanjing',
//         label: 'Nanjing',
//         children: [
//           {
//             value: 'zhonghuamen',
//             label: 'Zhong Hua Men',
//           },
//         ],
//       },
//     ],
//   },
// ];

// const formItemLayout = {
//   labelCol: {
//     xs: { span: 24 },
//     sm: { span: 8 },
//   },
//   wrapperCol: {
//     xs: { span: 24 },
//     sm: { span: 16 },
//   },
// };
// const tailFormItemLayout = {
//   wrapperCol: {
//     xs: {
//       span: 24,
//       offset: 0,
//     },
//     sm: {
//       span: 16,
//       offset: 8,
//     },
//   },
// };

// const RegistrationForm = () => {
//   const [form] = Form.useForm();

//   const onFinish = (values: any) => {
//     console.log('Received values of form: ', values);
//   };

//   const prefixSelector = (
//     <Form.Item name="prefix" noStyle>
//       <Select style={{ width: 70 }}>
//         <Option value="86">+86</Option>
//         <Option value="87">+87</Option>
//       </Select>
//     </Form.Item>
//   );

//   const [autoCompleteResult, setAutoCompleteResult] = useState<string[]>([]);

//   const onWebsiteChange = (value: string) => {
//     if (!value) {
//       setAutoCompleteResult([]);
//     } else {
//       setAutoCompleteResult(['.com', '.org', '.net'].map(domain => `${value}${domain}`));
//     }
//   };

//   const websiteOptions = autoCompleteResult.map(website => ({
//     label: website,
//     value: website,
//   }));

//   return (
//     <Form
//       {...formItemLayout}
//       form={form}
//       name="register"
//       onFinish={onFinish}
//       initialValues={{
//         residence: ['zhejiang', 'hangzhou', 'xihu'],
//         prefix: '86',
//       }}
//       scrollToFirstError
//     >


//       <Form.Item
//         name="nickname"
//         label="Nickname"
//         tooltip="What do you want others to call you?"
//         rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
//       >
//         <Input />
//       </Form.Item>

//       <Form.Item
//         name="residence"
//         label="Habitual Residence"
//         rules={[
//           { type: 'array', required: true, message: 'Please select your habitual residence!' },
//         ]}
//       >
//         <Cascader options={residences} />
//       </Form.Item>

//       <Form.Item
//         name="phone"
//         label="Phone Number"
//         rules={[{ required: true, message: 'Please input your phone number!' }]}
//       >
//         <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
//       </Form.Item>

//       <Form.Item
//         name="website"
//         label="Website"
//         rules={[{ required: true, message: 'Please input website!' }]}
//       >
//         <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="website">
//           <Input />
//         </AutoComplete>
//       </Form.Item>

//       <Form.Item
//         name="gender"
//         label="Gender"
//         rules={[{ required: true, message: 'Please select gender!' }]}
//       >
//         <Select placeholder="select your gender">
//           <Option value="male">Male</Option>
//           <Option value="female">Female</Option>
//           <Option value="other">Other</Option>
//         </Select>
//       </Form.Item>

//       <Form.Item label="Captcha" extra="We must make sure that your are a human.">
//         <Row gutter={8}>
//           <Col span={12}>
//             <Form.Item
//               name="captcha"
//               noStyle
//               rules={[{ required: true, message: 'Please input the captcha you got!' }]}
//             >
//               <Input />
//             </Form.Item>
//           </Col>
//           <Col span={12}>
//             <Button>Get captcha</Button>
//           </Col>
//         </Row>
//       </Form.Item>

//       <Form.Item
//         name="agreement"
//         valuePropName="checked"
//         rules={[
//           {
//             validator: (_, value) =>
//               value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
//           },
//         ]}
//         {...tailFormItemLayout}
//       >
//         <Checkbox>
//           I have read the <a href="">agreement</a>
//         </Checkbox>
//       </Form.Item>
//       <Form.Item {...tailFormItemLayout}>
//         <Button type="primary" htmlType="submit">
//           Register
//         </Button>
//       </Form.Item>
//     </Form>
//   );
// };

// ReactDOM.render(<RegistrationForm />, mountNode);