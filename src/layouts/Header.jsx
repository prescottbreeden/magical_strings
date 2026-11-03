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
        <NavLink
          className="nav__link"
          to="/events"
          style={({ isActive }) => (isActive ? activeStyles : undefined)}
        >
          Events
        </NavLink>
        <NavLink
          className="nav__link"
          to="/recordings"
          style={({ isActive }) => (isActive ? activeStyles : undefined)}
        >
          Albums
        </NavLink>
        <NavLink
          className="nav__link"
          to="/harpshop"
          style={({ isActive }) => (isActive ? activeStyles : undefined)}
        >
          Shop
        </NavLink>
        <NavLink
          className="nav__link"
          to="/classes"
          style={({ isActive }) => (isActive ? activeStyles : undefined)}
        >
          Classes
        </NavLink>
        <NavLink
          className="nav__link"
          to="/contact"
          style={({ isActive }) => (isActive ? activeStyles : undefined)}
        >
          Contact
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
