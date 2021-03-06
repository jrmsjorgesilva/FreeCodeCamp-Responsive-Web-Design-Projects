import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'
import Slider from '../Slider'
import { Navigation } from "swiper";
import styles from '../../styles/css/TributeContent.module.css'
import "swiper/css/navigation";
import 'swiper/css';



const TributeHero = () => {

  const imgCollection = [
    {
      imgSrc: '/img/dio-1.jpg', 
      imgAlt: 'Dio cantando', 
      imgWidth: '100%', 
      imgHeight: '100%', 
    },
    {
      imgSrc: '/img/show-1.jpg', 
      imgAlt: 'Show dio metal', 
      imgWidth: '100%', 
      imgHeight: '100%', 
    },
    {
      imgSrc: '/img/show-2.jpg', 
      imgAlt: 'Guitarra', 
      imgWidth: '100%', 
      imgHeight: '100%', 
    },
    {
      imgSrc: '/img/show-3.jpg', 
      imgAlt: 'Caixa de som', 
      imgWidth: '100%', 
      imgHeight: '100%', 
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
          {/* <Slider 
            imgCollection={imgCollection} 
          /> */}
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
              <p className={styles.hero__text__title}>Uma trajet??ria de sucessos</p>
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