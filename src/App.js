import React, { Suspense, useEffect } from "react";
import s from "./App.module.scss";
import Container from "./components/Container/Container";
import Navbar from "./components/Navbar/NavbarContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import { connect } from "react-redux";
import { initializeApp } from "./redux/appReducer";
import Preloader from "./components/common/preloader/Preloader";
import store from "./redux/reduxStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/routes/AppRouter";

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
          <AppRouter isAuth={props.isAuth} />
        </Suspense>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
  isAuth: state.auth.isAuth,
});

let AppContainer = connect(mapStateToProps, { initializeApp })(App);

let MainApp = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};
export default MainApp;
