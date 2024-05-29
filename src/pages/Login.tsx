import { Form ,FormInstance ,Input, Button ,Checkbox, Space, message} from 'antd'
import React, { Component, createRef, RefObject } from 'react'
import '../static/css/Login.css'
import { login } from '../api/Login'
import { set } from 'src/utils/storage'


class Login extends Component {
    formRef:RefObject<FormInstance>

    constructor(props: any, context: any){
        super(props, context);
        this.formRef = createRef<FormInstance>()
    }

    // login = (form:any) => {
    //     login(form.name,form.password).then(response => {
    //         const {code,msg,data} = response.data;
    //         if(code === 0) {
    //             set('token',data.token)
    //             window.location.href = '/'
    //             //成功
    //             message.success(msg)
    //         }else {
    //             //失败
    //             message.error(msg)
    //         }
    //     })
    // }

    
    onFinish = (values: any) => {
        console.log('Success:', values);
        const {username,password} = values
        if(values !== undefined){
            if(username.trim() === "ljy" && password.trim() === "123"){
                alert('登陆成功！')
            }else{
                alert('用户名或密码输入错误！')
            }
        }
        
    };

    onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    render() {
        return (
            <div id="login">
                <Form
                    id="login-form"
                    ref={this.formRef}
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={this.onFinish}
                    // onFinish={this.login}
                    onFinishFailed={this.onFinishFailed}
                    autoComplete="off"
                    size="middle"
                >
                    <Form.Item
                        label="用户名"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
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

                    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                        <Checkbox>记住密码</Checkbox>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 12, span: 16 }}>
                        <Space>
                            <Button type="primary" htmlType="submit">
                            登录
                            </Button>
                        </Space>
                        
                    </Form.Item>
                </Form>   
            </div>
        )
    }
}

export default Login;