export const _login = (state, action) => {
  state.isAuthenticated = true;
  state.user = action.payload;
};

export const _logout = (state) => {
  state.isAuthenticated = false;
  state.user = {};
};