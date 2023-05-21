import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
//import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import appReducer from "./appReducer";
import { reducer as formReducer } from "redux-form";

// import profileReducer from "./profileSlice";
//import dialogReducer from "./dialogSlice";

// import authReducer from "./authSlice";
// import appReducer from "./appSlice";

import { authApi, profileApi, securityApi, usersApi } from "../api/apiSlice";

const store = configureStore({
  reducer: {
    [profileApi.reducerPath]: profileApi.reducer,
    // [securityApi.reducerPath]: securityApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    dialogPage: dialogReducer,
    // usersPage: usersReducer,
    //auth: authReducer,
    form: formReducer,
    //app: appReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      profileApi.middleware,
      // securityApi.middleware,
      usersApi.middleware
    ),
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
