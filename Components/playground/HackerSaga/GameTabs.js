import React from 'react'
import { FaCogs, FaFileCode, FaCartPlus, FaFighterJet } from 'react-icons/fa'

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
        <FaFileCode
          style={{
            color: 'white',
            margin: '-3px 10px',
          }}
        />
        Hackear
      </button>
      <button
        style={styleBtn}
        onClick={() => handleTabs('shop')}
      >
        <FaCartPlus
          style={{
            color: 'white',
            margin: '-3px 10px',
          }}
        />
        Comprar
      </button>
      <button
        style={styleBtn}
        onClick={() => handleTabs('challenge')}
      >
        <FaFighterJet
          style={{
            color: 'white',
            margin: '-3px 10px',
          }}
        />
        Desafios
      </button>
      <button
        style={styleBtn}
        onClick={() => handleTabs('config')}
      >
        <FaCogs
          style={{
            color: 'white',
            margin: '-3px 10px',
          }}
        />
        Configurações
      </button>
    </div>
  )
}

export default GameTabs