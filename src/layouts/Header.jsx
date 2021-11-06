import React from 'react';
import logo from './../assets/MS Header1.gif';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const activeStyles = {
    backgroundColor: '#738c31',
    borderRadius: '3px',
    color: 'white',
  };

  return (
    <div className="header">
      <NavLink to="/">
        <img className="header__logo" src={logo} alt="logo" />
      </NavLink>
      <nav className="nav">
        <NavLink className="nav__link" to="/events" activeStyle={activeStyles}>
          Events
        </NavLink>
        <NavLink
          className="nav__link"
          to="/recordings"
          activeStyle={activeStyles}
        >
          Albums
        </NavLink>
        <NavLink
          className="nav__link"
          to="/harpshop"
          activeStyle={activeStyles}
        >
          Shop
        </NavLink>
        <NavLink className="nav__link" to="/classes" activeStyle={activeStyles}>
          Classes
        </NavLink>
        <NavLink className="nav__link" to="/contact" activeStyle={activeStyles}>
          Contact
        </NavLink>
      </nav>
      {/* <h4 className="header__nav--right">Celtic Yuletide Tickets On-Sale Now!</h4> */}
    </div>
  );
};

export default Header;
