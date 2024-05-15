import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Layout = (props: any) => {
  return (
    <>
      <ToastContainer />
      <Outlet />
      <img
        className="w-[45vh] md:w-[70vh] fixed bottom-0 md:bottom-10 left-1/2 md:left-10 z-50 md:translate-x-0 -translate-x-1/2"
        src={"./notl.png"}
      />
    </>
  );
};
