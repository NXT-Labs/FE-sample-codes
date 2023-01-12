import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { AppContext } from '../../src/infrastructure/context/appContext';
import { isLoggedIn } from '../../src/infrastructure/services/authServices';
import Router from 'next/router'
import ResetCredentials from '../../src/domain/auth/ResetCredentials';
import { errorType, successType } from '../../src/infrastructure/services/APIConfig';
import { checkNested } from '../../src/infrastructure/services/checkNested';

function ResetPassword() {
  const app = useContext(AppContext)
  const [isLoaded, setIsLoaded] = useState(false)
  const router = useRouter()
  const [params, setParams] = useState({})
  const slug = (router.query.slug as string[]) || []

  useEffect(() => {
    if (app.userState.user || isLoggedIn()) {
      Router.push('/')
    } else {
      if (slug.length) {
        setIsLoaded(true)
        setParams({
          userId: slug[0],
          resetToken: slug[1]
        })
      }
    }
  }, [slug]);

  return (
    <>
      {
        isLoaded ?
          <ResetCredentials
            resetParams={params}
            resetRoute="/"
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

export default ResetPassword