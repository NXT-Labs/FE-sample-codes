import Image from 'next/image';

function PlayerMatchCard(){
  return(
    <div className="player-match-card">
      <div className="match-match-logo">
        <Image
          src="https://cyber-battles-dev.s3.amazonaws.com/images/player-profile/Apex-Legend-Logo.svg"
          alt="game logo"
          width="165px"
          height="56px"
        />
      </div>

      <div className="match-info">
        <div className="skill-level">
          <h4>skill level</h4>
          <p>EXPERT
            <Image
              src="https://cyber-battles-dev.s3.amazonaws.com/images/player-profile/question-mark-green.svg"
              alt="question mark"
              width="17px"
              height="17px"
              className='question-mark'
            />
          </p>
        </div>
        <div className="record">
          <h5>RECORD</h5>
          <p>342 / 213</p>
        </div>
        <div className="win-percentage">
          <h5>WIN PERCENTAGE</h5>
          <p>62%</p>
        </div>
        <div className="earnings">
          <h5>EARNINGS</h5>
          <p>$972.51</p>
        </div>
      </div>
      <hr />
      <div className="flexbox-between">
        <h5>BEST STREAK</h5>
        <p>12</p>
      </div>
    </div>
  )
}

export default PlayerMatchCard;