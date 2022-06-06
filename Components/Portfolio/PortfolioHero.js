/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styles from '../../styles/css/Portfolio.module.css';
import flexbox from '../../styles/css/Flexbox.module.css';
import {
  FaGithub,
  FaGitlab,
  FaLinkedin,
  FaFreeCodeCamp,
  FaCode,
  FaWhatsapp,
  FaMedium,
  FaYoutube,
} from 'react-icons/fa';
import Image from 'next/image'

const PortfolioHero = () => {

  const professional = {
    name: 'Jorge Roberto Machado da Silva',
    role: 'Front End Developer',
    skills: [
      {
        lang: 'css',
        level: '95%',
        imgLang: '/img_portfolio/css-logo.png',
      },
      {
        lang: 'sass',
        level: '85%',
        imgLang: '/img_portfolio/sass-logo.png',
      },
      {
        lang: 'javascript',
        level: '85%',
        imgLang: '/img_portfolio/js-logo.png',
      },
      {
        lang: 'react',
        level: '80%',
        imgLang: '/img_portfolio/react-logo.png',
      },
      {
        lang: 'wordpress',
        level: '85%',
        imgLang: '/img_portfolio/wordpress-logo.png',
      },
      {
        lang: 'php',
        level: '75%',
        imgLang: '/img_portfolio/php-logo.png',
      },
      {
        lang: 'woo',
        level: '95%',
        imgLang: '/img_portfolio/woocommerce-logo.png',
      },
      {
        lang: 'redux',
        level: '80%',
        imgLang: '/img_portfolio/redux-logo.png',
      },
      // {
      //   lang: 'gulp',
      //   level: '65%',
      //   imgLang: '/img_portfolio/gulp-logo.png',
      // },
      {
        lang: 'git',
        level: '70%',
        imgLang: '/img_portfolio/git-logo.png',
      },
      // {
      //   lang: 'laravel',
      //   level: '70%',
      //   imgLang: '/img_portfolio/laravel-logo.png',
      // },
      // {
      //   lang: 'bootstrap',
      //   level: '100%',
      //   imgLang: '/img_portfolio/bootstrap-logo.png',
      // },
    ],
    hourValue: (45).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }),
  }

  console.log(professional.hourValue)

  return (
    <section className={styles.portfolio__hero}>
      <header className={styles.portfolio__hero__background}>
        <div className={flexbox.row}>
          <div className={flexbox.col__6}>
            <div className={styles.portfolio__card}>
              <div className={flexbox.row}>
                <div className={flexbox.col__8}>
                  <Image
                    src='/img_portfolio/photo.jpg'
                    className={styles.portfolio__profile}
                    width={300}
                    height={300}
                  />
                </div>
                <div className={flexbox.col__2}>
                  <FaGithub style={{ display: 'block', fontSize: '60px', margin: '12px' }} />
                  <FaGitlab style={{ display: 'block', fontSize: '60px', margin: '12px' }} />
                  <FaLinkedin style={{ display: 'block', fontSize: '60px', margin: '12px' }} />
                  <FaWhatsapp style={{ display: 'block', fontSize: '60px', margin: '12px' }} />
                </div>
                <div className={flexbox.col__2}>
                  <FaCode style={{ display: 'block', fontSize: '60px', margin: '12px' }} />
                  <FaFreeCodeCamp style={{ display: 'block', fontSize: '60px', margin: '12px' }} />
                  <FaMedium style={{ display: 'block', fontSize: '60px', margin: '12px' }} />
                  <FaYoutube style={{ display: 'block', fontSize: '60px', margin: '12px' }} />
                </div>
              </div>
              <h1
                className={styles.headline}
              >
                {professional.name}
              </h1>
              <h3
                className={styles.sub__headline}
              >
                {professional.role}
              </h3>
              <h3
                className={styles.sub__headline}
              >
                Hour: &nbsp;
                <span
                  className={styles.highlight}
                >
                  {professional.hourValue}
                </span>
              </h3>
            </div>
          </div>
          <div className={flexbox.col__6}>
            <div className={styles.skills__container}>
              {professional.skills.map((skill, i) => (
                <>
                  <div key={i} className={styles.portfolio__skillbars}>
                    <Image
                      className={styles.portfolio__lang__img}
                      src={skill.imgLang}
                      width={40}
                      height={40}
                    />
                    <div className={styles.portfolio__bar}>
                      <div className={styles.portfolio__skill} style={{ width: skill.level }}>{skill.level}</div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </header>
    </section>
  )
}

export default PortfolioHero