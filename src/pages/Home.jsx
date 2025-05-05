import React from "react";

import Card from "../components/Card";
function Home({
  items,
  cartItems,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCart,
  clearInputValue,
  isLoading,
  filterItems,
  parentId
   }) {


  const renderItems = () => {
    const newArr = [
      {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}
    ]

    return (
      isLoading ? newArr : filterItems(items)).map((item) => (
        <Card
          key={item.id}
          title={item.name}
          price={item.price}
          img={item.img}
          id={item.id}
          onFavorite={(obj) => onAddToFavorite(obj)}
          onPlus={(obj) => onAddToCart(obj)}
          loading={isLoading}
          parentId={parentId}
        />
      ))
  }

  return (
    <div className="content">
      <div className="content__top">
        <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
        <div className="search-block">
          <img className="input-img" src="/img/search.svg" alt="search" />
          <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." type="text" />
          {searchValue && <img onClick={clearInputValue} className="input-close" src="/img/btn-remove.svg" alt="" />}

        </div>
      </div>
      <div className="cards">

        {
          renderItems()
        }

      </div>
    </div>

  )
}

export default Home;