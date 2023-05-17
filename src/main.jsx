import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kontakt" element={<Home />} />
        <Route path="/oferty" element={<Home />} />
        <Route path="/aktualności" element={<Home />} />
        <Route path="/panel" element={<Home />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
