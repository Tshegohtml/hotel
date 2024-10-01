import { configureStore , combineReducers } from '@reduxjs/toolkit'
import authReducer from './authSlice';
import dbSlice from './dbslice';
import AdminSlice from './AdminSlice'

const rootReducer = combineReducers({
    auth: authReducer,
    data: dbSlice,
    admin:AdminSlice
  });
  export const store = configureStore({
    reducer: rootReducer,
});