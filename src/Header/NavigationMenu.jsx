import { Outlet, Link } from "react-router-dom";
import React from "react";
import Ikon from "../Shered/Icon";
import { OrbitSpace } from "orbit-space";
import {
  faFacebook,
  faLinkedin,
  faGithub,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import {
  faUser,
  faClipboard,
  faPhoneVolume,
  faIdCard,
} from "@fortawesome/free-solid-svg-icons";

export default function NavigationMenu({ isOpen, closeMenu }) {
  return (
    <>
      <nav className={`navigation ${isOpen ? "open" : ""}`}>
        <OrbitSpace>
          <div className="profilContainer">
            <div className="image">
            </div>
            <h1>Łukasz Szerszyński</h1>
            <div className="ikons">
              <a href="https://www.facebook.com/profile.php?id=100070046650907"><Ikon src={faFacebook} /></a>
              <a href="https://www.linkedin.com/in/lukasz-szerszynski-896678272/"><Ikon src={faLinkedin} /></a>
              <a href="https://github.com/Szersz87"><Ikon src={faGithub} /></a>
              <a href="https://discord.com/"><Ikon src={faDiscord} /></a>
            </div>
          </div>
          <ul>
            <li onClick={closeMenu}>
              <Link to="/aboutMe">
                <Ikon src={faUser} /> About Me
              </Link>
            </li>
            <li onClick={closeMenu}>
              <Link to="/portfolio">
                <Ikon src={faClipboard} /> 
                Portfolio
              </Link>
            </li>
            <li onClick={closeMenu}>
              <Link to="/">
                <Ikon src={faIdCard} /> 
                Resume
              </Link>
            </li>
            <li onClick={closeMenu}>
              <Link to="/">
                <Ikon src={faPhoneVolume} /> 
                Contact
              </Link>
            </li>
          </ul>
        </OrbitSpace>
      </nav>

      <Outlet />
    </>
  );
}
