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
        className="w-[60vw] lg:w-[20vw] fixed bottom-5 lg:bottom-10 left-1/2 lg:left-10 z-50 lg:translate-x-0 -translate-x-1/2"
        src={"/notl.png"}
        alt="notl"
      />
    </>
  );
};
