/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styles from '../../styles/css/LandingPage.module.css'
import Image from 'next/image'
import { FaReact, FaRedux } from 'react-icons/fa'

const LandingPageHero = () => {
  return (
    <section className={styles.lp__hero}>
      <h1 className={styles.headline}>
        Welcome to Redux Future
      </h1>
      <p className={styles.lead}>
        We build the web for the better
      </p>
      <div className={styles.container__img} >
        <Image
          src='/img_LP/redux-logo.png'
          width={250}
          height={230}
        />
        <button className={styles.lp__btn}>
          <FaReact
            className={styles.logo__CTA}
          />
          Get Started
        </button>
        <p className={styles.lead}>All you need to start a professional application as easy and quick as possible</p>
      </div>
    </section>
  )
}

export default LandingPageHero