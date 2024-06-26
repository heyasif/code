// import React from 'react';
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import About from "../Pages/About";
import ContactPage from "../Pages/ContactPage";
import Page from "../admin/pages/index";
import Login from "../components/login";
// import { Layout } from "../admin/layouts/dashboard/layout";
import { Home } from "../admin/layouts/dashboard/Home";

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactPage />} />

      <Route path="/admin" element={<Home />} />

      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Allroutes;
