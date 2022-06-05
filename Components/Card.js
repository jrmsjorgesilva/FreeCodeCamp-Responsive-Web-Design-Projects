import React, { useState } from 'react';
import styles from '../styles/css/Card.module.css';
import Link from 'next/link';

const Card = ({ card, key }) => {

  console.log('card', card);

  return (
    <div key={key} className={styles.card}>
      <div className={styles.card__header}>
        {card.icon}
        <h1 className={styles.card__title}>{card.title}</h1>
      </div>
      <div className={styles.card__content}>
        <p className={styles.card__lead}>{card.description}</p>
      </div>
      <div className={styles.card__footer}>
        <Link className={styles.card__lead} href={card.socialMedia}>
          <a className={styles.card__btn}>
            See More...
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Card;