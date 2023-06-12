import React from "react";
import Book from "../book/Book";
import Footer from "../footer/Footer";
import Menu from "../menu/Menu";
import Navbar from "../navbar/Navbar";
import Pictuare from "../pictuare/Pictuare";
import './Home.css'

const Home = () => {
  return (
    <div>
      <div className="">
        <Navbar />
      </div>

      <div className="">
        <Menu />
      </div>

      <div className="">
        <Pictuare />
      </div>

      <div className="book">
        <Book />
      </div>

      <div className="home_footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
