import PlayerProfileBanner from "./elements/PlayerProfileBanner";
import PlayerInfoCardBox from "./elements/PlayerInfoCardBox";
import SimpleIconTabs from "../shared-components/elements/SimpleIconTabs";
import Navbar from "../header/Navbar";
import Footer from "../shared-components/Footer";

function PlayerProfile() {
  return (
    <>
      <Navbar/>
        <div className="bg-patterns">
          <div className="player-profile-template">
            <PlayerProfileBanner />
            <PlayerInfoCardBox/>
            <div className="profile-wrapper">
              <SimpleIconTabs/>
            </div>
          </div>
        </div>
      <Footer/>
    </>

  )
}

export default PlayerProfile;