import { Outlet, Link } from "react-router-dom";
import React from 'react';

export default function NavigationMenu({ isOpen, closeMenu}) {
  return (
    <>
      <nav className={`navigation ${isOpen ? 'open' : ''}`}>
        <ul>
          <li onClick={closeMenu}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/aboutMe">About Me</Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/portfolio">Portfolio</Link>
          </li>
        </ul>
      </nav>


      <Outlet />
      
    </>
  );
}