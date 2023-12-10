import { Button, Card, Form, Input } from 'antd'
import type { ValidateErrorEntity } from 'rc-field-form/lib/interface'
import { useNavigate } from 'react-router-dom'

import { login } from '@/services/auth'
import { useAppDispatch } from '@/store'

type FieldType = {
  username?: string
  password?: string
}

const SignInPage = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const onFinish = (values: FieldType) => {
    dispatch(login(values))
    navigate('/', { replace: true })
  }

  const onFinishFailed = (errorInfo: ValidateErrorEntity<FieldType>) => {
    console.log('Error: ', errorInfo)
  }
  return (
    <Card title="Sign In" hoverable bordered>
      <Form<FieldType>
        name="sign_in"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  )
}

export default SignInPage
