import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null,
  },
  reducers: {
    setAuthUserData(state, action) {
      state = { ...state, ...action.payload };
    },
    getCaptchaUrlSuccess(state, action) {
      state.captchaUrl = action.captchaUrl;
    },
  },
});

export const { setAuthUserData, getCaptchaUrlSuccess } = authSlice.actions;
export default authSlice.reducer;
