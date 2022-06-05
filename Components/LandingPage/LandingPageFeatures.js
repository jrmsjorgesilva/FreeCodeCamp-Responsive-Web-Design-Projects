import React from 'react'
import styles from '../../styles/css/LandingPage.module.css'
import Card from '../Card'
import { FaGithub, FaBitbucket, FaGitlab } from 'react-icons/fa'

const LandingPageFeatures = () => {

  const cardCollection = [
    {
      icon: <FaGithub style={{ color: 'white', fontSize: '50px' }} />,
      title: 'Gitbub',
      description: '24/7 support for your projects and access to dozens of demos from exclusive GitHub repos',
      socialMedia: 'https://www.facebook.com',
    },
    {
      icon: <FaGitlab style={{ color: 'white', fontSize: '50px' }} />,
      title: 'Gitlab',
      description: '24/7 support for your projects and access to dozens of demos from exclusive gitlab repos',
      socialMedia: 'https://www.instagram.com',
    },
    {
      icon: <FaBitbucket style={{ color: 'white', fontSize: '50px' }} />,
      title: 'BitBucket',
      description: '24/7 support for your projects and access to dozens of demos from exclusive Bitbucket repos',
      socialMedia: 'https://www.twitter.com',
    }
  ]

  return (
    <section className={styles.lp__features}>
      <h1 className={styles.headline}>Our <span className={styles.highlight}>Features</span></h1>
      <div className={styles.card__container}>
        {cardCollection.map((card, key) => <Card card={card} key={key} />)}
      </div>
    </section>
  )
}

export default LandingPageFeatures