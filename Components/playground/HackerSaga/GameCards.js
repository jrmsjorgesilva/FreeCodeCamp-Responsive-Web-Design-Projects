import React, { useState } from 'react'
import styles from '../../../styles/css/HackerSaga.module.css'

const GameCards = ({ setMoney }) => {

  // data
  const [cardsList, setCardsList] = useState(() => [
    { id: 1, mission: 'Roubar e vender senhas', timeToComplete: 5000, missionPayment: 50 },
    { id: 2, mission: 'Clonar Cartão', timeToComplete: 15000, missionPayment: 80 },
    { id: 3, mission: 'Coletar e vender dados', timeToComplete: 20000, missionPayment: 150 },
    { id: 4, mission: 'Desenvolver malware', timeToComplete: 50000, missionPayment: 250 },
  ]);

  // functions
  const initMission = (missionCard) => {
    setTimeout(() => {
      setMoney((oldState) => oldState + missionCard.missionPayment);
      console.log(missionCard)
    }, missionCard.timeToComplete)
  }

  return (
    <section className={{}}>
      <h1 className={{}}>Hacking Terminal</h1>
      {
        cardsList.map(card => (
          <button
            className={styles.card}
            key={card.id}
            onClick={() => initMission(card)}
          >
            {card.mission}
          </button>
        ))
      }
    </section>
  )
}

export default GameCards