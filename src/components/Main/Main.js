import React from "react";
import mainImage from "../../assets/mainImage.webp";
import Header from "../Header/Header";
import "./Main.scss";
import Square from "../Square/Square";
import Card from "../Cards/Card";

function Main() {
  return (
    <main className="combine">
      <div className="combine__main">
        <img className="combine__image" alt="Background image of a car or a parking lot" src={mainImage} />
      </div>
      <div>
      </div>
      <div className="combine__desc-sec">
        <p className="combine__welcome">welcome to</p>
        <h1 className="combine__heading"></h1>
        <p className="combine__detail">
          Parking genie systems revolutionize the urban landscape, seamlessly
          blending technology with convenience to enhance the parking
          experience.
        </p>
      </div>
      <div className="combine__background">
        <div className="combine__book">
          <Square />
          <div className="combine__cards-back">
            <Card />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
