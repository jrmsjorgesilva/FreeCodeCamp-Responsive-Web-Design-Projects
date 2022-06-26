import React from 'react'

const GameTabs = ({ gameTab, setGameTab }) => {

  // styles 
  const styleBtn = {
    display: 'inline-block',
    backgroundColor: 'lime',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    padding: '10px 30px',
    margin: '40px 0px',
    fontSize: '26px',
    fontWeight: 'bold'
  }

  // functions 
  const handleTabs = (newTab) => {
    setGameTab(newTab);
  }

  return (
    <div style={{ width: '100%' }}>
      <button 
        style={styleBtn}
        onClick={() => handleTabs('cards')}
      >
        Hackear
      </button>
      <button 
        style={styleBtn}
        onClick={() => handleTabs('shop')}
      >
        Comprar
      </button>
      <button 
        style={styleBtn}
        onClick={() => handleTabs('challenge')}
      >
        Desafios
      </button>
    </div>
  )
}

export default GameTabs