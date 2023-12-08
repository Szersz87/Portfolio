import React from "react";

export default function HomePage() {
  return (
    <div className="homePage">
      <div className="welcomeContainer">
        <h1> Cześć! </h1>
        <p>
          <p>
            Witam Cię serdecznie na mojej stronie! Jestem Łukasz, a ta strona to
            swoiste okno na świat mojej pasji i profesji.
          </p>
          <p>
            Przygotowałem ją jako swoją wizytówkę, gdzie znajdziesz nie tylko
            informacje o mnie, ale także zapoznasz się z moimi projektami i
            planami na przyszłość.
          </p>
          <p>
            Zapraszam do pierwszej kategorii - "O mnie". Tutaj podzielę się z
            Tobą kilkoma kawałkami mojego życia. Dowiesz się, co sprawia mi
            radość, jakie są moje zainteresowania i hobby. Znajdziesz również
            informacje do kontaktu oraz odkryjesz, co wyróżnia mnie spośród
            innych.
          </p>
          <p>
            Druga kategoria, "Portfolio", to miejsce, w którym prezentuję efekty
            mojej pracy. Znajdziesz tutaj projekty, które udało mi się
            zrealizować do tej pory, te, nad którymi aktualnie pracuję, oraz
            zerkniesz na to, co jeszcze mam w planach.
          </p>
          <p>
            Poniżej znajdziesz mapę mojej kariery - podróż, którą chętnie dzielę
            się z Tobą. Mam nadzieję, że spędzisz tu chwilę z przyjemnością,
            odkrywając zakamarki mojego świata. Jeśli masz pytania lub chciałbyś
            podzielić się swoimi spostrzeżeniami, śmiało skontaktuj się ze mną.
          </p>
          <p>Dziękuję za odwiedziny! Z pozdrowieniami, Łukasz</p>
        </p>
      </div>
      <div className="imageNavigation"></div>
      <div className="timeLine">
        <ul>
          <li>
            <p>In progress1</p>
          </li>
          <li>
            <p>In progress2</p>
          </li>
          <li>
            <p>In progress3</p>
          </li>
          <li>
            <p>In progress4</p>
          </li>
          <li>
            <p>In progress5</p>
          </li>
          <li>
            <p>In progress6</p>
          </li>
          <li>
            <p>In progress7</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
