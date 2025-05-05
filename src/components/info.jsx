import React from "react";
import AppContext from "../context";

const Info = ({ title, image, description }) => {

    const { setCartOpend } = React.useContext(AppContext)

    return (

        <div className="empty-wrap">
            <div className="empty">
                <img src={image} alt="" />
                <h3>
                    {title}
                </h3>
                <p>
                    {description}
                </p>
                <button onClick={() => setCartOpend(false)} className="green-btn">
                    <img src="/img/arrow.svg" alt="" />
                    Вернуться назад
                </button>
            </div>
        </div>

    )
}

export default Info;