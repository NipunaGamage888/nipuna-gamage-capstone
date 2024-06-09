import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import styles from "./Payment.module.scss";

export default function Payment({ color, width, price, user }) {
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
    console.log(price)
    console.log(user);
  };
  return (
    <div>
      <button className={`${styles.final__button} ${styles[color]}`} onClick={() => handleBooking()}>
        Book Now
      </button>
    </div>
  );
}
