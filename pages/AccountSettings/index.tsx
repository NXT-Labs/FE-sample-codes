import Router from 'next/router';
import React, { useContext, useEffect, useState } from 'react'
import AccountSettings from '../../src/domain/accountSettings/AccountSettings'
import { profileTabs } from '../../src/infrastructure/constants/profileTabs';
import { AppContext } from '../../src/infrastructure/context/appContext';
import { errorType, successType } from '../../src/infrastructure/services/APIConfig';
import { isLoggedIn } from '../../src/infrastructure/services/authServices';
import { checkNested } from '../../src/infrastructure/services/checkNested';
import { getTimezones } from '../../src/infrastructure/services/getTimezones';

function Settings() {
  const app = useContext(AppContext)
  const [isLoaded, setIsLoaded] = useState(false)
  const [timezones, setTimezones] = useState([])

  useEffect(() => {
    if (!app.userState.user && !isLoggedIn()) {
      Router.push('/')
    } else {
      setIsLoaded(true)
      fetchTimezones()
    }
  }, []);

  const fetchTimezones = async () => {
    const tz = await getTimezones()
    setTimezones(tz)
  }

  return (
    <>
      {
        isLoaded ?
          <>
            <AccountSettings
              app={app}
              signInRoute="/Signin"
              signUpRoute="/Signup"
              profileTabs={profileTabs}
              successType={successType}
              errorType={errorType}
              timezones={timezones}
              checkNested={checkNested}
            />
          </>
          :
          ''
      }
    </>
  )
}

export default Settings