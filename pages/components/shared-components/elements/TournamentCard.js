import Image from 'next/image'
const TournamentCard = () => {
  return (
    <div className="tournament-card">
      <div className="tournament-image">
        <Image
          src="https://cyber-battles-dev.s3.amazonaws.com/images/generic/tournament-img.png"
          alt="tournament image"
          width={'129px'}
          height={'129px'}
          layout="fixed"
        />
      </div>

      <div className="price-badge">
        <h4>
          <Image
            src="https://cyber-battles-dev.s3.amazonaws.com/images/generic/eth-icon.svg"
            alt="eth"
            width={'14px'}
            height={'22px'}
          />
          190
        </h4>
        <span>PRICE</span>
        <div className="badge-triangle"></div>
      </div>

      <div className="details">
        <h3>2v2 Kill Race Best of 1</h3>
        <p>Aug 01, 7:00 AM EDT</p>
        <p className="starts-in">Starts in 24M 57S</p>
      </div>

      <div className="team-info">
        <div>
          <h4>ENTRY/PLAYER</h4>
          <p>5 Credits</p>
        </div>
        <div>
          <h4>TEAM SIZE</h4>
          <p>2v2</p>
        </div>
        <div>
          <h4>REGIONS</h4>
          <p>NA+EU</p>
        </div>
      </div>

      <div className="skill-level">
        <h4>Skill level</h4>
        <p>ALL</p>
      </div>

      <button className="view-btn">VIEW TOURNAMENT</button>
    </div>
  )
}

export default TournamentCard
