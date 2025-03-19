function Header(){
    return(
        <header className="header">

        <div className="header__left">
          <img width={40} height={40} src="/img/logo.png" alt="" />
          <div className="heaedr__info">
            <h3>REACT SNEAKERS</h3>
            <p>
              Магазин лучших кроссовок
            </p>
          </div>
        </div>

        <ul className="header__right">
          <li>
            <img src="/img/kor.svg" alt="" />
            <span>
              1205 руб.
            </span>
          </li>
          <li>
            <img src="/img/zakl.svg" alt="" />
            <span>
              Закладки
            </span>
          </li>
          <li>
            <img src="/img/prof.svg" alt="" />
            <span>
              Профиль
            </span>
          </li>
        </ul>

      </header>
    )
}

export default Header;