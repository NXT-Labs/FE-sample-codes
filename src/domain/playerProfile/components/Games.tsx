import React from 'react'
import PlayerMatchCard from './PlayerMatchCard'

function Games() {
  return (
    <div className="simple-icon-tab-content">
      <h3 className="featured-heading">ALL GAMES</h3>
      <div className="match-cards-grid">
        <div><PlayerMatchCard /></div>
        <div><PlayerMatchCard /></div>
        <div><PlayerMatchCard /></div>
        <div><PlayerMatchCard /></div>
        <div><PlayerMatchCard /></div>
        <div><PlayerMatchCard /></div>
      </div>
    </div>
  )
}

export default Games