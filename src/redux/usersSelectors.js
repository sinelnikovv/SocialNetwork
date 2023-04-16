const getUsersPageSelector = (state) => {
  return state.usersPage;
};

export const getUsers = (state) => {
  return getUsersPageSelector(state).users;
};

export const getPageSize = (state) => {
  return getUsersPageSelector(state).pageSize;
};

export const getTotalUsersCount = (state) => {
  return getUsersPageSelector(state).totalUsersCount;
};

export const getCurrentPage = (state) => {
  return getUsersPageSelector(state).currentPage;
};

export const getIsFetching = (state) => {
  return getUsersPageSelector(state).isFetching;
};

export const getFollowingInProgress = (state) => {
  return getUsersPageSelector(state).followingInProgress;
};
