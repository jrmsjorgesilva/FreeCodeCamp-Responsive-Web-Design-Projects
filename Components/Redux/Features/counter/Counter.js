/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from '../../../../styles/css/LandingPage.module.css'
import flexbox from '../../../../styles/css/Flexbox.module.css'
import { increment, decrement } from './counterSlice'
import { FaPlus, FaMinus } from 'react-icons/fa'
import Image from 'next/image'

const Counter = () => {

    const displayCount = useSelector((state) => state.counter.count);

    const dispatch = useDispatch();

    console.log('displayCount', displayCount)

    return (
        <div className={styles.container}>
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
                    <span className={styles.display__count}>
                        {displayCount}
                    </span>

                    <button
                        onClick={() => dispatch(increment())}
                        className={styles.lp__btn}
                    >
                        <FaPlus />
                    </button>

                    <button
                        onClick={() => dispatch(decrement())}
                        className={styles.lp__btn}
                    >
                        <FaMinus />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Counter