import Image from 'next/image';
import PrimaryTable from '../tables/PrimaryTable';
const MatchFinder = () =>{
  return(
    <section className="match-finder home-section">
       <h2 className="featured-heading">
        <Image src="https://cyber-battles-dev.s3.amazonaws.com/images/generic/magnifyglass-icon.svg" alt="magnify-glass icon"  width={'28px'} height={'28px'}/>
        MATCHFINDER
      </h2>
      <div className="matchfiner-filters">
        <p className='sub-title'>Head to head matches where you pick the game, rules and prize.</p>
        <div className="dropdown-filters">
            <select>
                <option>Games</option>
                <option>Call of Duty</option>
                <option>DOTA 2</option>
            </select>

            <select>
                <option>Platform</option>
                <option>Platform abc</option>
                <option>Platform xyz</option>
            </select>
        </div>
      </div>
      <h4 className="swipe-indicator">
        <Image
          src="https://cyber-battles-dev.s3.amazonaws.com/images/generic/swipe-left.svg"
          width="17px"
          height="12px"
          alt='slide icon'
        />
        Swipe Left to right for more details
        <Image
          src="https://cyber-battles-dev.s3.amazonaws.com/images/generic/swipe-right.svg"
          width="17px"
          height="12px"
          alt='slide icon'
        />
      </h4>

      <PrimaryTable/>

      <button className="btn-solid wide">Load More</button>
    </section>
  )
}

export default MatchFinder;