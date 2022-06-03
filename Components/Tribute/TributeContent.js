import React, { useState, useEffect } from 'react'
import TributeHero from './TributeHero'
import TributeData from './TributeData'
import TributeNews from './TributeNews'
import Stepper from '../Stepper'

const TributeContent = ({ fetchedSrc, fetchedAlt }) => {


  // stepper data
  const stepCollection = [
    {
        header: '1954',
        subheader: 'Dio lorem tamut kanenda fret is utreusx jonata parateroi kaneda lorem saturri das',
        imgSrc: '/img/dio-1.jpg',
        imgAlt: fetchedAlt[0],
    },
    {
        header: '1962',
        subheader: 'Lorem Ipsum é poesia disfarçada de lorem ipsum, Dio lorem tamut kanenda fret is utreusx jonata parateroi kaneda lorem saturri das',
        imgSrc: '/img/dio-1.jpg',
        imgAlt: fetchedAlt[1],
    },
    {
      header: '1970',
      subheader: 'Lorem Ipsum é poesia disfarçada de lorem ipsum, Dio lorem tamut kanenda fret is utreusx jonata parateroi kaneda lorem saturri das',
      imgSrc: '/img/dio-1.jpg',
      imgAlt: fetchedAlt[2],
    }
  ];

  return (
    <>
        <TributeHero />
        <Stepper stepCollection={stepCollection} />
        <TributeNews />
        <TributeData />
    </>
  )
}

export default TributeContent