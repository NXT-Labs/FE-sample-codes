import Image from "next/image";

function CashMatchesGrid () {
  return (
    <div className="cash-matches-cards">
      <div className="grid-card">
        <Image
        src="https://cyber-battles-dev.s3.amazonaws.com/images/cashMatches/cash-match-grid1.svg" alt="Game Image" width="192px" height="254px"
        />
        <div className="grid-content">
          <p>Call of Duty <br></br>VANGUARD</p>
        </div>
      </div>
      <div className="grid-card">
        <Image
        src="https://cyber-battles-dev.s3.amazonaws.com/images/cashMatches/cash-match-grid2.svg" alt="Game Image" width="192px" height="254px"
        />
        <div className="grid-content">
          <p>Apex Legends<br></br>VANGUARD</p>
        </div>
      </div>
      <div className="grid-card">
        <Image
        src="https://cyber-battles-dev.s3.amazonaws.com/images/cashMatches/cash-match-grid5.svg" alt="Game Image" width="192px" height="254px"
        />
        <div className="grid-content">
          <p>CALL OF DUTY <br></br>WARZONE PACIFIC</p>
        </div>
      </div>
      <div className="grid-card">
        <Image
        src="https://cyber-battles-dev.s3.amazonaws.com/images/cashMatches/cash-match-grid3.svg" alt="Game Image" width="192px" height="254px"
        />
        <div className="grid-content">
          <p>OVERWATCH<br></br> 2</p>
        </div>
      </div>
      <div className="grid-card">
        <Image
        src="https://cyber-battles-dev.s3.amazonaws.com/images/cashMatches/cash-match-grid4.svg" alt="Game Image" width="192px" height="254px"
        />
        <div className="grid-content">
          <p>Call of Duty <br></br>VANGUARD</p>
        </div>
      </div>
      <div className="grid-card card-extra">
        <Image
        src="https://cyber-battles-dev.s3.amazonaws.com/images/cashMatches/cash-match-grid5.svg" alt="Game Image" width="192px" height="254px"
        />
        <div className="grid-content">
          <p>CALL OF DUTY <br></br>WARZONE PACIFIC</p>
        </div>
      </div>
    
    </div>
  )
}
export default CashMatchesGrid;