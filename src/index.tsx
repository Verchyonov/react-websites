import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { Layout } from "./layout";
import { Landing } from "./pages/landing/landing";
import { Form } from "./pages/form/form";
import { Cards2 } from "./pages/game/cards/cards2";

import { Buffer } from "buffer";
window.Buffer = Buffer;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="drop" element={<Form />} />
          <Route path="game" element={<Cards2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
