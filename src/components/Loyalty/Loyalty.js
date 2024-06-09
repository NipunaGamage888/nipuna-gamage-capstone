import React, { useEffect, useState } from "react";
import "./Loyalty.scss";
import loyaltyData from "../../Data/LoyaltyData.json";
import mainImage from "../../assets/mainImage.webp";
import Payment from "../Payment/Payment";
import axios from "axios";

function Loyalty() {
  const [showInfo, setShowInfo] = useState(false);
  const [userId,setUserId]=useState('')

  const showMore = () => {
    
    setShowInfo((prev) => !prev);
  };
  useEffect(() => {
    const fetchUserId = async () => {
        const token= localStorage.getItem("token")
      try {
        if (token) {
          const response = await axios.get(
            "http://localhost:8081/api/user/profile",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          setUserId(response.data.id);
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          alert("token not provided");
        }
        if (error.response && error.response.status === 403) {
          alert("Incorrect token");
        }
        console.error("Error fetching user ID:", error);
      }
    };fetchUserId()
  },[setUserId]);
  return (
    <section className="loyalty">
      <div className="loyalty__about">
        <h1 className="loyalty__aboutus-heading">About Us</h1>
        <p className="loyalty__aboutus-para">
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
      <div className="loyalty__loyaltys-sec">
        {loyaltyData.map((loyalty) => (
          <article key={loyalty.id} className="loyalty__main">
            <img
              src={mainImage}
              alt="Images of seperate loyaltys according to their topic"
              className="loyalty__img"
            />
            <div className="loyalty__loyaltys-info-wrap">
              <h1 className="loyalty__heading">{loyalty.heading}</h1>

              <ul>
                {loyalty.paragraphs1.map((line) => (
                  <p className="loyalty__para">{line}</p>
                ))}
              </ul>
              <p
                className={` ${
                  showInfo ? "loyalty__open-info" : "loyalty__close-info"
                }`}
              >
                {loyalty.paragraph2}
              </p>
            </div>
            <div className="loyalty__button-sec">
              <button className="loyalty__button" onClick={showMore}>
                More Details
              </button>
              <Payment color="finalButtonBlack"  user={userId} price={loyalty.price}/>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Loyalty;
