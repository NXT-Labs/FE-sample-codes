import Image from 'next/image'
const TopPlayerCard = () => {
  return (
    <>
      <div className="top-player home-section">
        <h3 className="featured-heading">
          <Image
            src="https://cyber-battles-dev.s3.amazonaws.com/images/generic/players-icon.svg"
            alt="players icon"
            width={'28px'}
            height={'28px'}
          />
          PLAYERS OF THE WEEK
        </h3>
        <p className="sub-title">Placements reset every Sunday at 12 AM EST</p>
        <div className="top-player--grid">
          <div className="top-player--card">
            <div className="player--ranking">
              <div className="ranking-img">
                <Image
                  src="https://cyber-battles-dev.s3.amazonaws.com/images/generic/top-dev-game.png"
                  alt="top player"
                  width={'124px'}
                  height={'124px'}
                />
              </div>

              <p className="rank">2</p>
            </div>
            <h4>Aki</h4>
            <p>2225 XP earned 08/01 - 08/08</p>
            <div className="earned--credits">
              <Image
                src="https://cyber-battles-dev.s3.amazonaws.com/images/generic/credit-box-icon.svg"
                alt="credit icon"
                width={'23px'}
                height={'20px'}
              />
              <span>+20 credits</span>
            </div>
            <button className="btn-solid">VIEW PROFILE</button>
          </div>

          <div className="top-player--card">
            <div className="player--ranking">
              <div className="ranking-img">
                <Image
                  src="https://cyber-battles-dev.s3.amazonaws.com/images/generic/top-dev-game.png"
                  alt="top player"
                  width={'124px'}
                  height={'124px'}
                />
              </div>
              <p className="rank">1</p>
            </div>
            <h4>Raw</h4>
            <p>2225 XP earned 08/01 - 08/08</p>
            <div className="earned--credits">
              <Image
                src="https://cyber-battles-dev.s3.amazonaws.com/images/generic/credit-box-icon.svg"
                alt="credit icon"
                width={'23px'}
                height={'20px'}
              />
              <span>+20 credits</span>
            </div>
            <button className="btn-solid">VIEW PROFILE</button>
          </div>

          <div className="top-player--card">
            <div className="player--ranking">
              <div className="ranking-img">
                <Image
                  src="https://cyber-battles-dev.s3.amazonaws.com/images/generic/top-dev-game.png"
                  alt="top player"
                  width={'124px'}
                  height={'124px'}
                />
              </div>
              <p className="rank">3</p>
            </div>
            <h4>Dep</h4>
            <p>2225 XP earned 08/01 - 08/08</p>
            <div className="earned--credits">
              <Image
                src="https://cyber-battles-dev.s3.amazonaws.com/images/generic/credit-box-icon.svg"
                alt="credit icon"
                width={'23px'}
                height={'20px'}
              />
              <span>+20 credits</span>
            </div>
            <button className="btn-solid">VIEW PROFILE</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default TopPlayerCard
