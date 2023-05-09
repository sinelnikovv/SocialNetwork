const ADD_MESSAGE = "ADD-MESSAGE";

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
};

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        message: action.newMessage,
      };
      return {
        ...state,
        messages: [...state.messages, newMessage],
      };

    default:
      return state;
  }
};

export const addMessageActionCreator = (newMessage) => {
  return {
    type: ADD_MESSAGE,
    newMessage,
  };
};

export default dialogReducer;
