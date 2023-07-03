import React, { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useMeQuery } from "../../api/apiSlice";

const Users = lazy(() => import("../Users/Users"));
const Friends = lazy(() => import("../Friends/Friends"));
const Dialogs = lazy(() => import("../Dialogs/Dialogs"));
const Profile = lazy(() => import("../Profile/Profile"));
const LoginPage = lazy(() => import("../Login/Login"));
const PageNotFound = lazy(() => import("../404/PageNotFound"));


const AppRouter = () => {
  const { me } = useMeQuery(undefined, {
    selectFromResult: ({ data }) => ({
      me: data.data,
    }),
  });

  const privateRoutes = (
    <Routes>
      <Route path="/" element={<Navigate to="/profile" />} />
      <Route path="/profile/:userId?" element={<Profile />} />
      <Route path="/friends" element={<Friends />} />
      <Route path="/messages" element={<Dialogs />} />     
      <Route path="/users" element={<Users />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<PageNotFound/>} />
    </Routes>
  );

  const publicRoutes = (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/profile/:userId?" element={<Navigate to="/login" />} />
      <Route path="/messages" element={<Navigate to="/login" />} />
      <Route path="/news" element={<Navigate to="/login" />} />
      <Route path="/music" element={<Navigate to="/login" />} />
      <Route path="/settings" element={<Navigate to="/login" />} />
      <Route path="/users" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  );

  return me.id ? privateRoutes : publicRoutes;
};

export default AppRouter;
