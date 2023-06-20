import React, { Suspense } from "react";
import Header from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/routes/AppRouter";
import { useMeQuery } from "./api/apiSlice";
import PageNotFound from "./components/404/PageNotFound";
import Container from "@mui/material/Container";
import Navbar from "./components/Navbar/Navbar";
import Grid from "@mui/material/Grid"; // Grid version 1
import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";

const App = () => {
  const { data, error, isLoading } = useMeQuery();

  const Preloader = ()=>{
    return(
      <Backdrop
      open
      sx={{ color: "#eee", zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <CircularProgress
        size={68}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          marginTop: "-34px",
          marginLeft: "-34px",
        }}
      />
    </Backdrop>
    )
  }

  return (
    <BrowserRouter>
      <>
        {error ? (
          <>
            <PageNotFound />
          </>
        ) : isLoading ? (
          <Preloader/>
        ) : data ? (
          <Container
            maxWidth="xl"
            sx={{
              px: { xs: 0 },
              display: "flex",
              flexDirection: "column",
              height: "100vh",
            }}
          >
            <Header />
            <Grid container sx={{ flexGrow: "1" }}>
              <Navbar />
              <Grid item xs sx={{backgroundColor:"grey.300", }}>
                <Suspense fallback={<Preloader/>}>
                  <AppRouter />
                </Suspense>
              </Grid>
            </Grid>
          </Container>
        ) : null}
      </>
    </BrowserRouter>
  );
};

export default App;
