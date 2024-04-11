import React, { useState } from "react";
import axios from "axios";

function Booking() {
  const [address, setAddress] = useState("");
  const [parkingLots, setParkingLots] = useState([]);
  const submitAddress = async (event) => {
    event.preventDefault()
    try {
      const result = await axios.get(
        `http://localhost:8081/api/parking/location/${address}`
      );
      setParkingLots(result.data.nearbyParkingLots);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form>
        <input
          placeholder="address"
          value={address}
          type="text"
          onChange={(e) => setAddress(e.target.value)}
        />
        <button type="submit" onClick={submitAddress} >Search</button>
      </form>
      {parkingLots.length > 0 ? (
        parkingLots.map((parkingLot) => (
          <section>
            <p>{parkingLot.name}</p>
          </section>
        ))
      ) : (
        <p>No inventories Available in this warehouse</p>
      )}
    </div>
  );
}

export default Booking;
