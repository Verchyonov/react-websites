import { Outlet } from "react-router-dom";
import { Navbar } from "./common/navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Layout = (props: any) => {
  return (
    <>
      <ToastContainer />
      <Outlet />
    </>
  );
};
