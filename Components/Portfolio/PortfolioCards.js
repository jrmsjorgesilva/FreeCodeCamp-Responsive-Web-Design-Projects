import React, { useState, useEffect } from 'react'
import Card from '../Card'
import styles from '../../styles/css/Portfolio.module.css'
import flexbox from '../../styles/css/Flexbox.module.css'
import { FaGithub, FaGitlab, FaBitbucket } from 'react-icons/fa'
import Image from 'next/image'
import PortfolioFilterPannel from './PortfolioFilterPannel'

const PortfolioCards = () => {

  const imgLanguages = [
    '/img_portfolio/css-logo.png',
    '/img_portfolio/sass-logo.png',
    '/img_portfolio/js-logo.png',
    '/img_portfolio/bootstrap-logo.png',
    '/img_portfolio/php-logo.png',
    '/img_portfolio/laravel-logo.png',
    '/img_portfolio/woocommerce-logo.png',
    '/img_portfolio/wordpress-logo.png',
    '/img_portfolio/git-logo.png',
    '/img_portfolio/gulp-logo.png',
    '/img_portfolio/react-logo.png',
    '/img_portfolio/redux-logo.png',
  ]

  const [portfolioJobs, setPortfolioJobs] = useState(() => [
    {
      icon: <FaGithub style={{ color: 'white', fontSize: '50px' }} />,
      title: 'Gitbub',
      description: '24/7 support for your projects and access to dozens of demos from exclusive GitHub repos',
      socialMedia: 'https://www.facebook.com',
      columnLength: flexbox.col__4,
      stackImg: [
        '/img_portfolio/css-logo.png',
        '/img_portfolio/php-logo.png',
        '/img_portfolio/woocommerce-logo.png',
        '/img_portfolio/wordpress-logo.png',
        '/img_portfolio/git-logo.png',
        '/img_portfolio/bootstrap-logo.png',
      ],
    },
    {
      icon: <FaGitlab style={{ color: 'white', fontSize: '50px' }} />,
      title: 'Gitlab',
      description: '24/7 support for your projects and access to dozens of demos from exclusive gitlab repos',
      socialMedia: 'https://www.instagram.com',
      columnLength: flexbox.col__4,
      stackImg: [
        '/img_portfolio/php-logo.png',
        '/img_portfolio/laravel-logo.png',
      ],
    },
    {
      icon: <FaBitbucket style={{ color: 'white', fontSize: '50px' }} />,
      title: 'BitBucket',
      description: '24/7 support for your projects and access to dozens of demos from exclusive Bitbucket repos',
      socialMedia: 'https://www.twitter.com',
      columnLength: flexbox.col__4,
      stackImg: [
        '/img_portfolio/css-logo.png',
        '/img_portfolio/js-logo.png',
        '/img_portfolio/sass-logo.png',
        '/img_portfolio/php-logo.png',
      ],
    },
    {
      icon: <FaBitbucket style={{ color: 'white', fontSize: '50px' }} />,
      title: 'BitBucket',
      description: '24/7 support for your projects and access to dozens of demos from exclusive Bitbucket repos',
      socialMedia: 'https://www.twitter.com',
      columnLength: flexbox.col__4,
      stackImg: [
        '/img_portfolio/css-logo.png',
        '/img_portfolio/js-logo.png',
        '/img_portfolio/sass-logo.png',
        '/img_portfolio/php-logo.png',
      ],
    }
  ]);

  const [filteredPortfolio, setFilteredPortfolio] = useState(() => [...portfolioJobs])

  const changeCols = (newCols) => {
    let newColunas = [...portfolioJobs];
    newColunas.map(elem => {
      elem.columnLength = newCols;
    });
    setPortfolioJobs(newColunas);
  }

  const filterPortfolio = (img) => {
    if (!filteredPortfolio) return filteredPortfolio === [...portfolioJobs];
    setFilteredPortfolio(portfolioJobs.filter(elem => elem.stackImg.includes(img)));
  }

  return (
    <section className={styles.portfolio__cards}>
      <h1 className={styles.headline}>Portfolio do Profissional</h1>
      <PortfolioFilterPannel
        imgLanguages={imgLanguages}
        filterPortfolio={filterPortfolio}
        changeCols={changeCols}
      />
      <div className={flexbox.row}>
        {filteredPortfolio.length > 0 ? filteredPortfolio.map((card, key) => (
          <Card card={card} key={key} >
            {card.stackImg.map((img, innerKey) => (
              <Image
                alt='Cards dos items de portfolio'
                key={innerKey}
                src={img}
                width={40}
                height={40}
              />
            ))}
          </Card>
        )) : (
          <>
            <Image
              alt='Nenhum elemento foi encontrado na busca'
              src='/img/not-found.svg'
              width={400}
              height={400}
            />
          </>
        )}
      </div>
    </section>
  )
}

export default PortfolioCards