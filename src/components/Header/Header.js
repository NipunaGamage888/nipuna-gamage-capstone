import React, { useEffect } from "react";
import { useState } from "react";
import "./Header.scss";

function Header() {
  const [userLoggedIn, setIsUserLoggedIn] = useState(true);

  useEffect(()=>{
    const setToken=localStorage.getItem('token')
    if(!setToken){
      setIsUserLoggedIn(false)
    }
  })

  const logOut =()=>{
    localStorage.removeItem('token');
    setIsUserLoggedIn(false);
  }
  return (
    <header className="header">
      <div className="header__main">
        <h1 className="header__heading"></h1>
        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__li">About Us</li>
            <li className="header__li">book now</li>
            <li
              className={` ${
                userLoggedIn ? "header__user-logged" : "header__li"
              }`}
            >
              login
            </li>
            <li
              className={`header__li ${
                userLoggedIn ? "header__li" : "header__user-logged"
              }`}
            >
              Profile
            </li>
            <li
            onClick={logOut}
              className={`header__li ${
                userLoggedIn ? "header__li" : "header__user-logged"
              }`}
            >
              logout
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
