import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counterSlice';
import userIncomeReducer from '../features/userIncomeSlice';
import { apiSlice } from '../features/api/apiSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    userIncome: userIncomeReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});