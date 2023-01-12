import Image from 'next/image';
import { S3_BUCKET_URL } from '../../../infrastructure/services/APIConfig';
import Achievements from './Achievements';
import CommingSoon from './CommingSoon';
import Games from './Games';

function SimpleIconTabs(props) {
  return (
    <>
      {/* TABS */}
      <div className="simple-icon-tabs">
        <ul className="simple-icon-tabs-list">
          <li
            onClick={() => props.setActiveTab(0)}
            className={`simple-icon-tabs-item ${props.activeTab === 0 ? 'active' : ''}`}>
            <Image
              src={`${S3_BUCKET_URL}/player-profile/tab-game-icon.svg`}
              alt="tab icon"
              width="30px"
              height="17px"
              className='tab--icon'
            />
            Game
          </li>
          <li
            onClick={() => props.setActiveTab(1)}
            className={`simple-icon-tabs-item ${props.activeTab === 1 ? 'active' : ''}`}>
            <Image
              src={`${S3_BUCKET_URL}/player-profile/tab-star-icon.svg`}
              alt="tab icon"
              width="30px"
              height="17px"
              className='tab--icon'
            />
            ACHIEVEMENTS
          </li>
          <li
            onClick={() => props.setActiveTab(2)}
            className={`simple-icon-tabs-item ${props.activeTab === 2 ? 'active' : ''}`}>
            <Image
              src={`${S3_BUCKET_URL}/player-profile/tab-teams-icon.svg`}
              alt="tab icon"
              width="30px"
              height="17px"
              className='tab--icon'
            />
            TEAMS
          </li>
          <li
            onClick={() => props.setActiveTab(3)}
            className={`simple-icon-tabs-item ${props.activeTab === 3 ? 'active' : ''}`}>
            <Image
              src={`${S3_BUCKET_URL}/player-profile/tab-shcedule-icon.svg`}
              alt="tab icon"
              width="30px"
              height="17px"
              className='tab--icon'
            />
            SCHEDULES
          </li>
        </ul>
      </div>


      {
        props.activeTab === 0 ?
          <>
            {/* ALL GAMES TAB CONTENT */}
            <Games />
          </>
          :
          props.activeTab === 1 ?
            <>
              {/* ACHIEVEMENTS TAB CONTENT */}
              <Achievements />
            </>
            :
            props.activeTab === 2 ?
              <>
                {/* COMMINGSOON TAB CONTENT */}
                <CommingSoon />
              </>
              :
              props.activeTab === 3 ?
                <>
                  {/* COMMINGSOON TAB CONTENT */}
                  <CommingSoon />
                </>
                :
                ''
      }


    </>
  )
}

export default SimpleIconTabs