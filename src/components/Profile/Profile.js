import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./profile.scss";

function Profile() {
  const [user, setUser] = useState("");

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

          setUser(response.data);
          console.log(response)
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
  }, []);
  return (
    <div className="profile">
      <div className="profile__form-sec">
        <h1 className="profile__heading">Profile</h1>
        <div className="profile__form">
          <div className="profile__details">
            <h2 className="profile__detail-heading">Name</h2>
            <p className="profile__detail-info">{user.user_name}</p>
          </div>
          <div className="profile__details">
            <h2 className="profile__detail-heading">Email</h2>
            <p className="profile__detail-info">{user.email}</p>
          </div>
          <div className="profile__details">
            <h2 className="profile__detail-heading">Telephone Number</h2>
            <p className="profile__detail-info">{user.telephone_num}</p>
          </div>
          <div className="profile__details">
            <h2 className="profile__detail-heading">Adddress</h2>
            <p className="profile__detail-info">{user.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
