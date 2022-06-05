import React from 'react'
import VideoSection from '../VideoSection'
import styles from '../../styles/css/LandingPage.module.css'

const LandingPageVideo = () => {

    const promotionVideo = {
        src: 'https://www.youtube.com/embed/BOL2V1dNabg',
        title: 'Configuração Otimizada Next Js'
    }

    return (
        <section className={styles.lp__video}>
            <h1
                className={styles.headline}
            >
                See with your &nbsp;
                <span className={styles.highlight}>
                    own eyes
                </span>
            </h1>
            <VideoSection 
                promotionVideo={promotionVideo}
            />
        </section>
    )
}

export default LandingPageVideo