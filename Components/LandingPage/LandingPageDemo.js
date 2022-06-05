import React from 'react'
import Counter from '../Redux/Features/counter/Counter';
import styles from '../../styles/css/LandingPage.module.css'

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
            <Counter />
        </section>
    )
}

export default LandingPageDemo