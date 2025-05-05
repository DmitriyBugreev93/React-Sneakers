import React from "react";
import Card from "../components/Card";
// import {AppContext} from '../App';
import AppContext from "../context";

function Favorites() {

  const {favorites, onAddToFavorite, onAddToCart } = React.useContext(AppContext);
  
  return (
    <div className="content">
      <div className="content__top">
        <h1>Мои закладки</h1>
      </div>
      <div className="cards">

        {
          favorites.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              price={item.price}
              img={item.img}
              favorited={true}
              onFavorite={onAddToFavorite}
              onPlus={(obj) => onAddToCart(obj)}
              id={item.id}
            />
          ))
        }

      </div>
    </div>

  )
}

export default Favorites;