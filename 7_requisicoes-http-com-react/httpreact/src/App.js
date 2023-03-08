import './App.css';

import { useState, useEffect } from 'react';

const url = 'http://localhost:3000/products';

function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  // 1 - RESGATANDO DADOS
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data);
    }
    fetchData();
  }, []);

  // 2 - ADIÇÃO DE PRODUTOS
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });

    // 3 - CARREGAMENTO DINÂMICO
    const addedProducts = await res.json();
    setProducts((prevProducts) => [...prevProducts, addedProducts]);

    setName('');
    setPrice('');
  };

  return (
    <div className='container'>
      <h1 className='title'>Products List</h1>
      <div className='add-products'>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type='text'
              value={name}
              name='name'
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Price:
            <input
              type='number'
              value={price}
              name='price'
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <input className='button' type='submit' value='create' />
        </form>
      </div>

      <ul>
        {products.map((product) => (
          <li className='box-list' key={product.id}>
            {product.name}
            <br />€{product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
