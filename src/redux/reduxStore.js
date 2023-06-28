import { configureStore } from "@reduxjs/toolkit";
import { profileApi, usersApi, messageApi } from "../api/apiSlice";

const store = configureStore({
  reducer: {
    [profileApi.reducerPath]: profileApi.reducer,    
    [usersApi.reducerPath]: usersApi.reducer,  
    [messageApi.reducerPath]: messageApi.reducer,  
    
    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(      
      profileApi.middleware,      
      usersApi.middleware,
      messageApi.middleware,
    ),
});

export default store;
