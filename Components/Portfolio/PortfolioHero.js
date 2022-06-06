/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styles from '../../styles/css/Portfolio.module.css'
import flexbox from '../../styles/css/Flexbox.module.css'
import Image from 'next/image'

const PortfolioHero = () => {
  return (
    <section className={styles.portfolio__hero}>
      <header className={styles.portfolio__hero__background}>
        <div className={flexbox.row}>
          <div className={flexbox.col__6}>
            <div className={styles.portfolio__card}>
              <Image 
                src='/img_portfolio/photo.jpg' 
                className={styles.portfolio__profile} 
                width={300}
                height={300}
              />
            </div>
          </div>
          <div className={flexbox.col__6}>

          </div>
        </div>        
      </header>
    </section>
  )
}

export default PortfolioHero