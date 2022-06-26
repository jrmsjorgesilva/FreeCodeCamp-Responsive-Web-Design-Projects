import React, { useState } from 'react'
import { FaMoneyBill } from 'react-icons/fa'

const StatusBar = ({ money, setMoney }) => {

    return (
        <div className={{}}>
            <span className={{}}>
                <FaMoneyBill 
                    style={{  
                        color: 'lime',
                        margin: '-3px 5px'
                    }} 
                />
                Dinheiro: {money}
            </span>

        </div>
    )
}

export default StatusBar