import React from "react";
import { Link } from "react-router-dom";
import "../Main/Main.css";
import macd from "../../images/macdonalds.svg";
import dim from "../../images/dimSum.svg";
import dvijok from "../../images/Движок.svg";
import nia from "../../images/ня.svg";
import point from "../../images/точка.svg";
import cinabon from "../../images/cinabon.svg";
import pizzalove from "../../images/pizzelove.svg";
import cafe from "../../images/кафе.svg";
import bar from "../../images/bar.svg";

function Main() {
  return (
    <main className="page__content content">
      <section className="content__find find">
        <form className="find__form form">
          <input
            className="form__request"
            placeholder="Поиск по ресторанам и кухням"
          />
        </form>
      </section>
      <section className="content__restaurants restaurants">
        <h1 className="restaurants__moscow">Рестораны в Москве</h1>
        <div className="restaurants__cafes cafes">
          <ul className="cafes__list">
            <li className="cafes__description description">
              <Link href="#" className="description__secondPage">
                <img
                  className="description__photo"
                  src={macd}
                  alt="макдональдс"
                />
              </Link>
              <h2 className="description__name">Макдоналдс — Газетный</h2>
              <p className="description__kitchen">₽₽ • Бургеры</p>
              <p className="description__time">25 - 35 мин</p>
            </li>
            <li className="cafes__description description">
              <Link href="#" className="description__secondPage">
                <img className="description__photo" src={dim} alt="ДимСам" />
              </Link>
              <h2 className="description__name">DimSum & Co — ЦДМ</h2>
              <p className="description__kitchen">
                ₽ • Японская • Китайская • Азиатская
              </p>
              <p className="description__time">40 - 50 мин</p>
            </li>
            <li className="cafes__description description">
              <Link href="#" className="description__secondPage">
                <img className="description__photo" src={dvijok} alt="Движок" />
              </Link>
              <h2 className="description__name">ДвижОК — Манежная</h2>
              <p className="description__kitchen">
                ₽ • Американская • Европейская
              </p>
              <p className="description__time">35 - 45 мин</p>
            </li>
            <li className="cafes__description description">
              <Link href="#" className="description__secondPage">
                <img className="description__photo" src={nia} alt="НЯ — NHA" />
              </Link>
              <h2 className="description__name">НЯ — NHA</h2>
              <p className="description__kitchen">₽₽ • Вьетнамская</p>
              <p className="description__time">30 - 40 мин</p>
            </li>
            <li className="cafes__description description">
              <Link href="#" className="description__secondPage">
                <img
                  className="description__photo"
                  src={point}
                  alt="Точка Дзы — Цветной"
                />
              </Link>
              <h2 className="description__name">Точка Дзы — Цветной</h2>
              <p className="description__kitchen">₽₽ • Вьетнамская</p>
              <p className="description__time">40 - 50 мин</p>
            </li>
            <li className="cafes__description description">
              <Link href="#" className="description__secondPage">
                <img
                  className="description__photo"
                  src={cinabon}
                  alt="Cinnabon"
                />
              </Link>
              <h2 className="description__name">Cinnabon</h2>
              <p className="description__kitchen">
                ₽ • Выпечка • Десерты • Капкейки
              </p>
              <p className="description__time">25 - 35 мин</p>
            </li>
            <li className="cafes__description description">
              <Link href="#" className="description__secondPage">
                <img
                  className="description__photo"
                  src={pizzalove}
                  alt="PIZZELOVE"
                />
              </Link>
              <h2 className="description__name">PIZZELOVE</h2>
              <p className="description__kitchen">₽₽ • Пицца</p>
              <p className="description__time">15 - 25 мин</p>
            </li>
            <li className="cafes__description description">
              <Link href="#" className="description__secondPage">
                <img
                  className="description__photo"
                  src={cafe}
                  alt="Zю кафе — Тверская"
                />
              </Link>
              <h2 className="description__name">Zю кафе — Тверская</h2>
              <p className="description__kitchen">₽₽ • Японская</p>
              <p className="description__time">25 - 35 мин</p>
            </li>
            <li className="cafes__description description">
              <Link href="#" className="description__secondPage">
                <img
                  className="description__photo"
                  src={bar}
                  alt="Bar BQ Cafe — Манежная"
                />
              </Link>
              <h2 className="description__name">Bar BQ Cafe — Манежная</h2>
              <p className="description__kitchen">₽₽₽ • Европейская</p>
              <p className="description__time">30 - 40 мин</p>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default Main;
