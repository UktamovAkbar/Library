import React from "react";
import { Link } from 'react-router-dom'
import { FaBook, FaBookDead, FaBookMedical, FaBookOpen, FaBookReader } from 'react-icons/fa'
import './Menu.css'

function Menu() {
    return (
        <div className="menu">
            <div className="menu_center">
                <div className="menu_center1"> <Link className="menu_center1__link" to='/'> <FaBook className="book1"></FaBook> Красивое</Link> </div>
                <div className="menu_center1"> <Link className="menu_center1__link" to='/'> <FaBookDead className="book2"></FaBookDead> фыавппыав</Link> </div>
                <div className="menu_center1"> <Link className="menu_center1__link" to='/'> <FaBookMedical className="book3"></FaBookMedical> фыафываейу</Link> </div>
                <div className="menu_center1"> <Link className="menu_center1__link" to='/'> <FaBookOpen className="book4"></FaBookOpen> унуаые</Link> </div>
                <div className="menu_center1"> <Link className="menu_center1__link" to='/'> <FaBookReader className="book5"></FaBookReader> цшмйщвийыл</Link> </div>
            </div>
        </div>
    );
}

export default Menu;