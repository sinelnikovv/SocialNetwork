import { stopSubmit } from "redux-form";
import { profileApi, usersApi } from "../api/api";

//variables for action types
const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-STATUS";
const SAVE_PHOTO_SUCCESS = "SAVE-PHOTO-SUCCESS";
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

    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
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

export const savePhotoSuccess = (photos) => {
  debugger;
  return {
    type: SAVE_PHOTO_SUCCESS,
    photos,
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

export const savePhoto = (file) => async (dispatch) => {
  let response = await profileApi.savePhoto(file);

  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
};

export const saveProfile = (profile) => async (dispatch, getState) => {
  const userId = getState().auth.userId;
  const response = await profileApi.saveProfile(profile);

  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(userId));
  } else {
    let message =
      response.data.messages.length > 0
        ? response.data.messages[0]
        : "Some error";
    dispatch(stopSubmit("editProfile", { _error: message }));
    return Promise.reject(message);
  }
};

export default profileReducer;
