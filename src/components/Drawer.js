import axios from "axios";
import React from "react";

import Info from "./info";
import AppContext from "../context";

const delay = () => new Promise((resolve) => setTimeout(resolve, 1000));

function Drawer({ onClose, onRemove, items = [], opened }) {

    const { cartItems, setCartItems } = React.useContext(AppContext)
    const [orderId, setOrderId] = React.useState(null);
    const [isOrderComplete, setIsOrderComplete] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);

    const totalPrice = cartItems.reduce((sum,obj)=> obj.price + sum, 0)

    const onClickOrder = async () => {
        try {
            setIsLoading(true)
            const { data } = await axios.post('https://67fe432d58f18d7209ed67b4.mockapi.io/orders', {
                items: cartItems,
            });

            setOrderId(data.id)
            setIsOrderComplete(true);
            setCartItems([]);

            for (let i = 0; i < cartItems.length; i++) {
                const item = cartItems[i];
                await axios.delete('https://67efcaa52a80b06b8895c59f.mockapi.io/cart/' + item.id);
                await delay()
            }

        } catch (error) {
            console.error(error)
        }
        setIsLoading(false)
    }

    return (
        <div className={`overlay ${opened ? 'overlayVisiable' : ''}`}>

            <div className="drawer">

                <h2>
                    Корзина
                    <img onClick={onClose} className="cart-item-btn cu-p" src="/img/btn-remove.svg" alt="" />
                </h2>

                {
                    items.length > 0 ? (
                        <div className="dr-wrap">

                            <div className="cart-wrap">
                                {items.map((obj) => (
                                    <div key={obj.id} className="cart-item">

                                        <img className="cart-item-img" src={obj.img} alt="" />
                                        <div className="cart-item-cont">
                                            <p>
                                                {obj.title}
                                            </p>
                                            <b>
                                                {obj.price} руб.
                                            </b>
                                        </div>
                                        <img onClick={() => onRemove(obj.id)} className="cart-item-btn" src="/img/btn-remove.svg" alt="" />
                                    </div>
                                ))}
                            </div>

                            <div className="cart-bottom">
                                <ul >
                                    <li>
                                        <span>Итого:</span>
                                        <div></div>
                                        <b>{totalPrice} руб.</b>
                                    </li>
                                    <li>
                                        <span>Налог 5%:</span>
                                        <div></div>
                                        <b>{(totalPrice / 100 * 5).toFixed(2)} руб.</b>
                                    </li>
                                </ul>

                                <button disabled={isLoading} onClick={onClickOrder} className="green-btn">
                                    Оформить заказ
                                    <img src="/img/arrow.svg" alt="" />
                                </button>
                            </div>

                        </div>

                    ) : (
                        <Info
                            title={isOrderComplete ? "Заказ оформлен!" : "Корзина пуста"}
                            description={isOrderComplete ? `Ваш заказ #${orderId} скоро будет передан курьерской доставкой` : "Добавьте хотя бы одну пару кросовок, чтобы сделать заказ"}
                            image={isOrderComplete ? "/img/complete.svg" : "/img/empty.png"}
                        />
                    )
                }


            </div>

        </div>
    )
}

export default Drawer;

