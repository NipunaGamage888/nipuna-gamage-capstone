import React from "react";
import mainImage from "../../assets/mainImage.jpg";
import Header from "../Header/Header";
import "./Main.scss";

function Main() {
  return (
    <main className="combine">
      <div className="combine__main">
        <img className="combine__image" src={mainImage} />
      </div>
      <div>
        <Header/>
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
      
    </main>
  );
}

export default Main;
