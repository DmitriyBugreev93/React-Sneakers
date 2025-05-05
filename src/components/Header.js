import { Link } from "react-router";
import React from "react";
import AppContext from "../context";

function Header(props) {

  const {cartItems} = React.useContext(AppContext)

  const totalPrice = cartItems.reduce((sum,obj)=> obj.price + sum, 0)
  

  return (
    <header className="header">
    <Link to="/">
      <div className="header__left">
          <img width={40} height={40} src="/img/logo.png" alt="" />
          <div className="heaedr__info">
            <h3>REACT SNEAKERS</h3>
            <p>
              Магазин лучших кроссовок
            </p>
          </div>
      </div>
      </Link>
      <ul className="header__right">
        <li onClick={props.onClickCart} className="cu-p">
          <img src="/img/kor.svg" alt="" />
          <span>
            {totalPrice} руб.
          </span>
        </li>
        <li>
          <Link to="/favorites">
            <img src="/img/zakl.svg" alt="" />
            <span>
              Закладки
            </span>
          </Link>
        </li>
        <li>
        <Link to="/orders">
          <img src="/img/prof.svg" alt="" />
          <span>
            Профиль
          </span>
          </Link>
        </li>
      </ul>

    </header>
  )
}

export default Header;