import React, { useState } from 'react'
import Navbar from '../../ui/navbar/Navbar'
import ProfileMenu from '../../ui/profileMenu/ProfileMenu'
import AccountBanner from './components/AccountBanner'
import AccountProfileTabs from './components/AccountProfileTabs'
import ProfileSummaryPane from './components/ProfileSummaryPane'

function AccountProfile(props) {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <>
      <Navbar
        profileState={props.app.profileState}
        signInRoute={props.app.signInRoute}
        signUpRoute={props.app.signUpRoute}
        userState={props.app.userState}
      />
      {
        props.app?.profileState?.showProfileMenu ?
          <ProfileMenu
            profileState={props.app.profileState}
            userState={props.app.userState}
            profileTabs={props.profileTabs}
            userSignout={props.app.userSignout}
          />
          :
          ''
      }
      <div className="account-profile-template">
        {/* main row */}
        <div className="acc--row">
          {/* col 1 in the main row */}
          <div className="acc--col-1">
            <ProfileSummaryPane
              userState={props.app.userState}
              successType={props.successType}
              errorType={props.errorType}
              checkNested={props.checkNested}
            />
          </div>

          {/* col 2 in the main row */}
          <div className="acc--col-2">
            {/* inner row inside col 2 */}
            <div className="acc--innerRow">
              {/* col 1 inner row */}
              <div className="acc--innerCol-1">
                <AccountBanner />
              </div>
              {/* col 2 inner row */}
              <div className="acc--innerCol-2">
                <AccountProfileTabs
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AccountProfile