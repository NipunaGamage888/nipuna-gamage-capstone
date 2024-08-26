import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import './PersonalDetails.scss'

function PersonalDetails() {
    const [user, setUser] = useState("");

    useEffect(() => {
      const fetchUserId = async () => {
        try {
          const token = localStorage.getItem("token");
  
          if (token) {
            const response = await axios.get(
              "http://localhost:8081/api/user/personal",
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );
  
            setUser(response.data);
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
      <div className="personal">
       <div className="personal__form-sec">
        
          <div className="personal__form">
            <div className="personal__details">
              <h2 className="personal__detail-heading">Name</h2>
              <p className="personal__detail-info">{user.user_name}</p>
            </div>
            <div className="personal__details">
              <h2 className="personal__detail-heading">Email</h2>
              <p className="personal__detail-info">{user.email}</p>
            </div>
            <div className="personal__details">
              <h2 className="personal__detail-heading">Telephone Number</h2>
              <p className="personal__detail-info">{user.telephone_num}</p>
            </div>
            <div className="personal__details">
              <h2 className="personal__detail-heading">Adddress</h2>
              <p className="personal__detail-info">{user.address}</p>
            </div>
          </div>
    </div>

      </div>
    );
}

export default PersonalDetails
