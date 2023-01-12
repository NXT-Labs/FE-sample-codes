import { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import { AppContext } from '../src/infrastructure/context/appContext'
import { userDetail } from '../src/infrastructure/model/userModel'
import { getRememberMeRefreshTime, getToken, getUserFromLocalStorage, isLoggedIn, rememberMeRefreshTime, setToken, setUserToLocalStorage } from '../src/infrastructure/services/authServices'
import { setRequestInterceptor, setResponseInterceptor } from '../src/infrastructure/services/interceptors'
import { refreshToken } from '../src/infrastructure/services/refreshToken'
import { userSignout, userSignoutWithoutSession } from '../src/infrastructure/services/signout'
import PageLoader from '../src/ui/PageLoader/PageLoader'
import '../styles/main.scss'
import moment from 'moment';

function App({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<userDetail>({
    jwtToken: '',
    user: false
  })
  const [isLoading, setIsLoading] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState<boolean>(false);
  const [rendered, setRendered] = useState(false)
  // on first rendering
  useEffect(() => {
    if (isLoggedIn()) {
      // if logged in than set user global states from local storage
      const jwtToken = getToken();
      let user = getUserFromLocalStorage();
      if (user) {
        user = JSON.parse(user)
        setUser({
          jwtToken,
          user
        })
      }
    }
    updateInterceptors();
  }, []) // passing [] to render it only on mount.

  // when user state is updated
  useEffect(() => {
    if (user) {
      if (user?.jwtToken) {
        setToken(user?.jwtToken)
      }
      if (user?.user) {
        setUserToLocalStorage(user?.user)
        if (!!user?.user['rememberMe'] && !getRememberMeRefreshTime()) {
          rememberMeRefreshTime(new Date(moment().add(89, 'd')['_d']).toLocaleDateString())
        }
      }
      if (user?.jwtToken && !rendered) {
        verifyUser()
        setRendered(true)
      }
      if (!user?.user) {
        setRendered(false)
      }
    } else if (!user?.user) {
      setRendered(false)
    }
  }, [user])


  const updateInterceptors = () => {

    const requestInterceptor = setRequestInterceptor(() => {
      setIsLoading(true);
    });

    const responseInterceptor = setResponseInterceptor(data => {
      setIsLoading(false);
      if (data?.data?.status?.code === 401 && isLoggedIn()) {
        userSignout(
          setUser({
            user: false
          })
        )
      }
      return data;
    }, error => {
      setIsLoading(false);
      if (error.response && error.response.status == 401) {
        userSignout(
          setUser({
            user: false
          })
        )
      }
      return Promise.reject(error)
    });
    return { requestInterceptor, responseInterceptor };
  };


  const verifyUser = () => {
    if (getRememberMeRefreshTime() == new Date().toLocaleDateString() || !getRememberMeRefreshTime()) {
      refreshToken()
        .then((res) => {
          if (res.data?.data?.jwtToken) {
            setToken(res.data?.data?.jwtToken)
            // call refreshToken every 5 minutes to renew the authentication token.
            if (!getRememberMeRefreshTime()) {
              setTimeout(verifyUser, 15 * 60 * 1000)
            }
          }
        })
        .catch((err) => {
          console.log("debug err : ", err)
        })
    }
  }

  return (
    <AppContext.Provider
      value={{
        userState: {
          ...user, setUser
        },
        isLoading,
        profileState: {
          showProfileMenu, setShowProfileMenu
        },
        userSignout,
        userSignoutWithoutSession
      }}
    >
      {
        isLoading ?
          <PageLoader />
          :
          ''
      }
      <Component {...pageProps} />
    </AppContext.Provider>
  )

}

export default App
