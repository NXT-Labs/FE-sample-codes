import Image from 'next/image';
import { S3_BUCKET_URL } from "../../../../src/infrastructure/services/APIConfig";

function TournamentDetails() {
  return (
    <div className='tournament-details'>
      <div className="picture">
        <div className="tournament-image">
          <Image
            src={`${S3_BUCKET_URL}/cashMatches/tournament-image.svg`}
            alt="tournament image"
            width="288px"
            height="288px"
          />
          <div className="price--badge">
            <span>
              <Image
                src={`${S3_BUCKET_URL}/generic/eth-icon.svg`}
                alt="featured tournament image"
                width={'14px'}
                height={'22px'}
              />
              95
            </span>
            <>PRICE</>
          </div>
        </div>
      </div>
      <div className="info">
        <h3>CONSOLE ONLY SWITCHARoo $75 GTD 2v2</h3>
        <h4>CALL OF DUTY: VANGUARD <span>NA + EU</span></h4>
        <div className="team-detail">
          <div>
            <h5>ENTRY/PLAYER</h5>
            <p>5 Credits</p>
          </div>
          <div>
            <h5>TEAM SIZE</h5>
            <p>2v2</p>
          </div>
          <div>
            <h5>MAX TEAMS</h5>
            <p>32</p>
          </div>
          <div>
            <h5>ENROLL</h5>
            <p>0</p>
          </div>
        </div>
        <div className="highlights">
          <div>
            <h4>REGISTRATION OPENS</h4>
            <h5>OPEN NOW</h5>
          </div>
          <div>
            <h4>START TIME <span>wednesday</span></h4>
            <ul>
              <li>23 July</li>
              <li>03:00 AM EDT</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TournamentDetails;