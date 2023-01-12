import Image from 'next/image';

const MobileMenu = () => {
  return (
    <>
      <div className="mobile-menu">
        {/* Current user info */}
        <div className="current-user">
          <button className="toggle-close">
            <Image
              src='https://cyber-battles-dev.s3.amazonaws.com/images/generic/menu-close-btn.svg'
              width='20px'
              height='20px'
              alt='close'
              layout='fixed'
            />
          </button>
        </div>
        {/* profile menu list */}
        <ul className="mobile-menu-list">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Tournaments</a>
          </li>
          
          <li>
            <a href="#">Matchfinder</a>
          </li>
          <li>
            <a href="#">More</a>
          </li>
        </ul>
        {/* login/logout buttons */}
        <div className="account-buttons">
            <button className="btn-bordered">Sign In</button>
            <button className="btn-solid">join free</button>
        </div>
      </div>
    </>
  )
}

export default MobileMenu;