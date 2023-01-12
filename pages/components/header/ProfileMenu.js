import Image from 'next/image';

const ProfileMenu = () => {
  return (

    <div className="profile-menu">
      {/* Current user info */}
      <div className="current-user">
        <button className="toggle-close">
          <Image
            src='https://cyber-battles-dev.s3.amazonaws.com/images/generic/close-x.svg'
            width='8px'
            height='8px'
            alt='close'
            layout='fixed'
          />
        </button>
        <div className='current-user-info'>
          <p>Welcome,</p>
          <h3>Moiz Muhammad</h3>
        </div>

        <Image
          src='https://cyber-battles-dev.s3.amazonaws.com/images/generic/user-avatar.svg'
          alt='avatar'
          width='39px'
          height='39px'
          className='profile-avatar'
          layout='fixed'
        />
      </div>
      {/* credit info */}
      <div className="credit-info">
        <div className="winning">
          <h4>$0.00</h4>
          <p>Winning Cash</p>
        </div>
        <div className="credits">
          <h4>0</h4>
          <p>Buy Credit</p>
        </div>
      </div>
      {/* profile menu list */}
      <ul className="profile-menu-list">
        <li>
          <a href="#">View Profile</a>
        </li>
        <li>
          <a href="#">My Matches</a>
        </li>
        <li>
          <a href="#">My Teams</a>
        </li>
        <li>
          <a href="#">Teams Invite</a>
        </li>
        <li>
          <a href="#">My Tickets</a>
        </li>
        <li>
          <a href="#">winning Cash withdraw</a>
        </li>
        <li>
          <a href="#">Purchased Items</a>
        </li>
        <li>
          <a href="#">Prize Claims</a>
        </li>
        <li>
          <a href="#">Account Settings</a>
        </li>
      </ul>
      {/* signout button */}
      <button className="signout">Sign Out</button>
    </div>
  )
}

export default ProfileMenu;