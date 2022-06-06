/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from '../../../../styles/css/LandingPage.module.css'
import { increment, decrement } from './counterSlice'
import { FaPlus, FaMinus } from 'react-icons/fa'

const Counter = () => {

    const displayCount = useSelector((state) => state.counter.count);

    const dispatch = useDispatch();

    return (
        <div className={styles.container}>
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
    )
}

export default Counter