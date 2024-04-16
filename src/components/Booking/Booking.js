import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./Bookings.scss";
import Header from "../Header/Header";

function Booking() {
  const [startingTime, setStartingTime] = useState("");
  const [hours, setHours] = useState("");
  const [userId, setUserId] = useState("");
  const [vehicleNum, setVehicleNum] = useState("");
  const { id: parkingid } = useParams();

  const navigate = useNavigate()

  const params = useParams();

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const token = localStorage.getItem("token");

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
    };

    fetchUserId();
  }, [setUserId]);
  console.log("userID " + userId);
  const startingTimeDate = new Date(startingTime + ":00");
  const convertedTime = startingTimeDate.toISOString().slice(0, 19);
  const convertedParkingID = parseInt(parkingid);

  const handleBooking = async () => {
    try {
      await axios.post("http://localhost:8081/api/booking/confirm", {
        user_id: userId,
        parking_id: convertedParkingID,
        vehicle_num: vehicleNum,
        booking_hours: hours,
        starting_Time: convertedTime,
      });
      alert(
        "You have successfully Made A Booking You will get an email confirmation"
      );
      navigate('/')
    } catch (error) {
      if(error.response && error.response.status === 402){
        alert('The Time should in the limits of 30mins please enter a time ending with 30 or 00')
      }if(error.response && error.response.status === 401){
        alert(' Sorry there are no parking Spots available at thi time please come back another time')
      }if(error.response && error.response.status === 405){
        alert('please enter proper information')
      }else{
        console.error(error);
      }
      
    }
    
  };

  return (
    <div className="final">
    
    <div className="final__form-sec">
      <h1 className="final__heading">Book Your Spot</h1>
      <form className="final__form">
        <input
          placeholder="User Name"
          className="final__input"
          id="user_name"
          value={convertedTime}
          type="datetime-local"
          onChange={(e) => setStartingTime(e.target.value)}
        />
        <input
          placeholder="Enter the Hours"
          className="final__input"
          id="hours"
          value={hours}
          type="number"
          onChange={(e) => setHours(e.target.value)}
        />
        <input
          placeholder="vehicle Number"
          className="final__input"
          id="vehicleNum"
          value={vehicleNum}
          type="text"
          onChange={(e) => setVehicleNum(e.target.value)}
        />
      </form>
      <div>
        <button className="final__button" onClick={handleBooking}>Book Now</button>
      </div>
      </div>
    </div>
  );
}

export default Booking;
