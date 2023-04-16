const getAuth = (state) => {
  return state.auth;
};

export const getAuthUserId = (state) => {
  return getAuth(state).userId;
};

export const getIsAuth = (state) => {
  return getAuth(state).isAuth;
};
