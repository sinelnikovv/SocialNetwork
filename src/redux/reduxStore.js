import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import { reducer as formReducer } from "redux-form";
import appReducer from "./appReducer";

const store = configureStore({
  reducer: {
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
  },
});

export default store;

// import {
//   applyMiddleware,
//   combineReducers,
//   legacy_createStore as createStore,
//   compose,
// } from "redux";
// import profileReducer from "./profileReducer";
// import dialogReducer from "./dialogReducer";
// import usersReducer from "./usersReducer";
// import authReducer from "./authReducer";
// import thunkMiddleware from "redux-thunk";
// import { reducer as formReducer } from "redux-form";
// import appReducer from "./appReducer";

// let reducers = combineReducers({
//   profilePage: profileReducer,
//   dialogPage: dialogReducer,
//   usersPage: usersReducer,
//   auth: authReducer,
//   form: formReducer,
//   app: appReducer,
// });

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(
//   reducers,
//   composeEnhancers(applyMiddleware(thunkMiddleware))
// );

// export default store;
