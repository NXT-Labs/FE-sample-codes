import React, { useState } from 'react'
import Footer from '../../ui/footer/Footer'
import Navbar from '../../ui/navbar/Navbar'
import ProfileMenu from '../../ui/profileMenu/ProfileMenu'
import PlayerInfoCardBox from './components/PlayerInfoCardBox'
import PlayerProfileBanner from './components/PlayerProfileBanner'
import SimpleIconTabs from './components/SimpleIconTabs'

function PlayerProfile(props) {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <>
      <Navbar
        profileState={props.app.profileState}
        signInRoute={props.app.signInRoute}
        signUpRoute={props.app.signUpRoute}
        userState={props.app.userState}
      />
      {
        props.app?.profileState?.showProfileMenu ?
          <ProfileMenu
            profileState={props.app.profileState}
            userState={props.app.userState}
            profileTabs={props.profileTabs}
            userSignout={props.app.userSignout}
          />
          :
          ''
      }
      <div className="bg-patterns">
        <div className="player-profile-template">
          <PlayerProfileBanner />
          <PlayerInfoCardBox />
          <div className="profile-wrapper">
            <SimpleIconTabs
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default PlayerProfile