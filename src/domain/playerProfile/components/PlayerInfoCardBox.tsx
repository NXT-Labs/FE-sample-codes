import Image from 'next/image';

function PlayerInfoCardBox() {
  return (
    <div className="player-info">
      <div className="player-info--box">
        <div className="member-type-logo">
          <Image
            src="https://cyber-battles-dev.s3.amazonaws.com/images/generic/elite-member-logo.svg"
            alt="membership type logo"
            width="132px"
            height="38px"
          />
        </div>
        <div className="pfp">
          <Image
            src="https://cyber-battles-dev.s3.amazonaws.com/images/player-profile/user-pfp.png"
            alt="profile picture"
            width="140px"
            height="140px"
          />
        </div>
        <h3 className="player-name">AkiTheJoke</h3>
        <ul className='profile-views'>
          <li>PROFILE VIEW: 10782</li>
          <li>JOINED 12-21-2018</li>
        </ul>
        <button id="see-all">
          <Image
            src="https://cyber-battles-dev.s3.amazonaws.com/images/generic/toggle-down-blue-icon.svg"
            alt="toggle down icon"
            width="12px"
            height="6px"
          />
          SEE ALL
        </button>
        <h4 className="gamer-id">GAMER ID:</h4>

        {/* GAMING IDs */}
        <div className="games-ids">
          <div>
            <Image
              src="https://cyber-battles-dev.s3.amazonaws.com/images/player-profile/game-console-icon.svg"
              alt="game icon"
              width="27px"
              height="27px"
            />
            <p>iAki197</p>
          </div>
          <div>
            <Image
              src="https://cyber-battles-dev.s3.amazonaws.com/images/player-profile/xbox-icon.svg"
              alt="game icon"
              width="27px"
              height="27px"
            />
            <p>iAki197</p>
          </div>
          <div>
            <Image
              src="https://cyber-battles-dev.s3.amazonaws.com/images/player-profile/epicgames-icon.svg"
              alt="game icon"
              width="27px"
              height="27px"
            />
            <p>Aki#24633588</p>
          </div>
          <div>
            <Image
              src="https://cyber-battles-dev.s3.amazonaws.com/images/player-profile/ps-icon.svg"
              alt="game icon"
              width="27px"
              height="27px"
            />
            <p>Aki14634758</p>
          </div>
        </div>

        {/* RATES AND RANKING */}
        <div className="rankings">
          <div className='rank'>
            <div className="rank-trophie">
              <Image
                src="https://cyber-battles-dev.s3.amazonaws.com/images/player-profile/rank-trophie.svg"
                alt="gold trophie"
                width="87"
                height="97"
              />
            </div>
            <div>
              <h3>Rank</h3>
              <h4>352</h4>
              <p>21,295 XP</p>
            </div>
          </div>
          <div>
            <h3>EARNINGS</h3>
            <h4 className='total-earnings'>
              <Image
                src="https://cyber-battles-dev.s3.amazonaws.com/images/generic/eth-icon.svg"
                alt="eth icon"
                width="10px"
                height="18px"
              />
              52,586.00</h4>
            <p>RANKED#1485</p>
          </div>
          <div>
            <h3>CAREER RECORD</h3>
            <h4>56W - 7L</h4>
            <p>89% WIN RATE</p>
          </div>
          <div>
            <h3>RECENT MATCHES</h3>
            <ul className="recent-matches">
              <li>
                <span className='won'>w</span>
              </li>
              <li>
                <span className='lost'>l</span>
              </li>
              <li>
                <span className='lost'>l</span>
              </li>
              <li>
                <span className='won'>w</span>
              </li>
              <li>
                <span className='won'>w</span>
              </li>
            </ul>
            <p>+25XP-15XP-15XP+25XP+25XP</p>
          </div>
        </div>

        {/* TROPHIE BOXES */}
        <div className="trophie-boxes">
          <div className='trophie-box elite'>
            <Image
              src="https://cyber-battles-dev.s3.amazonaws.com/images/player-profile/elite-trophie.svg"
              alt="trophie"
              width="37px"
              height="37px"
              className='trophie--icon'
            />
            <div>
              <h3>ELITE TROPHIES</h3>
              <p>0</p>
            </div>
          </div>
          <div className='trophie-box gold'>
            <Image
              src="https://cyber-battles-dev.s3.amazonaws.com/images/player-profile/gold-trophie.svg"
              alt="trophie"
              width="37px"
              height="37px"
              className='trophie--icon'
            />
            <div>
              <h3>ELITE TROPHIES</h3>
              <p>187</p>
            </div>
          </div>
          <div className='trophie-box silver'>

            <div className='trophie--icon'>
              <Image
                src="https://cyber-battles-dev.s3.amazonaws.com/images/player-profile/silver-trophie.svg"
                alt="trophie"
                width="37px"
                height="37px"
              />
            </div>

            <div>
              <h3>ELITE TROPHIES</h3>
              <p>74</p>
            </div>
          </div>
          <div className='trophie-box bronze'>
            <Image
              src="https://cyber-battles-dev.s3.amazonaws.com/images/player-profile/bronze-trophie.svg"
              alt="trophie"
              width="37px"
              height="37px"
              className='trophie--icon'
            />
            <div>
              <h3>ELITE TROPHIES</h3>
              <p>85</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayerInfoCardBox