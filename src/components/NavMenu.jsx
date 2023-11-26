import React from "react";
import "../style/NavMenu.css";

export default function NavMenu() {
  return (
    <div className="top center">
      <section className="content center">
        <h1 className="content__title">
          Откройте для себя направления своей мечты с нашим туристическими
          модулями{" "}
        </h1>
        <div className="content__form ">
          <p className="content__text">
            {" "}
            Путешествия учат больше, чем что бы то ни было. Иногда один день,
            проведенный в других местах, дает больше, чем десять лет жизни дома.{" "}
          </p>
          <a href="#footer_">
            <button className="header__menu-button"> Связь с нами </button>
          </a>
        </div>
      </section>
      <div className="top-cart"></div>
      <div className="header center">
        <a className="header__logo" href="">
          <img className="header__logo-img" src="img/Logo.svg" alt="logo" />
        </a>
        <nav className="header__menu">
          <a className="header__menu-link up" href="#catalog">
            {" "}
            Исследуй напрвление
          </a>
          <a className="header__menu-link up" href="#footer_">
            {" "}
            О нас{" "}
          </a>
          <a className="header__menu-link up" href="#catalog">
            {" "}
            В путь!{" "}
          </a>
        </nav>
        <a href="#footer_">
          <button className="header__menu-button"> Связь с нами </button>
        </a>
      </div>
    </div>
  );
}
