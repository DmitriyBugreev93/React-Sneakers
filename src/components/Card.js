function Card() {
    return (
        <div className="card">
            <div className="favorite">
                <img src="/img/heart1.svg" alt="like" />
            </div>
            <img className="card-img" src="/img/card1.png" alt="" />
            <h5>
                Мужские Кроссовки Nike Blazer Mid Suede
            </h5>
            <div className="card__bottom">
                <div>
                    <span>Цена:</span>
                    <b>12 999 руб.</b>
                </div>

                <img src="/img/btn-plus.svg" alt="" />

            </div>
        </div>
    )
}

export default Card;