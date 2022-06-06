import React from 'react'
import Counter from '../Redux/Features/counter/Counter';
import styles from '../../styles/css/LandingPage.module.css'
import flexbox from '../../styles/css/Flexbox.module.css'
import Image from 'next/image'

const LandingPageDemo = () => {
    return (
        <section className={styles.lp__demo}>
            <h1 className={styles.headline}>
                Veja como é &nbsp;
                <span
                    className={styles.highlight}
                > 
                    Fácil Iniciar
                </span>
            </h1>
            <div className={flexbox.row}>
                <div className={flexbox.col__6}>
                    <Image
                        src='/img_LP/redux-diagram.png'
                        alt='diagrama explicativo do redux'
                        width={400}
                        height={300}
                    />
                </div>
                <div className={flexbox.col__6}>
                    <Counter />
                </div>
            </div>

        </section>
    )
}

export default LandingPageDemo