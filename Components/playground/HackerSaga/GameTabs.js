import React from 'react'
import { FaCogs, FaFileCode, FaCartPlus, FaFighterJet } from 'react-icons/fa'
import styles from '../../../styles/css/HackerSaga.module.css'

const GameTabs = ({ gameTab, setGameTab }) => {

  // functions 
  const handleTabs = (newTab) => {
    setGameTab(newTab);
  }

  return (
    <div style={{ width: '100%' }}>
      <button
        className={styles.btnTab}
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
        className={styles.btnTab}
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
        className={styles.btnTab}
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
      className={styles.btnTab}
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