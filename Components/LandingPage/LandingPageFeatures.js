import React from 'react'
import styles from '../../styles/css/LandingPage.module.css'
import flexbox from '../../styles/css/Flexbox.module.css'
import Card from '../Card'
import { FaGithub, FaBitbucket, FaGitlab } from 'react-icons/fa'

const LandingPageFeatures = () => {

  const cardCollection = [
    {
      icon: <FaGithub style={{ color: 'white', fontSize: '50px' }} />,
      title: 'Gitbub',
      description: '24/7 support for your projects and access to dozens of demos from exclusive GitHub repos',
      socialMedia: 'https://www.facebook.com',
      columnLength: flexbox.col__4,
    },
    {
      icon: <FaGitlab style={{ color: 'white', fontSize: '50px' }} />,
      title: 'Gitlab',
      description: '24/7 support for your projects and access to dozens of demos from exclusive gitlab repos',
      socialMedia: 'https://www.instagram.com',
      columnLength: flexbox.col__4,
    },
    {
      icon: <FaBitbucket style={{ color: 'white', fontSize: '50px' }} />,
      title: 'BitBucket',
      description: '24/7 support for your projects and access to dozens of demos from exclusive Bitbucket repos',
      socialMedia: 'https://www.twitter.com',
      columnLength: flexbox.col__4,
    }
  ];

  return (
    <section className={styles.lp__features}>
      <h1 
        className={styles.headline}
      >
        Our &nbsp;
        <span 
          className={styles.highlight}
        >
          Features
        </span>
      </h1>
      <div className={flexbox.row}>
        {cardCollection.map((card, key) => <Card card={card} key={key} />)}
      </div>
    </section>
  )
}

export default LandingPageFeatures