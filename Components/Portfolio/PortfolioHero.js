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
import Link from 'next/link'
import PortfolioForm from './PortfolioForm';

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
  
  return (
    <section className={styles.portfolio__hero}>
      <div className={flexbox.row}>
        <div className={flexbox.col__6}>
          <div className={styles.portfolio__card}>
            <div className={flexbox.row}>
              <div className={flexbox.col__8}>
                <Image
                  src='/img_portfolio/photo.jpg'
                  className={styles.portfolio__profile}
                  width={240}
                  height={240}
                />
              </div>
              <div className={flexbox.col__2}>
                <Link href='https://github.com/jrmsjorgesilva'>
                  <a>
                    <FaGithub style={{ display: 'block', fontSize: '50px', margin: '12px' }} />
                  </a>
                </Link>
                <Link href='https://gitlab.com/jrms.jorge'>
                  <a>
                    <FaGitlab style={{ display: 'block', fontSize: '50px', margin: '12px' }} />
                  </a>
                </Link>
                <Link href='https://www.linkedin.com/in/jorgemachadodeveloper/'>
                  <a>
                    <FaLinkedin style={{ display: 'block', fontSize: '50px', margin: '12px' }} />
                  </a>
                </Link>
                <Link href='https://api.whatsapp.com/send?phone=5511932471824'>
                  <a>
                    <FaWhatsapp style={{ display: 'block', fontSize: '50px', margin: '12px' }} />
                  </a>
                </Link>
              </div>
              <div className={flexbox.col__2}>
                <Link href='https://jmsoftwares.com.br/'>
                  <a>
                    <FaCode style={{ display: 'block', fontSize: '50px', margin: '12px' }} />
                  </a>
                </Link>
                <Link href='https://www.freecodecamp.org/jmachado'>
                  <a>
                    <FaFreeCodeCamp style={{ display: 'block', fontSize: '50px', margin: '12px' }} />
                  </a>
                </Link>
                <Link href='https://medium.com/@Jorge_Machado'>
                  <a>
                    <FaMedium style={{ display: 'block', fontSize: '50px', margin: '12px' }} />
                  </a>
                </Link>
                <Link href='https://www.youtube.com/'>
                  <a>
                    <FaYoutube style={{ display: 'block', fontSize: '50px', margin: '12px' }} />
                  </a>
                </Link>
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
            <PortfolioForm styleBtn={styles.portfolio__btn} />
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
    </section>
  )
}

export default PortfolioHero