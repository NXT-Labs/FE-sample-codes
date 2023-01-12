import React, { useContext, useEffect, useState } from 'react'
import Signin from '../../src/domain/auth/Signin'
import { AppContext } from '../../src/infrastructure/context/appContext'
import Router from 'next/router'
import { isLoggedIn } from '../../src/infrastructure/services/authServices'
import { errorType, successType } from '../../src/infrastructure/services/APIConfig'
import { checkNested } from '../../src/infrastructure/services/checkNested'

function SigninComp() {
  const app = useContext(AppContext)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (app.userState.user || isLoggedIn()) {
      Router.push('/')
    } else {
      setIsLoaded(true)
    }
  });

  return (
    <>
      {
        isLoaded ?
          <Signin
            setUserState={app.userState.setUser}
            successType={successType}
            errorType={errorType}
            checkNested={checkNested}
          />
          :
          ''
      }
    </>
  )
}

export default SigninComp