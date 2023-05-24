import React from "react";
import { Link } from 'react-router-dom'
import './Menu.css'
import {FaBook, FaBookDead, FaBookMedical, FaBookOpen, FaBookReader} from 'react-icons/fa'


function Menu() {
    return (
        <div className="menu">
           <div className="menu_center">
            <div className="menu_center1"> <Link className="menu_center1__link" to='/'> <FaBook className="book1"></FaBook> FaBook</Link> </div>
            <div className="menu_center1"> <Link className="menu_center1__link" to='/'> <FaBookDead className="book2"></FaBookDead> 12345i</Link> </div>
            <div className="menu_center1"> <Link className="menu_center1__link" to='/'> <FaBookMedical className="book3"></FaBookMedical> 12345i</Link> </div>
            <div className="menu_center1"> <Link className="menu_center1__link" to='/'> <FaBookOpen className="book4"></FaBookOpen> 12345i</Link> </div>
            <div className="menu_center1"> <Link className="menu_center1__link" to='/'> <FaBookReader className="book5"></FaBookReader> 12345i</Link> </div>
           </div>
        </div>
    );
}

export default Menu;