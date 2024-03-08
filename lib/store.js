import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'

export default configureStore({
  reducer: {
    userInfo: userSlice.reducer
  }
})
