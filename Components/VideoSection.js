import React from 'react'
import styles from '../styles/css/VideoSection.module.css'

const VideoSection = ({ promotionVideo }) => {

    return (
        <section className={styles.video__section}>
            <iframe
                width="100%"
                height="480"
                src={promotionVideo.src}
                title={promotionVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </section>
    )
}

export default VideoSection