import React, { useState } from 'react'
import styles from '../../../styles/css/HackerSaga.module.css'
import { FaCode, FaReact, FaJs, FaAngular } from 'react-icons/fa';

const GameShop = ({ money, setMoney, acquiredItems, setAcquiredItems }) => {

  // data
  const [shoppingList, setShoppingList] = useState(() => [
    { id: 1, icon: <FaCode />, product: 'Computador Gamer', price: 1000, priceCurrency: (1000).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) },
    { id: 2, icon: <FaReact />, product: 'Celular', price: 15000, priceCurrency: (15000).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) },
    { id: 3, icon: <FaAngular />, product: 'Cartão Clonado', price: 20000, priceCurrency: (20000).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) },
    { id: 4, icon: <FaJs />, product: 'Base de dados Clandestina', price: 50000, priceCurrency: (50000).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) },
  ]);

  // functions
  const buyProduct = (product) => {
    // impede compra sem dinheiro 
    if (money < product.price) throw console.log('sua vida foi um erro')

    // impede repetição
    if(acquiredItems.includes(product)) return

    const newProductAcquired = product;
    setAcquiredItems([
      ...acquiredItems,
      newProductAcquired
    ]);
    setMoney((moneyInsideState) => moneyInsideState - product.price); 
    console.log('SERASE', acquiredItems);
  }

  return (
    <section className={{}}>
      <h1 className={{}}>Comprar Produtos</h1>
      {
        shoppingList.map(product => (
          <button
            className={styles.card}
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