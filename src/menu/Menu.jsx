import React from "react";
import { Link } from 'react-router-dom'
import './Menu.css'
import {FaBook, FaBookDead, FaBookMedical, FaBookOpen, FaBookReader} from 'react-icons/fa'


function Menu() {
    return (
        <div className="menu">
           <div className="menu_center">
            <div className="menu_center1"> <Link className="menu_center1__link" to='/'> <FaBook className="book1"></FaBook> Красивое</Link> </div>
            <div className="menu_center1"> <Link className="menu_center1__link" to='/'> <FaBookDead className="book2"></FaBookDead> Мотивационные</Link> </div>
            <div className="menu_center1"> <Link className="menu_center1__link" to='/'> <FaBookMedical className="book3"></FaBookMedical> Лучшее</Link> </div>
            <div className="menu_center1"> <Link className="menu_center1__link" to='/'> <FaBookOpen className="book4"></FaBookOpen> Новинки</Link> </div>
            <div className="menu_center1"> <Link className="menu_center1__link" to='/'> <FaBookReader className="book5"></FaBookReader> Классика</Link> </div>
           </div>
        </div>
    );
}

export default Menu;