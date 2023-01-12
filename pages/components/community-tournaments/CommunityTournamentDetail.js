import TournamentDetails from './elements/TournamentDetails';
import Navbar from "../header/Navbar";
import Footer from "../shared-components/Footer";

function CommunityTournamentDetail() {
  return (
    <div className="page-outline">
      <Navbar/>
      <div className="template-page-with-banner">
        <div className="wrapper-compact">
          <TournamentDetails />
        </div>
      </div>
      <Footer/>
    </div>

  )
}

export default CommunityTournamentDetail;