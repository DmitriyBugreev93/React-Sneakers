import React from "react";
import { Routes, Route } from "react-router";
import axios from "axios";

import Header from "./components/Header";
import Drawer from "./components/Drawer";
import AppContext from "./context";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";

// export const AppContext = React.createContext({});



function App() {

  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [favorites, setFavorites] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
  const [cartOpennd, setCartOpend] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true)

  // получаем массив с серверной части (items)
  React.useEffect(() => {

    // через fetch
    // fetch('https://67efcaa52a80b06b8895c59f.mockapi.io/items').then(response => {
    //   return response.json();
    // }).then(json => {
    //   setItems(json);
    // })
    // через axios

    async function fetchData() {
      // получаем массив который передавали с серверной части (cart) 
      try {
        // const itemsResponse = await axios.get('https://67efcaa52a80b06b8895c59f.mockapi.io/items');
        // const cartResponse = await axios.get('https://67efcaa52a80b06b8895c59f.mockapi.io/cart');
        // const favoritesResponse = await axios.get('https://67fe432d58f18d7209ed67b4.mockapi.io/favorites');
        const [itemsResponse, cartResponse, favoritesResponse] = await Promise.all([
          axios.get('https://67efcaa52a80b06b8895c59f.mockapi.io/items'),
          axios.get('https://67efcaa52a80b06b8895c59f.mockapi.io/cart'),
          axios.get('https://67fe432d58f18d7209ed67b4.mockapi.io/favorites')
        ])
  
        setIsLoading(false)
        setCartItems(cartResponse.data)
        setFavorites(favoritesResponse.data)
        setItems(itemsResponse.data)

      } catch (error) {
        console.error(error)
      }
   
    }

    fetchData()

  }, [])

  // добавляем в корзину
  const onAddToCart = async (obj) => {
    // отправляем объект на сервер (cart)
    const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id))
    try {
      if (findItem) {
        setCartItems(prev => prev.filter(newItem => Number(newItem.parentId) !== Number(obj.id)))
        await axios.delete(`https://67efcaa52a80b06b8895c59f.mockapi.io/cart/${findItem.id}`)
      } else {
        setCartItems((prev) => [...prev, obj])
        const {data} = await axios.post('https://67efcaa52a80b06b8895c59f.mockapi.io/cart', obj);
        setCartItems((prev) => [...prev.map(item => {
          if(item.parentId === data.parentId){
            return {
              ...item, 
              id: data.id
            }
          }
          return item
        })])
      }
    } catch (error) {
      console.error(error)
    }

  }

  // удаляем с корзины 
  const onRemoveItem = (id) => {
    try {
      axios.delete(`https://67efcaa52a80b06b8895c59f.mockapi.io/cart/${id}`)
      setCartItems((prev) => prev.filter(item => Number(item.id) !== Number(id)))
    } catch (error) {
      console.error(error)
    }
  
  }

  //добавляем в закладки
  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        await axios.delete(`https://67fe432d58f18d7209ed67b4.mockapi.io/favorites/${obj.id}`);
        setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
      } else {
        const { data } = await axios.post('https://67fe432d58f18d7209ed67b4.mockapi.io/favorites', obj);
        setFavorites((prev) => [...prev, data]); // Лучше использовать data, так как сервер может задать id
      }
    } catch (error) {
      console.error('Ошибка при обновлении избранного:', error);
    }

  };

  // отслеживенм value в input
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  // очищаем value в input
  const clearInputValue = () => {
    setSearchValue('')
  }

  // фильтруем карточки при поиске
  const filterItems = (arr) => {
    return arr.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))
  }

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id))
  }

  return (

    <AppContext.Provider value={{
      items,
      cartItems,
      favorites,
      isItemAdded,
      onAddToFavorite,
      onAddToCart,
      setCartOpend,
      setCartItems
    }}>

      <div className="wrapper clear">
        
        <Drawer
          items={cartItems}
          onClose={() => setCartOpend(false)}
          onRemove={onRemoveItem}
          opened = {cartOpennd}
        />


        <Header onClickCart={() => setCartOpend(true)} />

        <Routes>

          <Route path="" element={
            <Home
              items={items}
              cartItems={cartItems}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToFavorite={onAddToFavorite}
              onAddToCart={onAddToCart}
              clearInputValue={clearInputValue}
              filterItems={filterItems}
              isLoading={isLoading}
            />
          } />

          <Route path="/favorites" element={
            <Favorites />
          } />

          <Route path="/orders" element={
            <Orders />
          } />

        </Routes>
      </div>

    </AppContext.Provider>


  );
}

export default App;
