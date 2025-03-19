import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  return (

    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content">
        <div className="content__top">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="search" />
            <input placeholder="Поиск..." type="text" />
          </div>
        </div>
        <div className="cards">
          <Card />
        </div>
      </div>
    </div>
    
  );
}

export default App;
