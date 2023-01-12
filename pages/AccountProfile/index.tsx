import Router from 'next/router';
import React, { useContext, useEffect, useState } from 'react'
import AccountProfile from '../../src/domain/accountProfile/AccountProfile';
import { profileTabs } from '../../src/infrastructure/constants/profileTabs';
import { AppContext } from '../../src/infrastructure/context/appContext';
import { errorType, successType } from '../../src/infrastructure/services/APIConfig';
import { isLoggedIn } from '../../src/infrastructure/services/authServices';
import { checkNested } from '../../src/infrastructure/services/checkNested';
import { getTimezones } from '../../src/infrastructure/services/getTimezones';

function Account() {
  const app = useContext(AppContext)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (!app.userState.user && !isLoggedIn()) {
      Router.push('/')
    } else {
      setIsLoaded(true)
    }
  }, []);

  return (
    <>
      {
        isLoaded ?
          <>
            <AccountProfile
              app={app}
              signInRoute="/Signin"
              signUpRoute="/Signup"
              profileTabs={profileTabs}
              successType={successType}
              errorType={errorType}
              timezones={getTimezones}
              checkNested={checkNested}
            />
          </>
          :
          ''
      }
    </>
  )
}

export default Account