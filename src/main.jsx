import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home.jsx";
import News from "./pages/News.jsx";
import Offers from "./pages/Offers.jsx";
import Contact from "./pages/Contact.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/oferty" element={<Offers />} />
        <Route path="/aktualności" element={<News />} />
        <Route path="/panel" element={<Home />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
