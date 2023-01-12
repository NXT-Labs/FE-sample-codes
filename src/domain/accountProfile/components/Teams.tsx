import React from 'react'

function Teams() {
  return (
    <div className="account-profile-tab-content">
      <div className="icon-tab--content-title">
        <h3>Teams</h3>
        {/* DROPDOWN FILTERS */}
        <div className="team-selection-filters">
          {/* FILTERS DROPDOWNS */}
          <div className="dropdown-filters-buttons">
            <select>
              <option>all team size</option>
              <option>single</option>
              <option>double</option>
              <option>squad</option>
            </select>
            <select>
              <option>all games</option>
              <option>--</option>
              <option>--</option>
            </select>
            <select>
              <option>all types</option>
              <option>--</option>
              <option>--</option>
            </select>
            <button className="btn-solid">select all</button>
          </div>
        </div>
      </div>
      <div className="icon-tab--content">
        <p>No team found feels bad man.</p>
      </div>
    </div>
  )
}

export default Teams