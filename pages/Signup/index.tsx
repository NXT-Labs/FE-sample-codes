import Router from 'next/router';
import React, { useContext, useEffect, useState } from 'react'
import Signup from '../../src/domain/auth/Signup'
import { AppContext } from '../../src/infrastructure/context/appContext';
import { errorType, successType } from '../../src/infrastructure/services/APIConfig';
import { isLoggedIn } from '../../src/infrastructure/services/authServices';
import { checkNested } from '../../src/infrastructure/services/checkNested';
import { getTimezones } from '../../src/infrastructure/services/getTimezones';

function SignupComp() {
  const app = useContext(AppContext)
  const [isLoaded, setIsLoaded] = useState(false)
  const [timezones, setTimezones] = useState([])

  useEffect(() => {
    if (app.userState.user || isLoggedIn()) {
      Router.push('/')
    } else {
      setIsLoaded(true)
      fetchTimezones()
    }
  }, [app.userState.user]);

  const fetchTimezones = async () => {
    const tz = await getTimezones()
    setTimezones(tz)
  }

  return (
    <>
      {
        isLoaded ?
          <Signup
            redirectTo='/Signin'
            successType={successType}
            errorType={errorType}
            timezones={timezones}
            checkNested={checkNested}
            setUserState={app.userState.setUser}
          />
          :
          ''
      }
    </>
  )
}

export default SignupComp