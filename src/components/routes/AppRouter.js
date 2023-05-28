import React, { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useMeQuery } from "../../api/apiSlice";

const Users = lazy(() => import("../Users/Users"));

const News = lazy(() => import("../News/News"));

const Music = lazy(() => import("../Music/Music"));

const Settings = lazy(() => import("../Settings/Settings"));

const DialogsContainer = lazy(() => import("../Dialogs/DialogsContainer"));

const Profile = lazy(() => import("../Profile/Profile"));
const LoginPage = lazy(() => import("../Login/Login"));

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
      <Route path="/messages" element={<DialogsContainer />} />
      <Route path="/news" element={<News />} />
      <Route path="/music" element={<Music />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/users" element={<Users />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<div>404</div>} />
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

  return me ? privateRoutes : publicRoutes;
};

export default AppRouter;
