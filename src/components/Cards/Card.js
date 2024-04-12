import React from "react";
import "./Card.scss";
import mainImage from "../../assets/mainImage.jpg";
import cardData from "../../Data/CardData.json";

function Card() {
  return (
    <section className="card">
      <div className="card__about">
        <h1 className="card__aboutus-heading">About Us</h1>
        <p className="card__aboutus-para">
          Parking Genie is your ultimate destination for hassle-free parking
          solutions. Whether you're navigating the bustling streets of a city or
          exploring new destinations, we're here to make your parking experience
          seamless and stress-free. With our innovative technology and
          user-friendly platform, finding and reserving parking spots has never
          been easier. Say goodbye to circling the block endlessly in search of
          a spot and hello to effortless parking at your fingertips. From smart
          parking solutions to convenient booking options, Parking Genie has you
          covered every step of the way. Experience the future of parking with
          Parking Genie today.
        </p>
      </div>
      <div className="card__cards-sec">
        {cardData.map((card) => (
          <article key={card.id} className="card__main">
            <img src={mainImage} className="card__img" />
            <h1 className="card__heading">
              {card.heading}
              {/*Security gurad
                //spacious
                mechanical support when needed
             Secure payment methods*/}
            </h1>
            <p className="card__para">{card.paragraphs1}</p>
            <p className="card__para">{card.paragraph2}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Card;
