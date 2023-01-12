import Image from 'next/image';

function CustomDropdown() {
  return (
    <div className="custom-dropdown">
      <div className="dropdown-title">
        <p>Games</p>
        <Image
          src="https://cyber-battles-dev.s3.amazonaws.com/images/generic/dropdown-icon-down.svg"
          alt="drop down"
          width="15px"
          height="7px"
        />
      </div>
      <ul className="dropdown-options opened">
        <li className='dropdown-item selected-item'>Game</li>
        <li className='dropdown-item'>Call of Duty</li>
        <li className='dropdown-item'>Dota 2</li>
        <li className='dropdown-item'>Valorant</li>
        <li className='dropdown-item'>Apex</li>
        <li className='dropdown-item'>Overwatch</li>
      </ul>
    </div>
  )
}

export default CustomDropdown;

