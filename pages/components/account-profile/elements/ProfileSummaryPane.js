import Image from 'next/image';
import { S3_BUCKET_URL } from "../../../../src/infrastructure/services/APIConfig";
const ProfileSummaryPane = () => {
  return (
    <div className="profile-summary-pane">
      <div>
        {/* member info box */}
        <div className="member--info">
          <div className="user-profile">
            <Image
              src={`${S3_BUCKET_URL}/generic/user-avatar.svg`}
              alt="user avatar" width={'70px'} height={'70px'}
            />
            <button className="edit-profile">
              <Image
                src={`${S3_BUCKET_URL}/generic/edit-icon.svg`}
                alt="edit icon"
                width="12px"
                height="12px"
                className='button-icon'
              />
            </button>
          </div>
          <h3>Moiz Muhammad</h3>
          <p>Basic Member</p>
          <ul>
            <li>
              <Image
                src={`${S3_BUCKET_URL}/generic/candle-icon.svg`}
                alt="icon"
                width="14pxicon"
                height="14px"
              />
              10 Jan 1996
            </li>
            <li>
              <Image
                src={`${S3_BUCKET_URL}/generic/map-icon.svg`}
                alt="icon"
                width="14pxicon"
                height="14px"
              />
              United States
            </li>
          </ul>
        </div>

        {/* member ranking box */}
        <div className="member--ranking">
          <ul>
            <li>
              <h4>321,087</h4>
              <p>Rank</p>
            </li>
            <li>
              <h4>0</h4>
              <p>XP Earned</p>
            </li>
          </ul>
        </div>
      </div>
      <div>
        {/* member points and profile view */}
        <div className="member--points">
          <div>
            <p>Career Record</p>
            <span className="career-record">0 W  - 0 L</span>
          </div>
          <div>
            <p>Career Winnings</p>
            <span className="career-winning">$</span>
          </div>
          <div>
            <p>Profile Views</p>
            <span className="profile-views">0</span>
          </div>
        </div>
        {/* game ID */}
        <div className="member--game-id">
          <h4>Game ID</h4>
          <button className="btn-bordered">
              <Image
                src={`${S3_BUCKET_URL}/generic/edit-icon.svg`}
                alt="edit icon"
                width="12px"
                height="12px"
                className='button-icon'
              />
            Edit
          </button>
        </div>
        
        {/* see more button / only for mobile and tablets */}
        <button id="see-more">see more</button>
      </div>
    </div>
  )
}

export default ProfileSummaryPane;