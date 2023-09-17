import React from "react";
import './Pictuare.css'

function Pictuare() {

    return (
        <div className="pictuare">
            <div className="pictuare_start">
                <h3 className="pictuare_start_h1"> <span className="pictuare_start_h1_span">Library</span>    — читайте <br />
                    и слушайте по одной <br />
                    подписке</h3>
            </div>
            <div className="imgg">
                <img className="pictuare_start_img" src="/person.png" alt="" />

            </div>
        </div>
    );
}

export default Pictuare;