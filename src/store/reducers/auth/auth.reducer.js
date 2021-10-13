import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: null,
  user: {}
};

export const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = {};
    },
  }
});

export const { login, logout } = authReducer.actions;
export default authReducer.reducer;