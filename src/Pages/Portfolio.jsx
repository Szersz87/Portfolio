import React from "react";


export default function Portfolio() {
  const handleProjectClick = (clickedProject) => {
    const projects = document.querySelectorAll(".card");
    projects.forEach((project) => {
      project.classList.remove("active");
    });

    clickedProject.classList.add("active");
  };

  return (
    <div className="body">
      <div className="wrapper">
        <div
          className="card project1 active"
          onClick={(e) => handleProjectClick(e.currentTarget)}>
          <div className="link">
            <a href="http://alter-rowery.pl/">AlterBikeShop</a>
          <a href="https://github.com/Szersz87/AlterBikeShop">GitHub</a>
          </div>
          <div className="text">
            <h2>AlterBikeShop</h2>
            <p>Moja pierwsza strona, stworzona przy pomocy Bootstrapa. Skupiłem się tu na responsywności i przejżystości. Strona jest wykorzystywana jako wizytówka firmy, w której pracuję </p>
          </div>
        </div>
        <div
          className="card project2"
          onClick={(e) => handleProjectClick(e.currentTarget)}>
           <div className="link">
            <a href="https://szersz87.github.io/TodosTask/">TodoList</a>
          <a href="https://github.com/Szersz87/TodosTask">GitHub</a>
          </div>
          <div className="text">
            <h2>ToDoList</h2>
            <p>
              Pierwszy projekt, którego zadaniem było użycie języka JavaScript,a finalnie zoptymalizowany i czysty kod
            </p>
          </div>
        </div>
        <div
          className="card project3"
          onClick={(e) => handleProjectClick(e.currentTarget)}>
           <div className="link">
            <a href="https://szersz87.github.io/">Just_Movies</a>
          <a href="https://github.com/Szersz87/just_movies">GitHub</a>
          </div>
          <div className="text">
            <h2>Just_Movies</h2>
            <p>
              Spotkanie z Reactem. Nauka pisania struktury, wykorzystywanie reużywalnych komponentów oraz praca z Api i LocalStorage. Duży nacisk na przejrzysty sposób pisania kodu
            </p>
          </div>
        </div>
        <div
          className="card project4"
          onClick={(e) => handleProjectClick(e.currentTarget)}>
           <div className="link">
            <a href="https://github.com/Szersz87/Portfolio">Portfolio</a>
          <a href="https://github.com/Szersz87/Portfolio">GitHub</a>
          </div>
          <div className="text">
            <h2>Portfolio</h2>
            <p>
              Skupiłem się tu na wykorzystaniu metod, które najbardziej mi przypasowały podczas nauki. Użycie frameworka React - podoba mi się tworzenie mniejszych komponentów i budowa z nich całości. Scss jako stylowanie 
            </p>
          </div>
        </div>
        <div
          className="card project5"
          onClick={(e) => handleProjectClick(e.currentTarget)}>
           <div className="link">
            {/* <a href=""></a> */}
          {/* <a href="">GitHub</a> */}
          </div>
          <div className="text">
            <h2>In_Progress</h2>
            <p>
              Obecnie uczę się dalej Reacta. Tworzę stronę dla firmy budowlanej, a jak osiągnę trochę wyższy poziom. Mam pomysł na przydatną aplikację, która wspomoże działanie serwisów rowerowych i dostarczy niezbędnych informacji ich klientom. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
