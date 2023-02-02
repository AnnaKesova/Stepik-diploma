import React from "react";
import "../MainPoushkin/MainPoushkin.css";
import captureOne from "../../../images/Capture (3).svg";
import captureTwo from "../../../images/Capture (2).svg";
import captureThree from "../../../images/Capture (1).svg";
import captureFour from "../../../images/Capture (4).svg";
import captureFive from "../../../images/Capture (5).svg";
import captureSix from "../../../images/Capture (6).svg";

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
      <section className="content__snacks snacks">
        <div className="snacks__container">
          <h2 className="snacks__title">Закуски</h2>
          <ul className="snacks__list">
            <li className="snacks__link">
              <div className="snacks__about">
                <div className="snacks__composition">
                  <h3 className="snacks__subtitle">
                    Сельдь на бородинском хлебе
                  </h3>
                  <p className="snacks__description">С яйцом и огурцом</p>
                </div>

                <p className="snacks__price">240 ₽</p>
              </div>
              <img className="snacks__photo" src={captureOne} alt=""></img>
            </li>
            <li className="snacks__link">
              <div className="snacks__about">
                <div className="snacks__composition">
                  <h3 className="snacks__subtitle">Соленья ассорти</h3>
                  <p className="snacks__description"></p>
                </div>
                <p className="snacks__price">320 ₽</p>
              </div>
              <img className="snacks__photo" src={captureTwo} alt=""></img>
            </li>
            <li className="snacks__link">
              <div className="snacks__about">
                <div className="snacks__composition">
                  <h3 className="snacks__subtitle">Грибы маринованные</h3>
                  <p className="snacks__description"></p>
                </div>
                <p className="snacks__price">300 ₽</p>
              </div>
              <img className="snacks__photo" src={captureThree} alt=""></img>
            </li>
            <li className="snacks__link">
              <div className="snacks__about">
                <div className="snacks__composition">
                  <h3 className="snacks__subtitle">Сало домашнее с горчицей</h3>
                  <p className="snacks__description"></p>
                </div>
                <p className="snacks__price">320 ₽</p>
              </div>
              <img className="snacks__photo" src={captureFour} alt=""></img>
            </li>
            <li className="snacks__link">
              <div className="snacks__about">
                <div className="snacks__composition">
                  <h3 className="snacks__subtitle">Малосольная семга</h3>
                  <p className="snacks__description"></p>
                </div>
                <p className="snacks__price">390 ₽</p>
              </div>
              <img className="snacks__photo" src={captureFive} alt=""></img>
            </li>
            <li className="snacks__link">
              <div className="snacks__about">
                <div className="snacks__composition">
                  <h3 className="snacks__subtitle">Язык говяжий с хреном</h3>
                  <p className="snacks__description"></p>
                </div>
                <p className="snacks__price">350 ₽</p>
              </div>
              <img className="snacks__photo" src={captureSix} alt=""></img>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default MainPoushkin;
