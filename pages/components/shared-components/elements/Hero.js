import Image from 'next/image'

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero--content">
        <h1>COMPETE FOR CRYPTO.</h1>
        <h2>BEGIN YOUR BATTLE.</h2>
        <p>Play with over 100k gamers in leagues, tournaments and ladders</p>
        <button className="btn-solid">Join Cyberbattles</button>

        <div className="highlighted--features">
          <div className="icon-box">
            <Image
              src="https://cyber-battles-dev.s3.amazonaws.com/images/homepage/skill-progression.png"
              alt="skill progression icon"
              width={"48px"}
              height={"48px"}
              layout='fixed'
            />
            <span>SKILL PROGRESSION</span>
          </div>
          <div className="icon-box">
            <Image
              src="https://cyber-battles-dev.s3.amazonaws.com/images/homepage/matchmaking.png"
              alt="match making icon"
              width={"48px"}
              height={"48px"}
              layout='fixed'
            />
            <span>MATCHMAKING</span>
          </div>
          <div className="icon-box">
            <Image
              src="https://cyber-battles-dev.s3.amazonaws.com/images/homepage/tournaments.png"
              alt="tournaments"
              width={"48px"}
              height={"48px"}
              layout='fixed'
            />
            <span>TOURNAMENTS</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
