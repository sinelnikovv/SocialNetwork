import { createSlice } from "@reduxjs/toolkit";
import { updateObjectInArr } from "../utils/objectsHelper";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
  },
  reducers: {
    setUsers(state, action) {
      state.users = action.users;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.currentPage;
    },
    setUsersTotalCount(state, action) {
      state.totalUsersCount = action.totalUsersCount;
    },
    follow(state, action) {
      state.users = updateObjectInArr(state.users, action.userId, "id", {
        followed: true,
      });
    },
    unfollow(state, action) {
      state.users = updateObjectInArr(state.users, action.userId, "id", {
        followed: false,
      });
    },
    toggleIsFetching(state, action) {
      state.isFetching = action.isFetching;
    },
    toggleFollowingProgress(state, action) {
      if (action.isFetching) {
        state.followingInProgress.push(action.userId);
      } else state.followingInProgress.filter((id) => id !== action.userId);
    },
  },
});

export const {
  setUsers,
  setCurrentPage,
  setUsersTotalCount,
  follow,
  unfollow,
  toggleIsFetching,
  toggleFollowingProgress,
} = usersSlice.actions;
export default usersSlice.reducer;
