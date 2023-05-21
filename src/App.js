import React, { Suspense, useEffect } from "react";
import s from "./App.module.scss";
import Container from "./components/Container/Container";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Preloader from "./components/common/preloader/Preloader";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/routes/AppRouter";
import { useMeQuery } from "./api/apiSlice";

const App = (props) => {
  const { data, error, isLoading } = useMeQuery();

  // const catchAllUnhandledError = (e) => {
  //   console.error(e);
  //   alert("Some error occured");
  // };

  // useEffect(() => {
  //   props.initializeApp();
  // }, []);

  // useEffect(() => {
  //   window.addEventListener("unhandledrejection", catchAllUnhandledError);

  //   return window.removeEventListener(
  //     "unhandledrejection",
  //     catchAllUnhandledError
  //   );
  // }, []);

  return (
    <BrowserRouter>
      <div className={s.wrapper}>
        <>
          {error ? (
            <>Oh no, there was an error</>
          ) : isLoading ? (
            <>
              <Preloader />
            </>
          ) : data ? (
            <>
              <Header />
              <Navbar myId={data.data.id} />
              <Container>
                <Suspense fallback={<Preloader />}>
                  <AppRouter />
                </Suspense>
              </Container>
            </>
          ) : null}
        </>
      </div>
    </BrowserRouter>
  );
};

export default App;
