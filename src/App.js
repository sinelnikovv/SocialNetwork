import React, { Suspense, useEffect } from "react";
import s from "./App.module.scss";
import Container from "./components/Container/Container";
import Navbar from "./components/Navbar/Navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import { connect } from "react-redux";
import { initializeApp } from "./redux/appReducer";
import Preloader from "./components/common/preloader/Preloader";
import store from "./redux/reduxStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const UsersContainer = React.lazy(() =>
  import("./components/Users/UsersContainer")
);

const News = React.lazy(() => import("./components/News/News"));

const Music = React.lazy(() => import("./components/Music/Music"));

const Settings = React.lazy(() => import("./components/Settings/Settings"));

const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);

const ProfileContainer = React.lazy(() =>
  import("./components/Profile/ProfileContainer")
);
const LoginPage = React.lazy(() => import("./components/Login/Login"));

const App = (props) => {
  const catchAllUnhandledError = (e) => {
    console.error(e);
    alert("Some error occured");
  };

  useEffect(() => {
    props.initializeApp();
  }, []);

  useEffect(() => {
    window.addEventListener("unhandledrejection", catchAllUnhandledError);

    return window.removeEventListener(
      "unhandledrejection",
      catchAllUnhandledError
    );
  }, []);

  return !props.initialized ? (
    <Preloader />
  ) : (
    <div className={s.wrapper}>
      <HeaderContainer />

      <Navbar />
      <Container>
        <Suspense
          fallback={
            <div>
              <Preloader />
            </div>
          }
        >
          <Routes>
            <Route exact path="/" element={<Navigate to="/profile" />} />
            <Route path="/profile/:userId?" element={<ProfileContainer />} />
            <Route path="/messages" element={<DialogsContainer />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<div>404</div>} />
          </Routes>
        </Suspense>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

let AppContainer = connect(mapStateToProps, { initializeApp })(App);

let MainApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};
export default MainApp;
