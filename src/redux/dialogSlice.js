import { createSlice } from "@reduxjs/toolkit";

const dialogSlice = createSlice({
  name: "dialog",
  initialState: {
    messages: [
      { id: 1, message: "hi" },
      { id: 2, message: "hello" },
      { id: 3, message: "yo" },
    ],
    dialogs: [
      { id: 1, name: "Dima" },
      { id: 2, name: "Vasya" },
      { id: 3, name: "Sveta" },
      { id: 4, name: "Kolya" },
    ],
  },
  reducers: {
    addMessage(state, action) {
      state.push({ message: action.newMessage });
    },
  },
});

export const { addMessage } = dialogSlice.actions;
export default dialogSlice.reducer;
