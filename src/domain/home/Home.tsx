import React from 'react'
import Footer from '../../ui/footer/Footer'
import Navbar from '../../ui/navbar/Navbar'
import ProfileMenu from '../../ui/profileMenu/ProfileMenu'
import CommunityTournament from './components/CommunityTournament'
import FeaturedTournament from './components/FeaturedTournament'
import GameSlider from './components/GameSlider'
import Hero from './components/Hero'
import LatestNews from './components/LatestNews'
import Logos from './components/Logos'
import MatchFinder from './components/MatchFinder'
import PlayToEarnBox from './components/PlayToEarnBox'
import Tabs from './components/Tabs'
import TopPlayerCard from './components/TopPlayerCard'

function Home(props) {

  return (
    <div className="ellipses">
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
      <Hero />
      <div className="wrapper">
        <FeaturedTournament />
        <Logos />
        <GameSlider
          successType={props.successType}
          errorType={props.errorType}
          checkNested={props.checkNested}
        />
        <MatchFinder />
        <Tabs />
        <CommunityTournament />
        <PlayToEarnBox />
        <TopPlayerCard />
        <LatestNews />
      </div>
      <Footer />
    </div>
  )
}

export default Home