function Drawer() {
    return (
        <div style={{ display: 'none' }} className="overlay">

            <div className="drawer">

                <h2>
                    Корзина
                    <img className="cart-item-btn cu-p" src="/img/btn-remove.svg" alt="" />
                </h2>

                <div className="cart-wrap">

                    <div className="cart-item">

                        <img className="cart-item-img" src="/img/card1.png" alt="" />
                        <div className="cart-item-cont">
                            <p>
                                Мужские Кроссовки Nike Blazer Mid Suede
                            </p>
                            <b>
                                12 999 руб.
                            </b>
                        </div>
                        <img className="cart-item-btn" src="/img/btn-remove.svg" alt="" />
                    </div>

                    <div className="cart-item">

                        <img className="cart-item-img" src="/img/card2.png" alt="" />
                        <div className="cart-item-cont">
                            <p>
                                Мужские Кроссовки Nike Air Max 270
                            </p>
                            <b>
                                17 999 руб.
                            </b>
                        </div>
                        <img className="cart-item-btn" src="/img/btn-remove.svg" alt="" />
                    </div>

                    <div className="cart-item">

                        <img className="cart-item-img" src="/img/card1.png" alt="" />
                        <div className="cart-item-cont">
                            <p>
                                Мужские Кроссовки Nike Blazer Mid Suede
                            </p>
                            <b>
                                12 999 руб.
                            </b>
                        </div>
                        <img className="cart-item-btn" src="/img/btn-remove.svg" alt="" />
                    </div>

                </div>

                <div className="cart-bottom">
                    <ul >
                        <li>
                            <span>Итого:</span>
                            <div></div>
                            <b>21 498 руб.</b>
                        </li>
                        <li>
                            <span>Налог 5%:</span>
                            <div></div>
                            <b>1074 руб.</b>
                        </li>
                    </ul>

                    <button className="green-btn">
                        Оформить заказ
                        <img src="/img/arrow.svg" alt="" />
                    </button>
                </div>

            </div>

        </div>
    )
}

export default Drawer;