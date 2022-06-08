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
import Swal from 'sweetalert2';

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

  const skillDetails = (skill) => {
    Swal.fire({
      title: skill.lang,
      text: `breve descrição. Level: ${skill.level}`,
      imageUrl: skill.imgLang,
      imageWidth: 100,
      imageHeight: 100,
      imageAlt: `imagem logo do ${skill.lang}`,
    })
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
                    <FaGithub style={{ display: 'block', fontSize: '48px', padding: '10px', margin: '10px 20px' }} />
                  </a>
                </Link>
                <Link href='https://gitlab.com/jrms.jorge'>
                  <a>
                    <FaGitlab style={{ display: 'block', fontSize: '48px', padding: '10px', margin: '10px 20px' }} />
                  </a>
                </Link>
                <Link href='https://www.linkedin.com/in/jorgemachadodeveloper/'>
                  <a>
                    <FaLinkedin style={{ display: 'block', fontSize: '48px', padding: '10px', margin: '10px 20px' }} />
                  </a>
                </Link>
                <Link href='https://api.whatsapp.com/send?phone=5511932471824'>
                  <a>
                    <FaWhatsapp style={{ display: 'block', fontSize: '48px', padding: '10px', margin: '10px 20px' }} />
                  </a>
                </Link>
              </div>
              <div className={flexbox.col__2}>
                <Link href='https://jmsoftwares.com.br/'>
                  <a>
                    <FaCode style={{ display: 'block', fontSize: '48px', padding: '10px', margin: '10px 20px' }} />
                  </a>
                </Link>
                <Link href='https://www.freecodecamp.org/jmachado'>
                  <a>
                    <FaFreeCodeCamp style={{ display: 'block', fontSize: '48px', padding: '10px', margin: '10px 20px' }} />
                  </a>
                </Link>
                <Link href='https://medium.com/@Jorge_Machado'>
                  <a>
                    <FaMedium style={{ display: 'block', fontSize: '48px', padding: '10px', margin: '10px 20px' }} />
                  </a>
                </Link>
                <Link href='https://www.youtube.com/'>
                  <a>
                    <FaYoutube style={{ display: 'block', fontSize: '48px', padding: '10px', margin: '10px 20px' }} />
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
              <a key={i} onClick={() => skillDetails(skill)}>
                <div className={styles.portfolio__skillbars}>
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
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* <!-- GitHub corner --> */}
      <a 
        href="https://github.com/jrmsjorgesilva/FreeCodeCamp-Responsive-Web-Design-Projects" 
        className={styles.github__corner} 
        aria-label=" GitHub" 
        tabIndex="-1"
      >
        <svg 
          width="80" 
          height="80" 
          viewBox="0 0 250 250" 
          style={{ 
            position: 'absolute', 
            top: 0,
            right: 0, 
            border: 0, 
            fill: '#151513', 
            color: '#fff',
           }}
        >
          <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
          <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style={{ transformOrigin: '130px 106px' }} className={styles.octo__arm}></path>
          <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" className={styles.octo__body}></path>
        </svg>
      </a>

    </section>
  )
}

export default PortfolioHero