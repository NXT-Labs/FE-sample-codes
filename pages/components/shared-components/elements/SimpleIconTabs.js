import Image from 'next/image';
import PlayerMatchCard from '../../player-profile/elements/PlayerMatchCard';
// import TeamGameCard from '../../player-profile/elements/TeamGameCard';
const SimpleIconTabs = () => {
  return (
    <>
      {/* TABS */}
      <div className="simple-icon-tabs">
        <ul className="simple-icon-tabs-list">
          <li className="simple-icon-tabs-item">
            <Image
              src="https://cyber-battles-dev.s3.amazonaws.com/images/player-profile/tab-game-icon.svg"
              alt="tab icon"
              width="30px"
              height="17px"
              className='tab--icon'
            />
            Game
          </li>
          <li className="simple-icon-tabs-item">
            <Image
              src="https://cyber-battles-dev.s3.amazonaws.com/images/player-profile/tab-star-icon.svg"
              alt="tab icon"
              width="30px"
              height="17px"
              className='tab--icon'
            />
            ACHIEVEMENTS
          </li>
          <li className="simple-icon-tabs-item">
            <Image
              src="https://cyber-battles-dev.s3.amazonaws.com/images/player-profile/tab-teams-icon.svg"
              alt="tab icon"
              width="30px"
              height="17px"
              className='tab--icon'
            />
            TEAMS
          </li>
          <li className="simple-icon-tabs-item">
            <Image
              src="https://cyber-battles-dev.s3.amazonaws.com/images/player-profile/tab-shcedule-icon.svg"
              alt="tab icon"
              width="30px"
              height="17px"
              className='tab--icon'
            />
            SCHEDULES
          </li>
        </ul>
      </div>

      {/* ALL GAMES TAB CONTENT */}
      <div className="simple-icon-tab-content">
        <h3 className="featured-heading">ALL GAMES</h3>
        <div className="match-cards-grid">
          <div><PlayerMatchCard/></div>
          <div><PlayerMatchCard/></div>
          <div><PlayerMatchCard/></div>
          <div><PlayerMatchCard/></div>
          <div><PlayerMatchCard/></div>
          <div><PlayerMatchCard/></div>
        </div>
      </div>

      {/* ACHIEVEMENTS TAB CONTENT */}
      {/* <div className="simple-icon-tab-content">
        <p className='comingsoon-para'>Coming Soon</p>
      </div> */}

      {/* TEAMS TAB CONTENT */}
      {/* <div className="simple-icon-tab-content">
        <div className="match-selection-filters">
          //FILTERS DROPDOWNS 
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
            <button className="btn-bordered">SELECT ALL</button>
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
      </div> */}
    </>

  )
}
export default SimpleIconTabs;
