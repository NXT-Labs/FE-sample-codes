import Image from 'next/image'
import React from 'react'
import Achievements from './Achievements'
import Games from './Games'
import Teams from './Teams'

function AccountProfileTabs(props) {

  return (
    <div className="profile--tabs">
      <div className="icon-tabs">
        <ul className="icon-tabs-list">
          <li
            className={`icon-tabs-item ${props.activeTab === 0 ? 'active' : ''}`}
            onClick={() => props.setActiveTab(0)}
          >
            <Image
              src="https://cyber-battles-dev.s3.amazonaws.com/images/generic/games-icon.svg"
              alt="tab icon"
              width="30px"
              height="17px"
              className='tab--icon'
            />
            Game
          </li>
          <li
            className={`icon-tabs-item ${props.activeTab === 1 ? 'active' : ''}`}
            onClick={() => props.setActiveTab(1)}
          >
            <Image
              src="https://cyber-battles-dev.s3.amazonaws.com/images/generic/players-icon.svg"
              alt="tab icon"
              width="30px"
              height="17px"
              className='tab--icon'
            />
            Teams
          </li>
          <li
            className={`icon-tabs-item ${props.activeTab === 2 ? 'active' : ''}`}
            onClick={() => props.setActiveTab(2)}
          >
            <Image
              src="https://cyber-battles-dev.s3.amazonaws.com/images/generic/trophie-icon.svg"
              alt="tab icon"
              width="30px"
              height="17px"
              className='tab--icon'
            />
            Acheivments
          </li>
        </ul>
      </div>
      {
        props.activeTab === 0 ?
          <>
            {/* GAMES TAB CONTENT */}
            <Games />
          </>
          :
          props.activeTab === 1 ?
            <>
              {/* TEAM TAB CONTENT */}
              <Teams />
            </>
            :
            props.activeTab === 2 ?
              <>
                {/* ACHIEVEMENTS TAB CONTENT */}
                <Achievements />
              </>
              :
              ''
      }
    </div>
  )
}

export default AccountProfileTabs