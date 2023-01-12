import Image from 'next/image'
import React from 'react'

function GameCard(props) {
  return (
    <div className="game-card">
      <div className="game-slider-image">
        <Image
          src={props?.game?.thumbnail || "/images/home-elements/gameCard-1.png"}
          alt="game card"
          width={'192px'} 
          height={'254px'}
          layout="fixed"
        />
      </div>
      <div className="game--title">
        <h3>{props?.game?.title || 'Call of Duty VANGUARD'}</h3>
      </div>
    </div>
  )
}

export default GameCard