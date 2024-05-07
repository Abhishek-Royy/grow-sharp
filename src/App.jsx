import React from "react";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./pages/HomePage";
import Aboutpage from "./pages/AboutPage";
import Ourproduct from "./pages/OurProduct";
import Blogpage from "./pages/Blog";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";

import JoinUs from "./pages/JoinUs";
import Contact from "./pages/Contact";

import PrivacyPolicy from "./footer-list/PrivacyPolicy";
import TermCondition from "./footer-list/TermCondition";
import RefundPolicy from "./footer-list/RefundPolicy";
import Career from "./layout/Career";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/product" element={<Ourproduct />} />
        <Route path="/blog" element={<Blogpage />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termCondition" element={<TermCondition />} />
        <Route path="/refundPolicy" element={<RefundPolicy />} />
        <Route path="/joinus" element={<JoinUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ourproduct/career360" element={<Career />} />

        {/* <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} /> */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
