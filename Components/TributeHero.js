import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'
import { Navigation } from "swiper";
import styles from '../styles/css/TributeContent.module.css'
import "swiper/css/navigation";
import 'swiper/css';



const TributeHero = () => {

  const imgCollection = [
    {
      src: '/img/dio-1.jpg', 
      alt: 'Dio cantando', 
      width: '100%', 
      height: '100%', 
    },
    {
      src: '/img/show-1.jpg', 
      alt: 'Show dio metal', 
      width: '100%', 
      height: '100%', 
    },
    {
      src: '/img/show-2.jpg', 
      alt: 'Guitarra', 
      width: '100%', 
      height: '100%', 
    },
    {
      src: '/img/show-3.jpg', 
      alt: 'Caixa de som', 
      width: '100%', 
      height: '100%', 
    },
    {
      src: '/img/dio-2.jpg', 
      alt: 'Dio metaleiro cantando', 
      width: '100%', 
      height: '100%', 
    }
  ];

  return (
    <section 
      id='tribute__section__hero' 
      className='tribute__section__hero'
    >
        <Swiper
            className={styles.swiper}
            navigation={true} 
            modules={[Navigation]}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className={styles.swiper__slide}>
            <div className={styles.container__img}>
              <p className={styles.hero__text__title}>Tributo a Dio</p>
              <p className={styles.hero__text__content}>
                Lorem ipsum dolor sit amet, consectetur adipiscing Duis aute irure dolor in reprehenderit in voluptate velit esse pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <img 
                src='/img/dio-1.jpg' 
                alt='sdafds' 
                width='100%' 
                height='100%'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.swiper__slide}>
            <div className={styles.container__img}>
              <p className={styles.hero__text__title}>Uma trajetória de sucessos</p>
              <p className={styles.hero__text__content}>
                Lorem ipsum dolor sit amet, consectetur adipiscing Duis aute irure dolor in reprehenderit in voluptate velit esse pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <img 
                src='/img/show-1.jpg' 
                alt='sdafds' 
                width='100%' 
                height='100%' 
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.swiper__slide}>
            <div className={styles.container__img}>
              <p className={styles.hero__text__title}>Da lama ao estrelato</p>
              <p className={styles.hero__text__content}>
                Lorem ipsum dolor sit amet, consectetur adipiscing Duis aute irure dolor in reprehenderit in voluptate velit esse pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <img 
                src='/img/show-2.jpg' 
                alt='sdafds' 
                width='100%' 
                height='100%' 
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.swiper__slide}>
            <div className={styles.container__img}>
              <p className={styles.hero__text__title}>A luta contra as drogas</p>
              <p className={styles.hero__text__content}>
                Lorem ipsum dolor sit amet, consectetur adipiscing Duis aute irure dolor in reprehenderit in voluptate velit esse pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <img 
                src='/img/show-3.jpg' 
                alt='sdafds' 
                width='100%' 
                height='100%' 
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.swiper__slide}>
            <div className={styles.container__img}>
              <p className={styles.hero__text__title}>O legado musical e familiar</p>
              <p className={styles.hero__text__content}>
                Lorem ipsum dolor sit amet, consectetur adipiscing Duis aute irure dolor in reprehenderit in voluptate velit esse pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <img 
                src='/img/dio-2.jpg' 
                alt='sdafds' 
                width='100%' 
                height='100%' 
              />
            </div>
          </SwiperSlide>
        </Swiper>
    </section>
  )
}

export default TributeHero