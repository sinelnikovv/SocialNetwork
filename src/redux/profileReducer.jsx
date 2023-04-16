import { profileApi, usersApi } from "../api/api";

//variables for action types
const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-STATUS";
//init state
let initialState = {
  posts: [
    { id: 1, message: "Hi, gow are you", likesCount: 12 },
    { id: 2, message: "Fine", likesCount: 5 },
    { id: 3, message: "good", likesCount: 0 },
    { id: 4, message: "ok", likesCount: 3 },
  ],
  profile: null,
  status: "",
};
//reducer
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: action.newPost,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      };

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };

    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };

    default:
      return state;
  }
};
//action creators
export const addPostActionCreator = (newPost) => {
  return {
    type: ADD_POST,
    newPost,
  };
};

export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile,
  };
};

export const setStatus = (status) => {
  return {
    type: SET_STATUS,
    status,
  };
};

//thunks

export const getUserProfile = (userId) => async (dispatch) => {
  let response = await usersApi.getProfile(userId);

  dispatch(setUserProfile(response.data));
};

export const getStatus = (userId) => async (dispatch) => {
  let response = await profileApi.getStatus(userId);
  dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
  let response = await profileApi.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export default profileReducer;
