import React from "react";
import { Link } from "react-router-dom";
import "../Footer/Footer.css";

function Footer() {
  return (
    <footer className="page__footer footer">
          <div className="footer__content">
            <div className="footer__logo"></div>
            <nav className="footer__navigation navigation">
              <div className="navigation__instrument">
                <select className="navigation__search" name="search">
                  <option value="yandex" className="search__language">
                    <span className="search__shape"></span>Русский
                  </option>
                  <option value="some-search" className="search__language">
                    <span className="search__shape"></span>Другой язык
                  </option>
                </select>
                <p className="navigation__food">&#35;UberEats</p>
                <div className="navigation__links">
                  <Link href="#" className="navigation__facebook"></Link>
                  <Link href="#" className="navigation__tweter"></Link>
                  <Link href="#" className="navigation__instagram"></Link>
                </div>
              </div>
              <div className="footer__about about">
                <ul className="about__list">
                  <li className="about__margin">
                    <Link className="footer__link" href="#uberEats"
                      >Об UberEats</Link>
                  </li>
                  <li className="about__margin">
                    <Link className="footer__link" href="#" target="_blank"
                      >Станьте партнёром по доставке</Link>
                  </li>
                  <li className="about__margin">
                    <Link className="footer__link" href="#" target="_blank"
                      >Станьте парнёром-рестораном</Link>
                  </li>
                </ul>
              </div>
              <div className="footer__news news">
                <ul className="footer__list about__list">
                  <li className="news__margin about__margin">
                    <Link className="footer__link" href="#" target="_blank"
                      >Все города</Link>
                  </li>
                  <li className="news__margin about__margin">
                    <Link className="footer__link" href="#" target="_blank">Цены</Link>
                  </li>
                  <li className="news__margin about__margin">
                    <Link className="footer__link" href="#" target="_blank">Помощь</Link>
                  </li>
                  <li className="news__margin about__margin">
                    <Link className="footer__link" href="#" target="_blank">FAQs</Link>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="footer__application application">
              <Link href="https://play.google.com/store/games?hl=ru&gl=US&pli=1" className="application__google"></Link>
            </div>
            <div className="footer__about-site about-site">
              <p className="about-site__name">&#169; 2017 Uber Technologies Inc.</p>
              <Link href="#" className="about-site__personal about-site__name"
                >Обработка персональных данных</Link>
              <Link href="#" className="about-site__personal about-site__name"
                >Пользовательское соглашение</Link>
            </div>
          </div>
        </footer>
  );
}

export default Footer;