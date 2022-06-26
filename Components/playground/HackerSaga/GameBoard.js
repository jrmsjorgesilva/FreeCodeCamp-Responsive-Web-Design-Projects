import React, { useState } from 'react'
import GameTabs from './GameTabs'
import GameCards from './GameCards'
import GameShop from './GameShop'
import GameChallenge from './GameChallenge'
import GameConfig from './GameConfig'

const GameBoard = ({ money, setMoney, acquiredItems, setAcquiredItems }) => {

  const [gameTab, setGameTab] = useState(() => 'cards')

  console.log('FDGDFG', gameTab);

  return (
    <>
      <GameTabs
        gameTab={gameTab}
        setGameTab={setGameTab}
      />
      {gameTab === 'cards' && <GameCards setMoney={setMoney} />}
      {gameTab === 'shop' && <GameShop money={money} setMoney={setMoney} acquiredItems={acquiredItems} setAcquiredItems={setAcquiredItems} />}
      {gameTab === 'challenge' && <GameChallenge />}
      {gameTab === 'config' && <GameConfig />}
    </>
  )
}

export default GameBoard