import React from 'react'
import './BookNow.scss'
import mainImage from "../../assets/mainImage.jpg";
import Header from "../Header/Header";

function BookNow() {
  return (
    <main className="book-now">
      <div className="book-now__main">
        <img className="book-now__image" src={mainImage} />
      </div>
      <div>
        <Header />
      </div>
      <div className="book-now__desc-sec">
        <p className="book-now__welcome">welcome to</p>
        <h1 className="book-now__heading"></h1>
        <p className="book-now__detail">
          Parking genie systems revolutionize the urban landscape, seamlessly
          blending technology with convenience to enhance the parking
          experience.
        </p>
      </div>
      <div className="book-now__background">
        <div className="book-now__book">
          
          <div className="book-now__cards-back">

          </div>
        </div>
      </div>
    </main>
  );
}

export default BookNow
