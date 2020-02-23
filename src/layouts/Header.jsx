import React from 'react';
import logo from './../assets/MS Header1.gif';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="logo" />
      </Link>
      <nav className="nav">
        <Link className="nav__link" to="/">
          Home
        </Link>
        <Link className="nav__link" to="/classes">
          Classes
        </Link>
        <Link className="nav__link" to="/events">
          Events
        </Link>
        <Link className="nav__link" to="/harpshop">
          Harp Shop
        </Link>
        <Link className="nav__link" to="/recordings">
          Recordings
        </Link>
        <Link className="nav__link" to="/contact">
          Contact
        </Link>
      </nav>
      {/* <h4 className="header__nav--right">Celtic Yuletide Tickets On-Sale Now!</h4> */}
    </div>
  );
};

export default Header;
