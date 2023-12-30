import React from "react";
import Ikon from "../Shered/Icon";
import Button from "../Shered/Button";
import { faAt, faPhone, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function AboutMe() {

  return (
    <div className="aboutMe">
      <div className="leftSide">
        <div className="contakt">
          <div className="image"></div>
          <div className="adres">
            <p>
              <Ikon src={faAt} />
              <span>lukiszerszen@gmail.com</span>
            </p>
            <p>
              <Ikon src={faPhone} />
              <span>609169086</span>
            </p>
            <a href="https://github.com/Szersz87/Portfolio">
              <Ikon src={faGlobe} />
              <span>portfolio</span>
            </a>
            <a href="https://github.com/Szersz87/Portfolio">
              <Ikon src={faGithub} />
              <span>github</span>
            </a>
          </div>
        </div>
        <div className="accordion">
            <div className="accordionBox">
          <Button className="hardSkills" title="Hard Skills" />
          <ul className="infoText">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScrypt</li>
            <li>React.js</li>
            <li>Git</li>
          </ul>
          <Button className="softSkills" title="Soft Skills" />
          <ul className="infoText">
            <li>Umiejętność pracy zespołowej</li>
            <li>Rozwiązywanie problemów</li>
            <li>Empatia</li>
            <li>Elastyczność</li>
            <li>Kreatywność</li>
          </ul>
          <Button className="languages" title="Languages" />
          <ul className="infoText">
            <li>Polski<span>nativ</span></li>
            <li>Angielski<span>B2</span></li>
          </ul>
        </div>
        </div>
      </div>
      <div className="rightSide">
        <div className="me">
          <h1>Łukasz Szerszyński</h1>
          <h2>Frontend Developer</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
            ducimus sequi! Dicta error, in ea ex, quas iure suscipit voluptas
            porro molestiae saepe sed doloremque, reiciendis nobis sit sunt
            explicabo.
          </p>
        </div>
        <div className="experience">
          <ul>
            Doświadczenie:
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="study">
          <ul>
            Wykształcenie
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="hobby"></div>
      </div>
    </div>
  );
}
