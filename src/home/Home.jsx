import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import './Home.css'
import Books from "../books/Books";
import Reklama from "../reklama/Reklama";

const Home = () => {
  return (
    <div>
      <div className="">
        <Navbar />
      </div>
        <div className="">
          <div className="home_section">
            <div className="home_columns">
              <div className="home_column is-20"></div>
              <div className="home_column is-30">
                <h1>Library - читайте книги <br /> бесплатно</h1>
                <button className="home_regist_btn">Зарегистрироваться</button>
              </div>
              <div className="home_column is-50">
                <img src="./image/devushka-kniga.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <Books/>
        </div>
        <div className="">
          <Books/>
        </div>
        <div className="">
          <Books/>
        </div>
        <div className=""><Reklama/></div>
      <div className="home_footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
