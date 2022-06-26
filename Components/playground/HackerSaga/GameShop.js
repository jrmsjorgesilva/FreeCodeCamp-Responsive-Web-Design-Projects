import React, { useState } from 'react'

const GameShop = ({ money, setMoney }) => {

    // styles 
    const styleBtn = {
      display: 'block',
      minWidth: '220px',
      backgroundColor: 'whitesmoke',
      color: 'lime',
      border: '3px solid lime',
      borderRadius: '6px',
      cursor: 'pointer',
      padding: '15px 20px',
      margin: '5px 20px',
    }

    // data
  const [shoppingList, setShoppingList] = useState(() => [
    { id: 1, product: 'Computador Gamer', price: (5000).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) },
    { id: 2, product: 'Celular', price: (15000).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) },
    { id: 3, product: 'Cartão Clonado', price: (20000).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) },
    { id: 4, product: 'Base de dados clandestina', price: (50000).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) },
  ]);

  // functions
  const buyProduct = (product) => {
    
  }

  return (
    <section className={{}}>
      <h1 className={{}}>Comprar Produtos</h1>
      {
        shoppingList.map(product => (
          <button 
            style={styleBtn}
            key={product.id}
            onClick={() => buyProduct(product)}
          >
            {product.product}
          </button>
        ))
      }
    </section>
  )
}

export default GameShop