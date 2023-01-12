import Image from "next/image"

const GameCard = () =>{
  return(
    <div className="game-card">
      <div className="game-slider-image">
        <Image 
          src="https://cyber-battles-dev.s3.amazonaws.com/images/homepage/gameCard-1.png" 
          alt="game card" 
          width={'192px'} 
          height={'254px'}
          layout="fixed"
        />
      </div>
      <div className="game--title">
        <h3>Call of Duty VANGUARD</h3>
      </div>
    </div>
  )
}

export default GameCard;