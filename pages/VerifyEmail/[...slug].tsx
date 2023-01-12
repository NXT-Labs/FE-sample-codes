import Router, { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../src/infrastructure/context/appContext';
import { successType } from '../../src/infrastructure/services/APIConfig';
import { checkNested } from '../../src/infrastructure/services/checkNested';
import { verifyEmail } from '../../src/infrastructure/services/verifyEmail';

function VerifyEmail() {
  const app = useContext(AppContext)
  const router = useRouter()
  const slug = (router.query.slug as string[]) || []

  useEffect(() => {
    if (slug.length) {
      verify(slug[0], slug[1])
    }
  }, [slug]);

  useEffect(() => {
    if (app.userState.user.emailVerified) {
      Router.push('/')
    }
  }, [app.userState.user])


  const verify = async (userId, verificationToken) => {
    const verifiedUser = await verifyEmail(userId, verificationToken)
    console.log("🚀 ~ file: [...slug].tsx ~ line 17 ~ verify ~ verifiedUser", verifiedUser, app.userState)
    if (checkNested(verifiedUser, ...successType)) {
      // verify if update user state props is passed
      if (app.userState?.setUser) {
        // if yes : set local user state for entire app
        app.userState.setUser({
          user: {
            ...app.userState?.user,
            emailVerified: verifiedUser?.data?.data?.userVerified
          }
        })
      } else {
        alert("User is logged in but update state function is not passed as props.")
      }
    }
  }

  return (
    <>

    </>
  )
}

export default VerifyEmail