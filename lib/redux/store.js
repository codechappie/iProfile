import { postApi } from '@/lib/redux/services/post'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import userSlice from './userSlice'
import store from '@/lib/redux/store'

export default configureStore({
  reducer: {
    userSlice,
    [postApi.reducerPath]: postApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([postApi.middleware])
});

setupListeners(store.dispatch)