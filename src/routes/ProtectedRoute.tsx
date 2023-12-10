import { Navigate, Outlet } from 'react-router-dom'

import { authSelector } from '@/services/auth'
import { useAppSelector } from '@/store'

interface IProtectedRouteProps {
  isAllowed?: boolean
}

const ProtectedRoute = ({ isAllowed }: IProtectedRouteProps) => {
  const auth = useAppSelector(authSelector)
  if (isAllowed && auth.isAuth) {
    return <Outlet />
  }

  return <Navigate to="/auth/sign-in" />
}

export default ProtectedRoute
