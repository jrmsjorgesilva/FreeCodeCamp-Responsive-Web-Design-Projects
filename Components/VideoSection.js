import React from 'react'
import styles from '../styles/css/VideoSection.module.css'

const VideoSection = () => {

    const promotionVideo = 'https://www.youtube.com/embed/BOL2V1dNabg'

    return (
        <section className={styles.video__section}>
            <h1
                className={styles.headline}
            >
                See with your 
                <span className={styles.highlight}>
                    own eyes
                </span>
            </h1>
            <iframe
                width="100%"
                height="480"
                src={promotionVideo}
                title="Configuração Next Js Pro Senior"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </section>
    )
}

export default VideoSection