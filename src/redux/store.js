import { configureStore , combineReducers } from '@reduxjs/toolkit'
import authReducer from './authSlice';

import dbSlice from './dbslice';

const rootReducer = combineReducers({
    auth: authReducer,
    data: dbSlice,
  });
  export const store = configureStore({
    reducer: rootReducer,
});