import React, { useEffect, useState } from "react";
import { Backdrop, CircularProgress } from "@mui/material";

const Preloader = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    let timer = setTimeout(() => setIsOpen(true), 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <Backdrop
      open={isOpen}
      sx={{
        color: "#eee",
        zIndex: 100,
        position: "absolute",
        top: "0",
        bottom: "0",
        left: "0",
        right: "0",
        // width: "100%",
        // height: "100%"
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
  );
};
export default Preloader;
