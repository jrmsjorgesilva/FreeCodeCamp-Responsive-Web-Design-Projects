import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from '../../../../styles/css/LandingPage.module.css'
import { increment, decrement } from './counterSlice'
import { FaPlus, FaMinus } from 'react-icons/fa'

const Counter = () => {

    const displayCount = useSelector((state) => state.counter);

    const dispatch = useDispatch();

    console.log('displayCount', displayCount)

    return (
        <div className={styles.container}>
            <button
                onClick={() => dispatch(increment())}
                className={styles.lp__btn}
            >
                Incrementar
                <FaPlus />
            </button>

            <button
                onClick={() => dispatch(decrement())}
                className={styles.lp__btn}
            >
                Decrementar
                <FaMinus />
            </button>
            
            <span className={styles.container}>
                {displayCount}
            </span>
        </div>
    )
}

export default Counter