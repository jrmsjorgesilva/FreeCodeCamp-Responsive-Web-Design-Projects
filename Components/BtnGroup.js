import React from 'react'
import styles from '../styles/css/BtnGroup.module.css'

const BtnGroup = ({ children }) => {
    return (
        <div className={styles.portfolio__btn__group}>
            {children}
        </div>
    )
}

export default BtnGroup