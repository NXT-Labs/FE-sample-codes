import Image from 'next/image';
import Router from 'next/router';

function ProfileMenu(props) {

  return (
    <div className="profile-menu">
      {/* Current user info */}
      <div className="current-user">
        <button className="toggle-close"
          onClick={() => props?.profileState?.setShowProfileMenu ? props?.profileState?.setShowProfileMenu(false) : ''}
        >
          <Image
            src='/images/generic/close-x.svg'
            width='8px'
            height='8px'
            alt='close'
            layout='fixed'
          />
        </button>
        <div className='current-user-info'>
          <p>Welcome,</p>
          <h3>{props.userState?.user?.userName || ''}</h3>
        </div>
        <Image
          src={props?.userState?.user?.avatar || '/images/generic/user-avatar.svg'}
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
        {
          props.profileTabs?.map((tab, idx) => {
            return (
              <li
                onClick={() => {
                  props?.profileState?.setShowProfileMenu ? props?.profileState?.setShowProfileMenu(false) : ''
                  Router.push(tab.route)
                }}
                key={idx}
              >
                <a>
                  {tab.label}
                </a>
              </li>
            )
          })
        }
        {/* signout button */}
        <button
          className="signout"
          onClick={async () => {
            await props.userSignout();
            props?.userState?.setUser({
              user: false
            });
            props?.profileState?.setShowProfileMenu ? props?.profileState?.setShowProfileMenu(false) : '';
          }}
        >Sign Out</button>
      </ul>
    </div>
  )
}

export default ProfileMenu