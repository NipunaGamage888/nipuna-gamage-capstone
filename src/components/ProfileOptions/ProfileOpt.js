import React, { useState } from "react";
import './ProfileOpt.scss'
import PersonalDetails from "../PersonalDetails/PersonalDetails";

function ProfileOpt() {
  const [selectedOption, setSelectedOption]=useState('Profile')

  const SelectOptions=(options)=>{
    setSelectedOption(options)
  }
  return (
    <div className="options">
      <div className="options__select">
      <ul className="options__ul">
        <li className="options__li" onClick={()=>SelectOptions("Profile")}>Profie</li>
        <li className="options__li" onClick={()=>SelectOptions("Subscrition")}>Subscriptions</li>
        <li className="options__li" onClick={()=>SelectOptions("Penalties")}>Penalties</li>
        <li className="options__li" onClick={()=>SelectOptions("Bookings")}>Bookings</li>
        <li className="options__li" onClick={()=>SelectOptions("GiftCards")}>Gift Cards</li>
      </ul>
      </div>
      <div className="options__content">
        {selectedOption === "Profile" && <PersonalDetails/>}

      </div>

    </div>
  );
}

export default ProfileOpt;
