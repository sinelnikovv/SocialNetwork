import { configureStore } from "@reduxjs/toolkit";
import dialogReducer from "./dialogReducer";
//import { reducer as formReducer } from "redux-form";
import { profileApi, usersApi } from "../api/apiSlice";

const store = configureStore({
  reducer: {
    [profileApi.reducerPath]: profileApi.reducer,    
    [usersApi.reducerPath]: usersApi.reducer,    
    dialogPage: dialogReducer,
    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(      
      profileApi.middleware,      
      usersApi.middleware
    ),
});

export default store;
