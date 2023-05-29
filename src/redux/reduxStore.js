import { configureStore } from "@reduxjs/toolkit";
import dialogReducer from "./dialogReducer";
//import { reducer as formReducer } from "redux-form";
import { authApi, profileApi, securityApi, usersApi } from "../api/apiSlice";

const store = configureStore({
  reducer: {
    [profileApi.reducerPath]: profileApi.reducer,
    //[securityApi.reducerPath]: securityApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    //[authApi.reducerPath]: authApi.reducer,
    dialogPage: dialogReducer,
    // usersPage: usersReducer,
    //auth: authReducer,
    //form: formReducer,
    //app: appReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      //authApi.middleware,
      profileApi.middleware,
      //securityApi.middleware,
      usersApi.middleware
    ),
});

export default store;
