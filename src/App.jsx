import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./footer/Footer";
import Home from "./home/Home";
import Navbar from "./navbar/Navbar";
import About from "./about/About"
import Books from "./books/Books";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/footer" element={<Footer/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/books" element={<Books/>} />

    </Routes>
  );
};

export default App;
