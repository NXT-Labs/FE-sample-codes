import React from 'react'
import { PrimaryButton } from '../../../ui/buttons/buttons'
import TeamGameCard from './TeamGameCard'

function Achievements() {
  return (
    <>
      {/* TEAMS TAB CONTENT */}
      <div className="simple-icon-tab-content">
        <div className="match-selection-filters">
          {/* //FILTERS DROPDOWNS */}
          <div className="dropdown-filters">
            <select>
              <option>ALL TEAM SIZE</option>
              <option>SINGLE</option>
              <option>DOUBLE</option>
              <option>SQUAD</option>
            </select>
            <select>
              <option>ALL GAMES</option>
              <option>--</option>
              <option>--</option>
            </select>
            <select>
              <option>ALL TYPES</option>
              <option>--</option>
              <option>--</option>
            </select>
            <PrimaryButton className="btn-bordered"
              value="SELECT ALL"
            />
          </div>
        </div>
        <div className="match-cards-grid">
          <div><TeamGameCard /></div>
          <div><TeamGameCard /></div>
          <div><TeamGameCard /></div>
          <div><TeamGameCard /></div>
          <div><TeamGameCard /></div>
          <div><TeamGameCard /></div>
        </div>
      </div>
    </>
  )
}

export default Achievements