import React, { Fragment } from "react";
import AppContext from "../../context";
import ContentLoader from "react-content-loader";
import styles from "./Card.module.scss";

function Card({
    onFavorite,
    id,
    title,
    img,
    price,
    onPlus,
    favorited = false,
    loading = false
}) {

    const { isItemAdded } = React.useContext(AppContext);
    const [isFavorite, setFavorite] = React.useState(favorited);
    const obj = { id, parentId: id, title, img, price };

    const onClickPlus = () => {
        onPlus(obj)
    }

    const onClickFavorite = () => {
        onFavorite(obj)
        setFavorite(!isFavorite)
    }


    return (
        <div className={styles.card} >
            {
                loading ?
                    <ContentLoader
                        speed={2}
                        width={158}
                        height={233}
                        viewBox="0 0 158 233"
                        backgroundColor="#f3f3f3"
                        foregroundColor="#ecebeb"
                    >
                        <rect x="1" y="0" rx="10" ry="10" width="155" height="133" />
                        <rect x="0" y="150" rx="5" ry="5" width="155" height="15" />
                        <rect x="0" y="170" rx="5" ry="5" width="100" height="15" />
                        <rect x="1" y="200" rx="5" ry="5" width="80" height="32" />
                        <rect x="124" y="200" rx="10" ry="10" width="32" height="32" />
                    </ContentLoader>
                    :
                    <>
                        <div className={styles.favorite}>
                            {onFavorite && 
                            <img onClick={onClickFavorite} src={isFavorite ? "img/heart2.svg" : "img/heart1.svg"} alt="like" />
                            }
                            
                        </div>
                        <img className={styles.cardImg} src={img} alt="" />
                        <h5>
                            {title}
                        </h5>
                        <div className={styles.cardBottom}>
                            <div>
                                <span>Цена:</span>
                                <b>{price} руб.</b>
                            </div>
                            {onPlus && <img className={styles.plus}
                                    onClick={onClickPlus}
                                    src={isItemAdded(id) ? "img/btn-checked.svg" : "img/btn-plus.svg"} alt="" />}

                        </div>
                    </>
            }

        </div>
    )
}

export default Card;