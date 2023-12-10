import './styles.scss'

import { Row, theme } from 'antd'
import { Navigate, Outlet } from 'react-router-dom'

import { authSelector } from '@/services/auth'
import { useAppSelector } from '@/store'
const AuthLayout = () => {
  const t = theme.useToken()
  const auth = useAppSelector(authSelector)

  if (auth.isAuth) {
    return <Navigate to="/" replace />
  }

  return (
    <Row
      justify="center"
      align="middle"
      className="auth_layout"
      style={{ background: t.token.colorBgContainerDisabled }}
    >
      <Outlet />
    </Row>
  )
}

export default AuthLayout
