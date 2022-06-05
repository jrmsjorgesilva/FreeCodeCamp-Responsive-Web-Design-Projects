import React from 'react'
import styles from '../../styles/css/LandingPage.module.css'
import flexbox from '../../styles/css/Flexbox.module.css'
import PriceTable from '../PriceTable'

const LandingPagePrice = () => {

    const priceTables = [
        {
            price: 25,
            plan: 'Family',
            savings: '5',
            features: [
                'One account',
                '5 songs',
                'Customized playlist'
            ],
            columnLength: flexbox.col__4,
        },
        {
            price: 45,
            plan: 'Modern',
            savings: '15',
            features: [
                'Three accounts',
                '30 songs',
                'Customized playlist'
            ],
            columnLength: flexbox.col__4,
        },
        {
            price: 85,
            plan: 'Turbo Combo',
            savings: '50',
            features: [
                'Six accounts',
                'Unlimited songs',
                'Customized playlist'
            ],
            columnLength: flexbox.col__4,
        }
    ];

    return (
        <section className={styles.lp__price}>
            <h1
                className={styles.headline}
            >
                Our &nbsp;
                <span className={styles.highlight}>
                    Special Offer
                </span>
            </h1>
            <div className={flexbox.row}>
                {priceTables.map((priceTable, key) => <PriceTable priceTable={priceTable} key={key} />)}
            </div>
        </section>
    )
}

export default LandingPagePrice