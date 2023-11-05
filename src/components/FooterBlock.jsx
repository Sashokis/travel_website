import React from "react";
import "../style/FooterBlock.css";

export default function FooterBlock() {
  return (
    <div id="footer_" className="footer__content center">
      <div className="footer__info">
        <a className="header__logo" href="">
          <img className="header__logo-img" src="img/Logo.svg" alt="logo" />
        </a>

        <nav className="footer__item">
          <h4 className="footer__heading">Меню</h4>
          <a className="footer__link" href="#">
            Главная
          </a>
          <a className="footer__link" href="#catalog">
            Каталог
          </a>
        </nav>

        <div className="footer__item">
          <h4 className="footer__heading">Контакты</h4>
          <a className="footer__link" href="#">
            +7 900 800 90 80
          </a>
          <a className="footer__link" href="#">
            airtripp@help.com
          </a>
          <div className="footer__icon">
            <a href="#">
              <img
                className="footer__icon_social"
                src="img/icons/Instagram.png"
                width="24"
                height="25"
                alt="logo"
              />
            </a>
            <a href="#">
              <img
                className="footer__icon_social"
                src="img/icons/Facebook.png"
                width="24"
                height="25"
                alt="logo"
              />
            </a>
            <a href="#">
              <img
                className="footer__icon_social"
                src="img/icons/Vector.png"
                width="24"
                height="25"
                alt="logo"
              />
            </a>
          </div>
        </div>

        <div className="footer__form" action="#">
          <p className="form__text"> Получайте наши новости и обновления: </p>
          <input
            className="form__email"
            type="email"
            placeholder="Email Address"
          />

          <button className="form__button">Подписаться</button>
        </div>
      </div>
    </div>
  );
}
