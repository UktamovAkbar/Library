import React from "react";
import Book from "../book/Book";
import Footer from "../footer/Footer";
import Menu from "../menu/Menu";  
import Navbar from "../navbar/Navbar";
import Pictuare from "../pictuare/Pictuare";
import "./Home.css";
import Books from "../books/Books";
import Reklama from "../reklama/Reklama";

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

      
      <div className="">
        <Books />
      </div>
      <div className="">
        <Reklama />
      </div>

      <div className="home_footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
