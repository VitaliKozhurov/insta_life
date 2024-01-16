import { useDispatch } from 'react-redux'

import { baseApi, countriesApi } from '@/shared'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(baseApi.middleware) //  TODO remove one base api
      .concat(baseApi.middleware)
      .concat(countriesApi.middleware),
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [countriesApi.reducerPath]: countriesApi.reducer,
  },
})
setupListeners(store.dispatch)
// test
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
