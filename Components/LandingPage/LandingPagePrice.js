import React from 'react'
import styles from '../../styles/css/LandingPage.module.css'
import PriceTable from '../PriceTable'

const LandingPagePrice = () => {

    const priceTables = [
        {
            price: 25,
            plan: 'Family',
            Savings: '5',
            features: [
                'One account',
                '5 songs',
                'Customized playlist'
            ]
        },
        {
            price: 45,
            plan: 'Modern',
            Savings: '15',
            features: [
                'Three accounts',
                '30 songs',
                'Customized playlist'
            ]
        },
        {
            price: 85,
            plan: 'Turbo Combo',
            Savings: '50',
            features: [
                'Six accounts',
                'Unlimited songs',
                'Customized playlist'
            ]
        }
    ];

    console.log('porime', priceTables)

    return (
        <section className={styles.lp__price}>
            <div className={styles.card__container}>
                {priceTables.map((priceTable, key) => <PriceTable priceTable={priceTable} key={key} />)}
            </div>
        </section>
    )
}

export default LandingPagePrice