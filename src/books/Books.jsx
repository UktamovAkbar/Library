import React from "react";
import "./Books.css";

const Books = () => {
  return (
    <div className="books_section">
      <div className="books_box">
        <h2>Лучшее мотиватционные книги</h2>
        <p>
          Деловая и научно-популярная литература издательств «Манн, Иванов и
          Фербер», «Альпина Паблишер», «Олимп-Бизнес» и других
        </p>
        <img src="/peregovori_kniga1.png" alt="" className="books_img" />
      </div>
    </div>
  );
};

export default Books;
