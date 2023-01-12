import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../src/infrastructure/context/appContext';
import { isLoggedIn } from '../../src/infrastructure/services/authServices';
import Router from 'next/router'
import FYP from '../../src/domain/auth/FYP';
import { errorType, successType } from '../../src/infrastructure/services/APIConfig';
import { checkNested } from '../../src/infrastructure/services/checkNested';

function FOP() {
  const app = useContext(AppContext)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (app.userState.user || isLoggedIn()) {
      Router.push('/')
    } else {
      setIsLoaded(true)
    }
  }, []);

  return (
    <>
      {
        isLoaded ?
          <FYP
            successMsg="Reset link has been sent on the email."
            AccountDoesNotExistMsg="No user has been registered against this email/username."
            signinRoute="/Signin"
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

export default FOP