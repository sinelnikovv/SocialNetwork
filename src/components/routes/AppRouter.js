import React, { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const UsersContainer = lazy(() => import("../Users/UsersContainer"));

const News = lazy(() => import("../News/News"));

const Music = lazy(() => import("../Music/Music"));

const Settings = lazy(() => import("../Settings/Settings"));

const DialogsContainer = lazy(() => import("../Dialogs/DialogsContainer"));

const ProfileContainer = lazy(() => import("../Profile/ProfileContainer"));
const LoginPage = lazy(() => import("../Login/Login"));

const privateRoutes = (
  <Routes>
    <Route path="/" element={<Navigate to="/profile" />} />
    <Route path="/profile/:userId?" element={<ProfileContainer />} />
    <Route path="/messages" element={<DialogsContainer />} />
    <Route path="/news" element={<News />} />
    <Route path="/music" element={<Music />} />
    <Route path="/settings" element={<Settings />} />
    <Route path="/users" element={<UsersContainer />} />
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

const AppRouter = (props) => {
  return props.isAuth ? privateRoutes : publicRoutes;
};

export default AppRouter;
