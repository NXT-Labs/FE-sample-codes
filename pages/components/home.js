import Navbar from './header/Navbar'
import Hero from './shared-components/elements/Hero'
import FeaturedTournament from './shared-components/elements/FeaturedTournaments'
import Logos from './shared-components/elements/Logos'
import LatestNews from './shared-components/elements/LatestNews'
import TopPlayerCard from './shared-components/elements/TopPlayerCard'
import PlayToEarnBox from './shared-components/elements/PlayToEarnBox'
import GameSlider from './shared-components/elements/GameSlider'
import CommunityTournament from './shared-components/elements/CommunityTournament'
import Tabs from './shared-components/elements/Tabs'
import MatchFinder from './shared-components/elements/MatchFinder'
import Footer from './shared-components/Footer'
const Home = () => {
  return (
    <div className="ellipses">
      <Navbar />
      <Hero />
      <div className="wrapper">
        <FeaturedTournament />
        <Logos />
        <GameSlider />
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

export default Home;
