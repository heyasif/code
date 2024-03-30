// import React from 'react';
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import About from "../Pages/About";
import ContactPage from "../Pages/ContactPage";
import Page from "../admin/pages/index";

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/admin" element={<Page />} />
    </Routes>
  );
};

export default Allroutes;
