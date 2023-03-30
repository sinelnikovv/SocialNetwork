const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
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
};

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 1,
        message: state.newMessageText,
      };
      return {
        ...state,
        messages: [...state.messages, newMessage],
        newMessageText: "",
      };

    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.newMessage,
      };

    default:
      return state;
  }
};

export const addMessageActionCreator = () => {
  return {
    type: ADD_MESSAGE,
  };
};

export const updateNewMessageActionCreator = (message) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessage: message,
  };
};

export default dialogReducer;
