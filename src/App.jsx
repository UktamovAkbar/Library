import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./footer/Footer";
import Home from "./home/Home";
import Navbar from "./navbar/Navbar";
import About from "./about/About"
import Books from "./books/Books";
import Menu from "./menu/Menu";
import Pictuare from "./pictuare/Pictuare";

const App = () => {
  return (
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/footer" element={<Footer/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/books" element={<Books/>} />
      <Route path='/menu' element={<Menu/>} />
      <Route path='/pictuare' element={<Pictuare/>} />

    </Routes>
  );
};

export default App;
