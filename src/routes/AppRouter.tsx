import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { AuthLayout, Home, MainLayout, NotFound, SignIn, SignUp } from '@/views'

import ProtectedRoute from './ProtectedRoute'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public route */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
        </Route>

        {/* Protected route */}
        <Route element={<ProtectedRoute isAllowed={true} />}>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
