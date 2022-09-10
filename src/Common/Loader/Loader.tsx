import React from "react";
import { createPortal } from "react-dom";

import { Bars } from "react-loader-spinner";

const Loader = () =>
  createPortal(
    <Bars
      height="80"
      width="80"
      color="green"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        height: "100vh",
        width: "100vw",
        justifyContent: "center",
        alignItems: "center",
        backdropFilter: "blur(25px)",
        backgroundColor: "rgba(250, 250, 250, 0.2)",
      }}
      visible
    />,
    document.getElementById("loader") as HTMLElement
  );

export default Loader;
