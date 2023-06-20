import React from "react";
import { Backdrop, Box, CircularProgress } from "@mui/material";

const Preloader = () => {
  return (
    <Box sx={{ backgroundColor: "red", width: "100%", height: "100px" }}>
      <Backdrop
        open
        sx={{
          color: "#eee",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          position: "relative",
          width: "100%", 
          height: "100%"
        }}
      >
        <CircularProgress
          size={68}
          sx={{
            position: "absolute",
            // top: "50%",
            // right: "50%",
            // marginTop: "-34px",
            // marginBottom: "-34px",
          }}
        />
      </Backdrop>
    </Box>
  );
};
export default Preloader;
