import React, { useContext, useEffect, useState } from 'react'
import PlayerProfile from '../../src/domain/playerProfile/PlayerProfile';
import { profileTabs } from '../../src/infrastructure/constants/profileTabs';
import { AppContext } from '../../src/infrastructure/context/appContext';
import { errorType, successType } from '../../src/infrastructure/services/APIConfig';
import { useRouter } from 'next/router'
import { checkNested } from '../../src/infrastructure/services/checkNested';

function Profile() {
  const app = useContext(AppContext)
  const [isLoaded, setIsLoaded] = useState(false)
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    if (id) {
      setIsLoaded(true)
    }
  }, [id]);

  return (
    <>
      {
        isLoaded ?
          <>
            <PlayerProfile
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

export default Profile