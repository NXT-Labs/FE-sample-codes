import IconTabs from "../../shared-components/elements/IconTabs";
function AccountProfileTabs() {
  return (
    <div className="profile--tabs">
      <IconTabs />
      {/* GAMES TAB CONTENT */}
       <div className="account-profile-tab-content">
        <div className="icon-tab--content-title">
          <h3>All Games</h3>
          <button className="btn-solid">Stat Reset</button>
        </div>
        <div className="icon-tab--content">
          <p>No game palyed yet! and you call yourself as gamer?</p>
        </div>
      </div> 
      {/* TEAM TAB CONTENT */}
      {/* <div className="account-profile-tab-content">
        <div className="icon-tab--content-title">
          <h3>Teams</h3>
          //DROPDOWN FILTERS
          <div className="team-selection-filters">
          //FILTERS DROPDOWNS 
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
      </div> */}

      {/* ACHIEVEMENTS TAB CONTENT */}
      {/* <div className="account-profile-tab-content">
        <div className="icon-tab--content">
          <p>Coming Soon</p>
        </div>
      </div>  */}
    </div>
  )
}

export default AccountProfileTabs;

