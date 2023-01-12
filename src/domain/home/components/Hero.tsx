import Image from 'next/image'
import { PrimaryButton } from '../../../ui/buttons/buttons'

function Hero() {
  return (
    <div className="hero-section">
      <div className="hero--content">
        <h1>COMPETE FOR CRYPTO.</h1>
        <h2>BEGIN YOUR BATTLE.</h2>
        <p>Play with over 100k gamers in leagues, tournaments and ladders</p>
        <PrimaryButton className="btn-solid" value="Join Cyberbattles" />

        <div className="highlighted--features">
          <div className="icon-box">
            <Image
              src="/images/home-elements/skill-progression.png"
              alt="skill progression icon"
              width={"48px"}
              height={"48px"}
              layout='fixed'
            />
            <span>SKILL PROGRESSION</span>
          </div>
          <div className="icon-box">
            <Image
              src="/images/home-elements/matchmaking.png"
              alt="match making icon"
              width={"48px"}
              height={"48px"}
              layout='fixed'
            />
            <span>MATCHMAKING</span>
          </div>
          <div className="icon-box">
            <Image
              src="/images/home-elements/tournaments.png"
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