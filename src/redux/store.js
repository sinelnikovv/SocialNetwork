import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, gow are you", likesCount: 12 },
        { id: 2, message: "Fine", likesCount: 5 },
        { id: 3, message: "good", likesCount: 0 },
        { id: 4, message: "ok", likesCount: 3 },
      ],
      newPostText: "",
    },
    dialogPage: {
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
      newMessageText: "",
    },
  },
  _callSubscriber() {},

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);

    this._state.dialogPage = dialogReducer(this._state.dialogPage, action);

    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;
