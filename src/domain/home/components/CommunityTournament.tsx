import Image from 'next/image'
import { PrimaryButton } from '../../../ui/buttons/buttons'
import TournamentCard from './TournamentCard'

function CommunityTournament() {
  return (
    <div className="home-section">
      <h2 className="featured-heading">
        <Image src="/images/generic/community-icon.svg" alt="trophie icon" width={'28px'} height={'28px'} />
        COMMUNITY TOURNAMENTS
      </h2>
      <p className="sub-title">Bring multiple teams together in a bracket for single elimination mayhem.</p>

      {/* TOURNAMENT FILTERS DROPDOWNS  */}
      <div className="dropdown-filters">
        <select>
          <option>Games</option>
          <option>Call of Duty</option>
          <option>Dota 2</option>
          <option>Valorant</option>
          <option>Apex</option>
          <option>Overwatch</option>
        </select>

        <select>
          <option>Platforms</option>
          <option>Platform abc</option>
          <option>Platform xyz</option>
        </select>

        <select>
          <option>More</option>
          <option>More abc</option>
          <option>More xyz</option>
        </select>
      </div>

      <div className="tournaments">
        <TournamentCard />
        <TournamentCard />
        <TournamentCard />
        <TournamentCard />
        <TournamentCard />
        <TournamentCard />
      </div>

      <PrimaryButton
        className="btn-solid wide"
        value="Load More"
      />
    </div>
  )
}

export default CommunityTournament