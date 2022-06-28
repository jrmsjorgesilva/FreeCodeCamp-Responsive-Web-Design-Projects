import React, { useState } from 'react'
import StatusBar from './StatusBar'
import GameBoard from './GameBoard'
import { FaCode, FaReact } from 'react-icons/fa'

const GameContent = () => {

    // statusbar data
    const [money, setMoney] = useState(() => 50000);
    const [life, setLife] = useState(() => 3);
    const [acquiredItems, setAcquiredItems] = useState(() => []);

    // events of the game
    const [gameOver, setGameOver] = useState(() => false);
    const [bribery, setBribery] = useState(() => false);
    const [loan, setLoan] = useState(() => []);
    const [gang, setGang] = useState(() => false);

    // functions 

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