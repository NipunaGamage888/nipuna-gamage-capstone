import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./Payment.scss";

export default function Payment({ price, user }) {
  const handleBooking = async () => {
    const currency = "CAD";
    try {
      const response = await axios.post(`http://localhost:8081/api/paymentRoute/checkoutsession`, {
        price: price,
        currency: currency,
        user: user,
      });
      
      // Redirect to the checkout session URL
      window.location.href = response.data.url;
    } catch (error) {
      console.error('Error creating checkout session:', error);
    }

    console.log(user);
  };
  return (
    <div>
      <button className="final__button" onClick={() => handleBooking()}>
        Book Now
      </button>
    </div>
  );
}
