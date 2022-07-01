import React, { useState, useEffect, useRef } from 'react'
import useWindowDimensions from '../Hooks/useWindowDimensions'
import PortfolioHero from './PortfolioHero'
import PortfolioCards from './PortfolioCards'
import PortfolioForm from './PortfolioForm';
import Swal from 'sweetalert2';
import styles from '../../styles/css/Portfolio.module.css';
import flexbox from '../../styles/css/Flexbox.module.css';

const PortfolioContent = () => {

  const [showHide, setShowHide] = useState(() => true);

  // const showHideRef = useRef(false);

  useEffect(() => {

    const intersectionObserver = new IntersectionObserver(() => {
      // showHideRef.current = !showHideRef.current;
      setShowHide((showHideInsideState) => showHideInsideState = !showHideInsideState);
    });

    intersectionObserver.observe(document.querySelector('#observer'));

    return () => intersectionObserver.disconnect();

  }, [])

  return (
    <>
      <div id='observer'>
        <PortfolioHero 
          showHide={showHide} 
          setShowHide={setShowHide} 
        />
      </div>
      <PortfolioCards />
      {
        showHide &&
        <div className={styles.portfolio__float__btn}>
          <PortfolioForm 
            styleBtn={styles.portfolio__btn} 
          />
        </div>
      }
    </>
  )
}

export default PortfolioContent