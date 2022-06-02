import React from 'react'
import { SwiperSlide } from 'swiper/react';
import styles from '../styles/css/TributeContent.module.css'
import 'swiper/css';

const Slider = () => {

  return (
    <>
      <SwiperSlide className={styles.swiper__slide}>
        <div className={styles.container__img}>
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
          <img 
            src='/img/dio-2.jpg' 
            alt='sdafds' 
            width='100%' 
            height='100%' 
          />
        </div>
      </SwiperSlide>
    </>
  )
}

export default Slider