import React, { Suspense} from "react";
import s from "./App.module.scss";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Preloader from "./components/common/preloader/Preloader";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/routes/AppRouter";
import { useMeQuery } from "./api/apiSlice";
import PageNotFound from "./components/404/PageNotFound";


const App = (props) => {
  const { data, error, isLoading } = useMeQuery();  

  return (
    <BrowserRouter>
      <div className={s.wrapper}>
        <>
          {error ? (
            <><PageNotFound/></>
          ) : isLoading ? (
            <>
              <Preloader />
            </>
          ) : data ? (
            <>
              <Header />
              <Navbar />
              <div className={s.main}>
                <Suspense fallback={<Preloader />}>
                  <AppRouter />
                </Suspense>
              </div>
            </>
          ) : null}
        </>
      </div>
    </BrowserRouter>
  );
};

export default App;
