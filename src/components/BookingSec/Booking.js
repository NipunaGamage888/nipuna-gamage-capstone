import React, { useState } from "react";
import axios from "axios";
import './Booking.scss'

function Booking() {
  const [address, setAddress] = useState("");
  const [parkingLots, setParkingLots] = useState([]);
  const submitAddress = async (event) => {
    event.preventDefault();
    try {
      const result = await axios.get(
        `http://localhost:8081/api/parking/location/${address}`
      );
      console.log(result.data.nearbyParkingLots);
      setParkingLots(result.data.nearbyParkingLots);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      return (
      <section className="book">
        <div className="book__main">
          <h2 className="book__heading">Book Now</h2>
          <p className="book__para">
            At Parking Genie, we're committed to transforming the parking
            experience. Our goal is simple: to make parking easier, more
            convenient, and hassle-free. With our intuitive platform and
            cutting-edge technology, finding and securing parking spaces becomes
            a seamless process
          </p>
          <button  className="book__button">
            Book Now
          </button>
        </div>
      </section>
      );
      <form>
        <input
          placeholder="address"
          value={address}
          type="text"
          onChange={(e) => setAddress(e.target.value)}
        />
        <button type="submit" onClick={submitAddress}>
          Search
        </button>
      </form>
      {parkingLots.length > 0 ? (
        parkingLots.map((parkingLot) => (
          <section key={parkingLot.id}>
            <p>{parkingLot.parking_name}</p>
          </section>
        ))
      ) : (
        <p>No inventories Available in this warehouse</p>
      )}
    </div>
  );
}

export default Booking;
