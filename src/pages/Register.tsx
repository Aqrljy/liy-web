import { Form ,FormInstance ,Input, Button ,Checkbox, Space, message} from 'antd'
import React, { Component, createRef, RefObject } from 'react'
import '../static/css/Register.css'
// import { useNavigate } from 'react-router-dom'


class Register extends Component {

    formRef:RefObject<FormInstance>

    constructor(props: any, context: any){
        super(props, context);
        this.formRef = createRef<FormInstance>()
    }

    // navigate = useNavigate()

    onFinish = (values: any) => {
        console.log('Success:', values);
        const {number,password,confirmPassword} = values
        if(values !== undefined){
            if (number.trim() == "" || password.trim() == "") {
                alert("用户名和密码不能为空!");
                return;
            }
            if (password != confirmPassword) {
                alert("两次输入的密码不一致!");
                return;
            }
            if (number.length > 8) {
                alert("电话号码长度不能超过8个字符!");
                return;
            }
            alert('注册成功！')
            
        }
        
    };
    
    onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    render() {
        return (
            <div id="register">
                <Form
                    id="register-form"
                    ref={this.formRef}
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                    autoComplete="off"
                    size="middle"
                >
                    <Form.Item
                        label="手机号"
                        name="number"
                        rules={[{ required: true, message: 'Please input your number!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="密码"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        label="重复密码"
                        name="confirmPassword"
                        rules={[{ required: true, message: 'Please input your password again!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 12, span: 16 }}>
                        <Space>
                            <Button type="primary" htmlType="submit" id="myButton">
                            注册
                            </Button>
                        </Space>
                        
                    </Form.Item>
                    
                    <Form.Item name="remember" valuePropName="checked" style={{ textAlign: 'left' }} wrapperCol={{ offset: 8, span: 16 }}>
                        <Checkbox style={{ color: '#CCCCCC' }}>我已阅读并同意《<a>用户服务协议</a>》</Checkbox>
                    </Form.Item>

                </Form>   
            </div>
        )
    }
}

export default Register;
