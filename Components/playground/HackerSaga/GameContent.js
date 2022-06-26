import React, { useState } from 'react'
import StatusBar from './StatusBar'
import GameBoard from './GameBoard'
import { FaCode, FaReact } from 'react-icons/fa'

const GameContent = () => {

    const [money, setMoney] = useState(() => 8000);

    const [acquiredItems, setAcquiredItems] = useState(() => []);

    return (
        <main>
            <StatusBar
                money={money}
                setMoney={setMoney}
                acquiredItems={acquiredItems}
                setAcquiredItems={setAcquiredItems}
            />
            <GameBoard
                money={money}
                setMoney={setMoney}
                acquiredItems={acquiredItems}
                setAcquiredItems={setAcquiredItems}
            />
        </main>
    )
}

export default GameContent