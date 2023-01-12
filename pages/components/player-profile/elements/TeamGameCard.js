import Image from 'next/image';

function TeamGameCard(){
  return(
    <div className="team-game-card">
      <div className="team-game-image">
        <Image
          src="https://cyber-battles-dev.s3.amazonaws.com/images/player-profile/team-game-image.svg"
          alt="game image"
          width="330px"
          height="196px"
        />
      </div>
      <div className="team-game-info">
        <div>
          <h3 className='team-game-group'>HeftyRaccon957f</h3>
          <h4 className='team-game-title'>Call of Duty: Pacific <span>PC</span></h4>
          <div className="game-type">
            <Image
              src="https://cyber-battles-dev.s3.amazonaws.com/images/player-profile/gamers-group.svg"
              alt="group icon"
              width="26px"
              height="16px"
            />
            Doubles I 2W-0L
          </div>
        </div>
        <button className="btn-bordered">VIEW</button>
      </div>
    </div>
  )
}

export default TeamGameCard;