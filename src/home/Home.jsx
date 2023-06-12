import React from "react";
import Book from "../book/Book";
import Footer from "../footer/Footer";
import Menu from "../menu/Menu";
import Navbar from "../navbar/Navbar";
import Pictuare from "../pictuare/Pictuare";
import './Home.css'
import Books from "../books/Books";
import Reklama from "../reklama/Reklama";

const Home = () => {
  return (
    <div>
      <div className="">
        <Navbar />
      </div>
   
      <div className="home_footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
