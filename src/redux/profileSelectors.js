const getProfilePageSelector = (state) => {
  return state.profilePage;
};

export const getProfile = (state) => {
  return getProfilePageSelector(state).profile;
};

export const getUserStatus = (state) => {
  return getProfilePageSelector(state).status;
};
