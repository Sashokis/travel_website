import React from "react";
import "../style/CatalogTour.css";

export default function CatalogTour() {
  return (
    <div id="catalog" className="content-top">
      <div className="product-box product-content center">
        <div className="product product-min">
          <img className="product__img" src="img/bali.jpg" alt="logo" />
          <h3 className="product__heading"> Бали</h3>
          <p className="product__text">
            Бали — это больше, чем место; это настроение, стремление,
            тропическое состояние души
          </p>
        </div>

        <div className="product">
          <img className="product__img" src="img/place1.jpg" alt="logo" />
          <h3 className="product__heading"> Париж </h3>
          <p className="product__text">
            Если тебе повезло и ты в молодости жил в Париже, то, где бы ты ни
            был потом, он до конца дней твоих останется с тобой, потому что
            Париж — это праздник, который всегда с тобой.
          </p>
        </div>

        <div className="product product-min">
          <img className="product__img " src="img/sidney.jpg" alt="logo" />
          <h3 className="product__heading"> Сидней </h3>
          <p className="product__text">
            Как же я люблю чувствовать себя безликим в городе, где я раньше
            никогда не был
          </p>
        </div>

        <div className="product ">
          <img className="product__img " src="img/tokyo.jpg" alt="logo" />
          <h3 className="product__heading"> Токио </h3>
          <p className="product__text">
            Токио — это город, который никогда не останавливается, который
            всегда в движении.
          </p>
        </div>

        <div className="product product-min">
          <img className="product__img" src="img/newYork.jpeg" alt="logo" />
          <h3 className="product__heading"> Нью-Йорк </h3>
          <p className="product__text">
            Я выхожу из такси, и это, наверное, единственный город, который в
            реальности выглядит лучше, чем на открытках
          </p>
        </div>

        <div className="product ">
          <img className="product__img " src="img/barcelona.jpg" alt="logo" />
          <h3 className="product__heading"> Барселона </h3>
          <p className="product__text">
            Здесь, в Барселоне, объектами восхищения являются архитекторы,
            построившие здания, сделавшие город культовым, а не кучка слабоумных
            монархов
          </p>
        </div>
      </div>
    </div>
  );
}
