import React from 'react'
import styles from '../styles/css/PriceTable.module.css'
import flexbox from '../styles/css/Flexbox.module.css'
import Link from 'next/link'

const PriceTable = ({ priceTable, key }) => {

    return (
        <div className={priceTable.columnLength}>
            <div key={key} className={styles.price}>
                <h2 className={styles.price__title}>{priceTable.plan}</h2>
                <p className={styles.pricing}>{priceTable.price}<span className={styles.highlight}>/per month</span></p>
                <p>Save {priceTable.savings} dollars</p>
                <hr />
                <ul className={styles.features}>
                    {priceTable.features.map((feature, innerKey) => (
                        <li key={innerKey}>{feature}</li>
                    ))}
                </ul>
                <Link
                    href="/"
                >
                    <a
                        className={styles.price__btn}
                    >
                        Buy Now
                    </a>
                </Link>
            </div>
        </div>

    )
}

export default PriceTable;