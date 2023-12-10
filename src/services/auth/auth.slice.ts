import { createSlice } from '@reduxjs/toolkit'

import type { RootState } from '@/store'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuth: false,
    token: '',
    user: {},
  },
  reducers: {
    login(state, _) {
      state.isAuth = true
      // state.token = action.payload.token;
      // state.user = action.payload.user;
    },
    logout(state) {
      state.isAuth = false
      state.token = ''
      state.user = {}
    },
  },
})

export const { login, logout } = authSlice.actions
export const authSelector = (state: RootState) => state.auth
