import React from "react";
import "../MainPoushkin/MainPoushkin.css";

function MainPoushkin() {
  return (
    <main className="page__content content">
      <section className="content__about-menu about-menu">
        <div className="about-menu__name">
          <div className="about-menu__poushkin">
            <h2 className="about-menu__title">Трактир «Пушкин»</h2>
            <div className="about-menu__fix">
              <p className="about-menu__price">₽₽₽ • Европейская</p>
              <div className="about-menu__black">
                <p className="about-menu__time">40 - 50 мин</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="content__dish dish">
        <div className="dish__menu">
            <p className="dish__filter">Закуски</p>
            <p className="dish__filter">Салаты</p>
            <p className="dish__filter">Супы</p>
            <p className="dish__filter">Горячие блюда</p>
            <p className="dish__filter">Гарниры</p>
            <p className="dish__filter">Десерты</p>
        </div>
      </section>
    </main>
  );
}

export default MainPoushkin;
