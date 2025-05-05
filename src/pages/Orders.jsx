import React from "react";
import Card from "../components/Card";
import axios from "axios";

function Orders() {
  const [orders, setOrders] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('https://67fe432d58f18d7209ed67b4.mockapi.io/orders');
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []))
        setIsLoading(false)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])

  const newArr = [
    {}, {}, {}, {}, {}, {}, {}, {}
  ]

  return (
    <div className="content">
      <div className="content__top">
        <h1>Мои заказы</h1>
      </div>
      <div className="cards">

        {
          (isLoading ? newArr : orders).map((item, index) => (
            <Card
              key={item.id}
              title={item.title}
              price={item.price}
              img={item.img}
              id={item.id}
              loading={isLoading}
            />
          ))
        }

      </div>
    </div>

  )
}

export default Orders;