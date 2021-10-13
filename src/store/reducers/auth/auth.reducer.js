import { createSlice } from '@reduxjs/toolkit';
import { _login, _logout } from './auth.action';

const initialState = {
  isAuthenticated: null,
  user: {}
};

export const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: _login,
    logout: _logout,
  }
});

export const { login, logout } = authReducer.actions;
export default authReducer.reducer;