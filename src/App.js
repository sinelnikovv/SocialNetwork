import React from "react";
import s from "./App.module.scss";
import Container from "./components/Container/Container";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";

const App = () => {
  return (
    <BrowserRouter>
      <div className={s.wrapper}>
        <HeaderContainer />

        <Navbar />
        <Container>
          <Routes>
            <Route path="/messages" element={<DialogsContainer />} />
            <Route path="/profile/:userId?" element={<ProfileContainer />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </Container>
      </div>
    </BrowserRouter>
  );
};

export default App;
