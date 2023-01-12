import React, { useContext, useEffect, useState } from 'react'
import Home from '../src/domain/home/Home'
import { profileTabs } from '../src/infrastructure/constants/profileTabs'
import { AppContext } from '../src/infrastructure/context/appContext'
import { errorType, successType } from '../src/infrastructure/services/APIConfig'
import { checkNested } from '../src/infrastructure/services/checkNested'

export default function Cyber() {
  const app = useContext(AppContext)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  });

  return (
    <>
      {
        isLoaded ?
          <>
            <Home
              app={app}
              signInRoute="/Signin"
              signUpRoute="/Signup"
              profileTabs={profileTabs}
              successType={successType}
              errorType={errorType}
              checkNested={checkNested}
            />
          </>
          :
          ''
      }
    </>
  )
}
