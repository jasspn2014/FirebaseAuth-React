import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";

import Logo from "../../assets/logo.png";

const Header = ({ user }) => (
  <div className="header">
    <div className="logo">
      <Link to="/">
        <img src={Logo} className="logo-image" alt="" />
      </Link>
    </div>
    <ul className="menu">
      <li>
        <Link to="/" className="menu-item">
          HOME
        </Link>
      </li>
      <li>
        {user ? (
          <Link to="/login" className="menu-item">
            SIGN OUT
          </Link>
        ) : (
          <div className="menu-item">SIGN IN</div>
        )}
      </li>
    </ul>
  </div>
);

export default Header;
