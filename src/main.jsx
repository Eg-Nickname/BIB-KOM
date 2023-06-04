import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home.jsx";
import News from "./pages/News.jsx";
import Panel from "./pages/Panel.jsx";
import Offers from "./pages/Offers.jsx";
import Login from "./pages/Login.jsx";
import Contact from "./pages/Contact.jsx";
import PostPage from "./pages/PostPage.jsx";
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
        <Route path="/aktualności/*" element={<PostPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/panel" element={<Panel />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
