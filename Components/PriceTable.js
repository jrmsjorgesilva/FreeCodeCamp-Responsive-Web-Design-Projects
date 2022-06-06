import React from 'react'
import styles from '../styles/css/PriceTable.module.css'
import Link from 'next/link'
import { FaRegCheckCircle, FaMoney, FaSearchMinus, FaCartP, FaRegCheckSquarelus } from 'react-icons/fa'

const PriceTable = ({ priceTable, key }) => {

    return (
        <div className={priceTable.columnLength}>
            <div key={key} className={styles.price}>
                <h2>{priceTable.plan}</h2>
                <p><span>{priceTable.price}</span> per month</p>
                <p>Save <span>{priceTable.savings}</span> dollars</p>
                <hr />
                <ul>
                    {priceTable.features.map((feature, innerKey) => (
                        <li key={innerKey}>
                            <FaRegCheckCircle style={{ color: 'yellow', margin: '-2px 10px' }} />
                            {feature}
                        </li>
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