import { Button, Layout } from 'antd'

import { logout } from '@/services/auth'
import { useAppDispatch } from '@/store'

const Header = () => {
  const dispatch = useAppDispatch()
  const handleLogout = () => {
    console.log('logout')
    dispatch(logout())
  }

  return (
    <Layout.Header>
      <Button type="primary" onClick={handleLogout}>
        Logout
      </Button>
    </Layout.Header>
  )
}

export default Header
