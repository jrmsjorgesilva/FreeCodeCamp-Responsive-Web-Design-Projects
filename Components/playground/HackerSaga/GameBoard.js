import React from 'react'
import GameTabs from './GameTabs'
import GameCards from './GameCards'
import GameShop from './GameShop'

const GameBoard = () => {
  return (
    <>
        <GameTabs />
        <GameCards />
        <GameShop />
    </>
  )
}

export default GameBoard