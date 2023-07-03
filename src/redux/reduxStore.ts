import { configureStore } from "@reduxjs/toolkit";
import { profileApi, usersApi, messageApi } from "../api/apiSlice";

export const store = configureStore({
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

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch