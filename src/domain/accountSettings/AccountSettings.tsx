import React, { useState } from 'react'
import Navbar from '../../ui/navbar/Navbar'
import ProfileMenu from '../../ui/profileMenu/ProfileMenu'
import SimpleTabs from '../../ui/tabs/SimpleTabs'
import ConnectionSettings from './components/ConnectionSettings'
import PreferenceSettings from './components/PreferenceSettings'
import SettingsPageTitle from './components/SettingsPageTitle'

function AccountSettings(props) {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    {
      label: "Prefrences",
      onClick: () => setActiveTab(0)
    },
    {
      label: "Connections",
      onClick: () => setActiveTab(1)
    }
  ]

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
      <SettingsPageTitle />
      <div className="account-setting-template">
        <SimpleTabs
          setActiveTab={setActiveTab}
          tabs={tabs}
          activeTab={activeTab}
        />
        <div className="simple-tab-content">
          {
            activeTab === 0 ?
              <PreferenceSettings
                successType={props.successType}
                errorType={props.errorType}
                userState={props.app.userState}
                timezones={props.timezones}
                checkNested={props.checkNested}
                userSignoutWithoutSession={props.app.userSignoutWithoutSession}
              />
              :
              activeTab === 1 ?
                <ConnectionSettings
                  successType={props.successType}
                  errorType={props.errorType}
                  userState={props.app.userState}
                  checkNested={props.checkNested}
                />
                :
                ''
          }
        </div>
      </div>
    </>
  )
}

export default AccountSettings