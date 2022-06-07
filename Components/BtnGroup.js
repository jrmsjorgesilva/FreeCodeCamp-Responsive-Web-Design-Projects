import React from 'react'
import styles from '../styles/css/BtnGroup.module.css'
import flexbox from '../styles/css/Flexbox.module.css'

const BtnGroup = ({ changeCols }) => {
    return (
        <div className={styles.portfolio__btn__group}>
            <button
                onClick={() => changeCols(flexbox.col__6)}
                className={styles.portfolio__filter__btn}
            >
                2 colunas
            </button>
            <button
                onClick={() => changeCols(flexbox.col__4)}
                className={styles.portfolio__filter__btn}
            >
                3 colunas
            </button>
            <button
                onClick={() => changeCols(flexbox.col__3)}
                className={styles.portfolio__filter__btn}
            >
                4 colunas
            </button>
        </div>
    )
}

export default BtnGroup