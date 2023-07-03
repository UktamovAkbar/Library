import React from "react";
import Footer from "../footer/Footer";
import Menu from "../menu/Menu";
import Navbar from "../navbar/Navbar";
import './MenuBook1.css'

function MenuBook1() {
    return (
        <React.StrictMode>
            <Navbar />
            <Menu />
            <div className="menubook1">
                <div className="menubook1_books">
                    
                </div>
            </div>
            <div className="menubook1">
                <div className="menubook1_books">
                    
                </div>
            </div>
            <Footer />
        </React.StrictMode>
    );
}
export default MenuBook1;