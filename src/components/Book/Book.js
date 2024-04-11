import React from "react";
import './Book.scss'

function Book() {
  return (
    <section className="book">
      <div className="book__main">
        <h2 className="book__heading">Book Now</h2>
        <p className="book__para">
          At Parking Genie, we're committed to transforming the parking
          experience. Our goal is simple: to make parking easier, more
          convenient, and hassle-free. With our intuitive platform and
          cutting-edge technology, finding and securing parking spaces becomes a
          seamless process
        </p>
        <button className="book__button">Book Now</button>
      </div>
    </section>
  );
}

export default Book;
