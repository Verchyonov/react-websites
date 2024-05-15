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
        className="w-[40vh] md:w-[50vh] fixed bottom-0 md:bottom-10 left-5 md:left-10 z-50"
        src={"./notl.png"}
      />
    </>
  );
};
