import React, { useState } from 'react'
import StatusBar from './StatusBar'
import GameBoard from './GameBoard'

const GameContent = () => {

    const [money, setMoney] = useState(() => 0);

    return (
        <main>
            <StatusBar 
                money={money} 
                setMoney={setMoney} 
            />
            <GameBoard setMoney={setMoney} />
        </main>
    )
}

export default GameContent