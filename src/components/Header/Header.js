import React from "react";
import { useState } from "react";
import "./Header.scss";

function Header() {
  const [userLoggedIn, setIsUserLoggedIn] = useState(true);
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
                userLoggedIn ? "header__li" : "header__user-loggeds"
              }`}
            >
              Profile
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
