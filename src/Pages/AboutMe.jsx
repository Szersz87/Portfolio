import React from "react";
import Ikon from "../Shered/Icon";
import Button from "../Shered/Button";
import { faAt, faPhone, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import ScrollAnimation from "react-animate-on-scroll";
import { Margin } from "devextreme-react/cjs/bar-gauge";

export default function AboutMe() {
  return (
    <div className="aboutMe">
      <ScrollAnimation duration={5} animateIn="hinge" initiallyVisible={true} animatePreScroll={false} style={{ marginLeft: '150px' }}>
        <h1>O mnie</h1>
      </ScrollAnimation>
      <div className="welcomeContainer">
        <ScrollAnimation delay={400} animateIn='tada' initiallyVisible={true}>
        <h2> Cześć! Jestem Łukasz </h2>
        </ScrollAnimation>
        <p>Witam Cię serdecznie na mojej stronie!</p>
        <p>
          Przygotowałem ją jako swoją wizytówkę, gdzie znajdziesz nie tylko
          informacje o mnie, ale także zapoznasz się z moimi projektami i
          planami na przyszłość.
        </p>
        <p>Zapraszam do klikania 😁</p>
      </div>
      <div className="accordion">
        <div className="accordionBox">
        <ScrollAnimation delay={400} animateIn='tada' initiallyVisible={true}>
          <Button className="hardSkills" title="Hard Skills" />
          <ul className="infoText">
            <li>HTML</li>
            <li>CSS/Tailwind/Bootstrap</li>
            <li>JavaScrypt</li>
            <li>React.js</li>
            <li>Git</li>
          </ul>
          </ScrollAnimation>
          <ScrollAnimation delay={400} animateIn='tada' initiallyVisible={true}>
          <Button className="softSkills" title="Soft Skills" />
          <ul className="infoText">
            <li>Umiejętność pracy zespołowej</li>
            <li>Rozwiązywanie problemów</li>
            <li>Empatia</li>
            <li>Elastyczność</li>
            <li>Kreatywność</li>
          </ul>
          </ScrollAnimation>
          <ScrollAnimation delay={400} animateIn='tada' initiallyVisible={true}>
          <Button className="languages" title="Languages" />
          <ul className="infoText">
            <li>
              Polski<span>nativ</span>
            </li>
            <li>
              Angielski<span>B2</span>
            </li>
          </ul>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}
