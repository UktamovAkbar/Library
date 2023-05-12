import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { SiOdnoklassniki } from "react-icons/si";
import { FiInstagram } from "react-icons/fi";
import { SlSocialVkontakte } from "react-icons/sl";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>О проекте</h4>
            <ul>
              <li>
                <a href="/about">Что такое Library</a>
              </li>
              <li>
                <a href="/">Информация</a>
              </li>
              <li>
                <a href="/"> Документация</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Помощь</h4>
            <ul>
              <li>
                <a href="/">Задать вопрос</a>
              </li>
              <li>
                <a href="/"> Создатели Сайта</a>
              </li>
              <li>
                <a href="/">Политика конфиденциальности</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Наши Социальные Сети</h4>
            <div className="social-links">
              <a href="/">
                {" "}
                <FiInstagram />
              </a>
              <a href="/">
                {" "}
                <BsTwitter />{" "}
              </a>
              <a href="/">
                {" "}
                <FaFacebookF />
              </a>

              <a href="/">
                {" "}
                <SlSocialVkontakte />
              </a>
            </div>
            <div className="numb">
            <a href="tel:+998914422317" className="footer__tel">
                +998(91)442-23-17
              </a>  
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
