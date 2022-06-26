import React, { useState } from 'react'
import { FaMoneyBill } from 'react-icons/fa'
import flexbox from '../../../styles/css/flexbox.module.css'

const StatusBar = ({ money, setMoney, acquiredItems, setAcquiredItems }) => {

    return (
        <div className={flexbox.row}>
            <div className={flexbox.col__6}>
                <span style={{ display: 'inline-block' }}>
                    <FaMoneyBill
                        style={{
                            color: 'lime',
                            margin: '-3px 5px'
                        }}
                    />
                    Dinheiro: {money}
                </span>
            </div>
            <div className={flexbox.col__6}>
                {acquiredItems.map(acquiredItem => <span style={{ display: 'inline-block' }} key={acquiredItem.id}>{acquiredItem.icon}</span>)}
            </div>


        </div>
    )
}

export default StatusBar