import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { PrimaryButton, PrimaryIconButton } from '../buttons/buttons';
import Router from 'next/router';

function Navbar(props) {
  const [tournamentDrop, setTournamentDrop] = useState(false);
  const [matchfinderDrop, setMatchfinderDrop] = useState(false);
  const [moreDrop, setMoreDrop] = useState(false);

  return (
    <div>
      <nav>
        <div className="nav-container">
          {/* left column with logo and hamburger */}
          <div className="nav-left-col">
            <div className="toggler">
              <PrimaryIconButton className="toggler-btn"
                image="https://cyber-battles-dev.s3.amazonaws.com/images/generic/hamburger.svg"
                imageDim={{
                  width: "24px",
                  height: "18px"
                }}
              />
            </div>
            <a
              onClick={() => Router.push('/')}
            >
              <Image
                src="https://cyber-battles-dev.s3.amazonaws.com/images/generic/logo.png"
                alt='logo'
                width="104px"
                height="32px"
              />
            </a>
          </div>

          {/* right col with search, navlinks, buttons, lang selector */}
          <div className='nav-right-col'>
            <div className="navigation">
              {/* Search Bar */}
              <div className="search-box">
                <div className='searchIcon'>
                  <Image
                    src="https://cyber-battles-dev.s3.amazonaws.com/images/generic/magnifyglass-icon.svg"
                    alt="search"
                    width="12px"
                    height="12px"
                    layout='fixed'
                  />
                </div>
                <input type="text" className="search--bar" placeholder='Search' />
              </div>

              {/* Search button for small devices */}
              <button className="search-button">
                <Image
                  src="https://cyber-battles-dev.s3.amazonaws.com/images/generic/mobile-search-button.svg"
                  alt="search"
                  width="23px"
                  height="23px"
                  layout='fixed'
                />
              </button>
              <div className='links'>
                {/* navigation links */}
                <ul className='links-list'>
                  <li>
                    <Link href="/">
                      <a>Shop</a>
                    </Link>
                  </li>
                  <li>
                    <button onClick={() => setTournamentDrop(!tournamentDrop)}
                      id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="dropdown-btn">Tournaments
                      <svg className="ml-1 w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </button>
                    {/* Dropdown menu */}
                    {tournamentDrop ? (
                      <div id="dropdownNavbar">
                        <ul className="dropdown-menu block" aria-labelledby="dropdownLargeButton">
                          <li>
                            <a href="#">Free Entry</a>
                          </li>
                        </ul>
                      </div>
                    ) : ('')}
                  </li>
                  <li>
                    <button onClick={() => setMatchfinderDrop(!matchfinderDrop)}
                      id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="dropdown-btn">Matchfinder
                      <svg className="ml-1 w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </button>
                    {/* Dropdown menu */}
                    {matchfinderDrop ? (
                      <div id="dropdownNavbar">
                        <ul className="dropdown-menu" aria-labelledby="dropdownLargeButton">
                          <li>
                            <a href="#">Cash Match</a>
                          </li>
                        </ul>
                      </div>
                    ) : ('')}
                  </li>
                  <li>
                    <button onClick={() => setMoreDrop(!moreDrop)}
                      id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="dropdown-btn">More
                      <svg className="ml-1 w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </button>
                    {/* Dropdown menu */}
                    {moreDrop ? (
                      <div id="dropdownNavbar">
                        <ul className="dropdown-menu" aria-labelledby="dropdownLargeButton">
                          <li>
                            <a href="#">Leader Board</a>
                          </li>
                          <li>
                            <a href="#">Help Center</a>
                          </li>
                        </ul>
                      </div>
                    ) : ('')}
                  </li>
                </ul>
                {/* language selector and login/signup buttons */}
                <ul className='account-links'>
                  <li>
                    <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="dropdown-btn lang-selector">
                      <Image src="https://cyber-battles-dev.s3.amazonaws.com/images/generic/lang-flag.svg" alt='flag' width="22px" height="14px" />EN
                      <svg className="ml-1 w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </button>
                    {/* Dropdown menu */}
                    <div id="dropdownNavbar">
                      <ul className="dropdown-menu" aria-labelledby="dropdownLargeButton">
                        <li>
                          <span className="flag">
                            <Image src="https://cyber-battles-dev.s3.amazonaws.com/images/generic/lang-flag.svg" alt='flag' width="22px" height="14px" />
                          </span>
                          EN
                        </li>
                        <li>
                          <span className="flag">
                            <Image src="https://cyber-battles-dev.s3.amazonaws.com/images/generic/lang-flag.svg" alt='flag' width="22px" height="14px" />
                          </span>
                          FR
                        </li>
                      </ul>
                    </div>
                  </li>
                  {/* for guest users */}
                  <div className={`guest ${props?.userState?.user ? 'hidden' : ''}`}>
                    <li>
                      <PrimaryButton
                        className="btn-bordered"
                        onClick={() => Router.push(props.signInRoute || '/Signin')}
                        value="Sign In"
                      />
                    </li>
                    <li>
                      <PrimaryButton
                        className="btn-solid"
                        value="join free"
                        onClick={() => Router.push(props.signUpRoute || '/Signup')}
                      />
                    </li>
                  </div>
                  {/* for logged in users */}
                  <div className={`member ${props?.userState?.user ? '' : 'hidden'}`}>
                    <li>
                      <button className="notification-bell">
                        <Image
                          src="/images/generic/bell-icon.svg"
                          alt='bell icon'
                          width='20px'
                          height='20px'
                        />
                        <span className="noti-dot"></span>
                      </button>
                    </li>
                    <li>
                      <button className={`user-profile`}
                        onClick={() => props?.profileState?.setShowProfileMenu ? props?.profileState?.setShowProfileMenu(true) : ''}
                      >
                        <Image
                          src={props?.userState?.user?.avatar || '/images/generic/user-avatar.svg'}
                          alt='avatar'
                          width='39px'
                          height='39px'
                          className='profile-avatar'
                          layout='fixed'
                        />
                      </button>
                    </li>
                  </div>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav >
      {
        props?.userState?.user && !props?.userState?.user?.emailVerified ?
          <p className="warning_msg_fixed">Your account is not verified yet, please check your registered email to verify it. </p>
          :
          ''
      }
    </div >
  );
}

export default Navbar