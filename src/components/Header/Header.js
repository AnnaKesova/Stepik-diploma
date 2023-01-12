import React from "react";
import "../Header/Header.css";

function Header() {
  return (
    <header className="page__header header">
    <div id="uberEats" className="header__logo"></div>
    <div className="header__autorize">
      <button className="header__in">Войти</button>
      <div className="header__lock"></div>
    </div>
  </header>
  );
}

export default Header;