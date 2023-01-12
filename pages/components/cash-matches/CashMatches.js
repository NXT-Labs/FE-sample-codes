import DetailScrollBox from "../shared-components/elements/DetailScrollBox";
import CashMatchesGrid from "./elements/CashMatchesGrid";
import Footer from "../shared-components/Footer";
import Home from "../header/Navbar";


function CatchMatches() {
  return (
    <>
      <div>
        <Home />
      </div>
      <div className="cash-matches-bg">
        <div className="cash-matches-bg-effect">
        </div>
        <div className="cash-matches-wrapper wrapper">
          <div className="cash-matches-content">
            <h3>Cash <br></br> Matches</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
          <div className="matches-grid-wrapper">
            <CashMatchesGrid />
          </div>
          <div className="matches-grid-wrapper">
            <CashMatchesGrid />
          </div>
          <div className="matches-grid-wrapper">
            <CashMatchesGrid />
          </div>
          <div>
            <DetailScrollBox />
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  )
}
export default CatchMatches;