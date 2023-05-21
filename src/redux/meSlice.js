import { createSlice } from "@reduxjs/toolkit";

const meSlice = createSlice({
  name: "me",
  initialState: {
    id: null,
    isAuth: false,
  },
  reducers: {
    setMe(state, action) {
      state.id = action.payload.id;
      state.isAuth = true;
    },
  },
});

export const { setMe } = meSlice.actions;
export default meSlice.reducer;
