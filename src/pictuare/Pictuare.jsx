import React from "react";
import "./Pictuare.css";

function Pictuare() {
  return (
    <div className="">
      <div className="pic_section">
        <div className="pic_columns">
          <div className="pic_column is-20"></div>
          <div className="pic_column is-30">
            <h1>
              Library - читайте книги <br /> бесплатно
            </h1>
            <button className="pic_regist_btn">Зарегистрироваться</button>
          </div>
          <div className="pic_column is-50">
            <img className="pic_start_img" src="/person.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pictuare;
