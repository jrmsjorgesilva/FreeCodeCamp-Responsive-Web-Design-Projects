import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import styles from '../../styles/css/TributeContent.module.css'
import "swiper/css/pagination";
import 'swiper/css';
import Image from 'next/image';

const TributeData = () => {

  const getDirection = () => {
    const windowWidth = window.innerWidth;
    const direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

    return direction;
  }

  const swiperData = [
    {
      id: 1,
      dataImgSrc: '/img/dio-1.jpg',
      dataImgAlt: 'sdafds',
      dataImgWidth: '100%',
      dataImgHeight: '350px'
    },
    {
      id: 2,
      dataImgSrc: '/img/show-1.jpg',
      dataImgAlt: 'sdafds',
      dataImgWidth: '100%',
      dataImgHeight: '350px'
    },
    {
      id: 3,
      dataImgSrc: '/img/show-2.jpg',
      dataImgAlt: 'sdafds',
      dataImgWidth: '100%',
      dataImgHeight: '350px'
    },
    {
      id: 4,
      dataImgSrc: '/img/show-3.jpg',
      dataImgAlt: 'sdafds',
      dataImgWidth: '100%',
      dataImgHeight: '350px'
    },
    {
      id: 5,
      dataImgSrc: '/img/dio-2.jpg',
      dataImgAlt: 'sdafds',
      dataImgWidth: '100%',
      dataImgHeight: '350px'
    }
  ]

  console.log('SERA QUE VAI?', swiperData.map(data => data.dataImgAlt))

  return (
    <section
      id='tribute__section__data'
      className={styles.tribute__section__data}
    >
      <Swiper
        pagination={true}
        modules={[Pagination]}
        slidesPerView={2}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        onResize={() => getDirection()}
      >
        {/* {swiperData.map(data => {
          <SwiperSlide key={data.id} className={styles.swiper__slide}>
            <div className={styles.container__img__data}>
              <Image
                src={data.dataImgSrc}
                alt={data.dataImgAlt}
                width={data.dataImgWidth}
                height={data.dataImgHeight}
              />
            </div>
          </SwiperSlide>
        })} */}
        <SwiperSlide className={styles.swiper__slide}>
          <div className={styles.container__img__data}>
            <img
              src='/img/dio-1.jpg'
              alt='sdafds'
              width='100%'
              height='350px'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiper__slide}>
          <div className={styles.container__img__data}>
            <img
              src='/img/show-1.jpg'
              alt='sdafds'
              width='100%'
              height='350px'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiper__slide}>
          <div className={styles.container__img__data}>
            <img
              src='/img/show-2.jpg'
              alt='sdafds'
              width='100%'
              height='350px'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiper__slide}>
          <div className={styles.container__img__data}>
            <img
              src='/img/show-3.jpg'
              alt='sdafds'
              width='100%'
              height='350px'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiper__slide}>
          <div className={styles.container__img__data}>
            <img
              src='/img/dio-2.jpg'
              alt='sdafds'
              width='100%'
              height='350px'
            />
          </div>
        </SwiperSlide>
        {/* ... */}
      </Swiper>
    </section>
  )
}

export default TributeData