import { useDispatch } from 'react-redux'

import { authApi } from '@/pages/Layouts/authApi'
import { baseApi } from '@/shared'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(baseApi.middleware).concat(authApi.middleware),
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
})
setupListeners(store.dispatch)
// test
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
