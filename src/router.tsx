import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./layout";
import { Landing } from "./pages/landing/landing";
import { Form } from "./pages/form/form";
import { Cards2 } from "./pages/game/cards/cards2";

export const MyRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          {/* <Route path="/drop" element={<Form />} />
          <Route path="/game" element={<Cards2 />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
