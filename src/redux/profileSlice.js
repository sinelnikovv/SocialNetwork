import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    profile: null,
    status: "",
  },
  reducers: {
    setUserProfile(state, action) {
      state = { ...state, profile: action.profile };
    },
    setStatus(state, action) {
      state.status = action.status;
    },
    savePhotoSuccess(state, action) {
      state.profile.photos = action.photos;
    },
  },
});

export const { addPost, setUserProfile, setStatus, savePhotoSuccess } =
  profileSlice.actions;
export default profileSlice.reducer;
