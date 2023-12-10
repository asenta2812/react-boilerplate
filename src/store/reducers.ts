import { combineReducers } from '@reduxjs/toolkit'

import { authSlice } from '@/services/auth'

const reducers = combineReducers({
  auth: authSlice.reducer,
})

export default reducers
