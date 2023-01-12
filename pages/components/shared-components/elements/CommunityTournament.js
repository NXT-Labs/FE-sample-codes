import Image from 'next/image'
import TournamentCard from './TournamentCard'
import CustomDropdown from '../inputs/CustomDropdown'

const CommunityTournament = () =>{
  return(
    <div className="home-section">
        <h2 className="featured-heading">
        <Image src="/images/generic/community-icon.svg" alt="trophie icon"  width={'28px'} height={'28px'}/>
        COMMUNITY TOURNAMENTS
      </h2>
      <p className="sub-title">Bring multiple teams together in a bracket for single elimination mayhem.</p>

      {/* TOURNAMENT FILTERS DROPDOWNS  */}
        <div className="dropdown-filters">
          <CustomDropdown/>

          <CustomDropdown/>
      </div>

      <div className="tournaments">
        <TournamentCard/>
        <TournamentCard/>
        <TournamentCard/>
        <TournamentCard/>
        <TournamentCard/>
        <TournamentCard/>
      </div>

      <button className="btn-solid wide">Load More</button>
    </div>

  )
}

export default CommunityTournament;






