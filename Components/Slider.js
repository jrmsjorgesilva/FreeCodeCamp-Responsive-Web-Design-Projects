import React from 'react'
import { SwiperSlide } from 'swiper/react';
import styles from '../styles/css/TributeContent.module.css'
import Image from 'next/image'
import 'swiper/css';

const Slider = ({ imgCollection }) => {

  console.log('imgCollection', imgCollection)

  return (
    <>
      {
        imgCollection.map((elem, i) => (
          <SwiperSlide key={i} className={styles.swiper__slide}>
            <div className={styles.container__img}>
              <img 
                src={elem.imgSrc} 
                alt={elem.imgAlt} 
                width={elem.imgWidth} 
                height={elem.imgHeight}
              />
            </div>
        </SwiperSlide>
        ))
      }
    </>
  )
}

export default Slider