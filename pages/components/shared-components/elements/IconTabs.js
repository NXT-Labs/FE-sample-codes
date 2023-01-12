import Image from 'next/image';
const IconTabs = () => {
  return (
    <>
      <div className="icon-tabs">
        <ul className="icon-tabs-list">
          <li className="icon-tabs-item">
            <Image
            src="https://cyber-battles-dev.s3.amazonaws.com/images/generic/games-icon.svg"
            alt="tab icon"
            width="30px"
            height="17px" 
            className='tab--icon'
            />
            Game
          </li>
          <li className="icon-tabs-item">
            <Image
            src="https://cyber-battles-dev.s3.amazonaws.com/images/generic/players-icon.svg"
            alt="tab icon"
            width="30px"
            height="17px" 
            className='tab--icon'
            />
            TEAMS
          </li>
          <li className="icon-tabs-item">
            <Image
            src="https://cyber-battles-dev.s3.amazonaws.com/images/generic/trophie-icon.svg"
            alt="tab icon"
            width="30px"
            height="17px" 
            className='tab--icon'
            />
            Acheivments
          </li>
        </ul>
      </div>

      <div className="icon-tab-content">
      </div>
    </>

  )
}
export default IconTabs;
