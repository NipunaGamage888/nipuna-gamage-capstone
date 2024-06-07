import React, { useEffect } from "react";
import { useState } from "react";
import "./Header.scss";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";

function Header() {
  const [userLoggedIn, setIsUserLoggedIn] = useState(true);
  const [showNav, setShowNav] = useState(false);
  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const navigate = useNavigate();

  useEffect(() => {
    const setToken = localStorage.getItem("token");
    if (!setToken) {
      setIsUserLoggedIn(false);
    }
  });

  const logOut = () => {
    localStorage.removeItem("token");
    setIsUserLoggedIn(false);
    navigate('/')
  };
  return (
    <header className="header">
      <div className="header__main">
        <div className="header__icon">
          <FaBars style={{ color: "#FFD43B" }} onClick={toggleNav} />
        </div>
        {showNav && (
          <div className="header__side-nav">
            <FaBars style={{ color: "#FFD43B" }} onClick={toggleNav} />
            <ul className="header__list-mobile">
              <li onClick={()=>navigate('/')} className="header__li-mobile">About Us</li>
              <li onClick={()=>navigate('/booknow')} className="header__li-mobile">book now</li>
              <li
                onClick={() => navigate("/login")}
                className={`header__li-mobile ${
                  userLoggedIn ? "header__user-logged" : "header__li-mobilei"
                }`}
              >
                login
              </li>
              <li
                onClick={() => navigate("/profile")}
                className={`header__li-mobile ${
                  userLoggedIn ? "header__li-mobile" : "header__user-logged"
                }`}
              >
                Profile
              </li>
              <li
                onClick={()=>navigate('/loyalty')}
                className={`header__li-mobile ${
                  userLoggedIn ? "header__li-mobile" : "header__user-logged"
                }`}
              >
                Loyalty
              </li>
              <li
                onClick={logOut}
                className={`header__li-mobile ${
                  userLoggedIn ? "header__li-mobile" : "header__user-logged"
                }`}
              >
                logout
              </li>
            </ul>
          </div>
        )}
        <h1 onClick={()=>navigate('/')} className="header__heading"></h1>
        <nav className="header__nav">
          <ul className="header__list">
          <li onClick={()=>navigate('/')} className="header__li">About Us</li>
              <li onClick={()=>navigate('/booknow')} className="header__li">book now</li>
            <li
              onClick={() => navigate("/login")}
              className={` ${
                userLoggedIn ? "header__user-logged" : "header__li"
              }`}
            >
              login
            </li>
            <li
              onClick={() => navigate("/profile")}
              className={`header__li ${
                userLoggedIn ? "header__li" : "header__user-logged"
              }`}
            >
              Profile
            </li>
            <li
              onClick={() => navigate("/loyalty")}
              className={`header__li ${
                userLoggedIn ? "header__li" : "header__user-logged"
              }`}
            >
             Loyalty
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
