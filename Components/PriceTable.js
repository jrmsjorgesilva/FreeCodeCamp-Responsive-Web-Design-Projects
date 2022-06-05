import React from 'react'
import styles from '../styles/css/PriceTable.module.css'

const PriceTable = ({ priceTable, key }) => {

    console.log('fdsfsgsf', priceTable);

    return (
        <div key={key} className={styles.card}>
            <h2 className={styles.card__title}>Family</h2>
            <p className={styles.pricing}>60$<span className={styles.highlight}>/per month</span></p>
            <p>Save $25</p>
            <hr />
            <ul className={styles.features}>
                <li>Six account</li>
                <li>Unlimited songs</li>
                <li>Customized playlist</li>
            </ul>
            <a href="#" className={styles.price__btn}>Buy Now</a>
        </div>
    )
}

export default PriceTable;