import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import './Home.css'

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
