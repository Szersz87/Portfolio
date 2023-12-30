import React from "react";
import { Link } from "react-router-dom";
import Button from "../Shered/Button";
import Ikon from "../Shered/Icon";
import { TypeAnimation } from "react-type-animation";
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

export default function MainNavi() {
  return (
    <div className="MainNavi">
      <div className="leftNavi">
        <ul>
          <li>
            <Link to="/aboutMe">
              <Button buttonContent="button1" icon={faUser} title="About" />
            </Link>
          </li>
          <li>
            <Link to="/portfolio">
              <Button
                buttonContent="button2"
                icon={faClipboard}
                title="Portfolio"
              />
            </Link>
          </li>
          <li>
            <Link to="/">
              <Button
                buttonContent="button3"
                icon={faPhoneVolume}
                title="Contact"
              />
            </Link>
          </li>
          <li>
            <Link to="/">
              <Button buttonContent="button4" icon={faIdCard} title="Resume" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="rightNavi">
        <div className="images"></div>
        <div className="profilFoto"></div>
        <h2>Łukasz Szerszyński</h2>
        <div className="typing">
          <TypeAnimation
            sequence={[
              "I hate problems",
              500,
              "but...",
              500,
              "I Love the feeling",
              500,
              "when I solve them",
              500,
              ";)",
              500,
              "",
              500,
            ]}
            style={{ fontSize: "1em" }}
            repeat={Infinity}
          />
        </div>
        <div className="ikons">
        <a href="https://www.facebook.com/profile.php?id=100070046650907"><Ikon src={faFacebook} /></a>
              <a href="https://www.linkedin.com/in/lukasz-szerszynski-896678272/"><Ikon src={faLinkedin} /></a>
              <a href="https://github.com/Szersz87"><Ikon src={faGithub} /></a>
              <a href="https://discord.com/"><Ikon src={faDiscord} /></a>
        </div>
        <Button buttonContent="cvButton" title="DOWNLOAD CV" icon={faIdCard} />
      </div>
    </div>
  );
}
