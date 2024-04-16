import React, { useState } from "react";
import axios from "axios";
import "./Search.scss";
import { useNavigate } from "react-router-dom";

function Booking() {
  const [address, setAddress] = useState("");
  const [parkingLots, setParkingLots] = useState([]);
  const [error, setError] = useState(null);

  const navigate = useNavigate()
  const submitAddress = async (event) => {
    event.preventDefault();

    if (!address) {
      setError("Please enter a valid address");
      return;
    }
    try {
      const result = await axios.get(
        `http://localhost:8081/api/parking/location/${address}`
      );
     
      setParkingLots(result.data.nearbyParkingLots);
      setError(null);
    } catch (error) {
      console.error(error);
    }
  };

  const booking=(parkingLot)=>{
    const storedToken = localStorage.getItem("token");
    if (!storedToken) {
      navigate("/login"); 
    }else{
      navigate(`/register/${parkingLot}`)
    }
    
  }

  return (
    <section className="book-form">
      <div className="book-form__main">
        <h2 className="book-form__heading">Book Now</h2>
        <form className="book-form__form">
          <div className="book-form__input-sec">
            <label className="book-form__label" htmlFor="location">
              Select Location
            </label>
            <input
              className="book-form__input"
              id="location"
              placeholder="address"
              value={address}
              type="text"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <button
            className="book-form__button"
            type="submit"
            onClick={submitAddress}
          >
            Search
          </button>
        </form>
        {error && <p className="book-form__error">{error}</p>}
      </div>
      {parkingLots.length > 0 ? (
        parkingLots.map((parkingLot) => (
          <section className="book-form__available" key={parkingLot.id}>
            <div className="book-form__info-sec">
              <h2 className="book-form__info-heading">Parking Lot Name</h2>
              <h2 className="book-form__info-heading-mobile">Name</h2>
              <p className="book-form__info-para">{parkingLot.parking_name}</p>
            </div>
            <div className="book-form__info-sec">
              <h2 className="book-form__info-heading">Parking Lot address</h2>
              <h2 className="book-form__info-heading-mobile">address</h2>
              <p className="book-form__info-para">{parkingLot.address}</p>
            </div>
            <div className="book-form__info-sec">
              <h2 className="book-form__info-heading">Parking Spaces</h2>
              <h2 className="book-form__info-heading-mobile">Spaces</h2>
              <p className="book-form__info-para">{parkingLot.parking_spaces}</p>
            </div>
            <div>
              <button onClick={()=>booking(parkingLot.id)} className="book-form__button">Book Now</button>
            </div>
          </section>
        ))
      ) : (
        <p>No inventories Available in this warehouse</p>
      )}
    </section>
  );
}

export default Booking;
