import React from 'react'
import styles from '../styles/css/Stepper.module.css'
import Image from 'next/image'

const Stepper = ({ stepCollection }) => {

    return (
        <section
            className={styles.section__stepper}
            id='section__stepper'
        >
            {
                stepCollection.map((elem, i) => (
                    <div key={i} className={styles.steps}>
                        <div className={styles.step}>
                            <div className={styles.step__header}>
                                <p className={styles.header}>{elem.header}</p>
                                <p className={styles.subheader}>{elem.subheader}</p>
                            </div>
                            <div className={styles.step__content}>
                                <Image src={elem.imgSrc} alt={elem.imgAlt} layout='fill' />
                            </div>
                        </div>
                    </div>
                ))
            }
        </section>
    )
}

export default Stepper