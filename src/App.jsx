import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [item, setItem] = useState('')
  const [orders, setOrders] = useState([])
  const fetchOrders = async () => {
    try {
      const res = await fetch('/api/orders')
      const ordersRes = await res.json()
      setOrders(ordersRes.orders)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect( ()=> { fetchOrders() }, [] )

  const handleSubmit = async (e) =>{
    e.preventDefault()
    try {
      const url = '/api/orders'
      const options = { method: 'POST', headers: { "Content-Type": "application/json" }, body: JSON.stringify({ item })
}
      const res = await fetch(url, options)
      const order = await res.json()
      window.alert(order)

      fetchOrders()
    } catch (error) {
      window.alert(error)
    }
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="item">Item</label>
        <input type="text" id="item" value={item} onChange={e=> setItem(e.target.value) } />

        <button type="submit">Submit</button>
      </form>

      {orders.length ?
        <ul>
          {orders.map(order => <li key={order._id}>{order.item}</li>)}
        </ul>
        :
        <p>Please add an order</p>
      }

    </div>
  );
}

export default App;
