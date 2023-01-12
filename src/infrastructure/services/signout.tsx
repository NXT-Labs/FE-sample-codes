import axios from "axios"
import Router from "next/router"
import { API_URL } from "./APIConfig"
import { userLogout } from "./authServices"

export const userSignout = async (callBack) => {
  return axios.post(`${API_URL}/users/session/logout`, {}, { withCredentials: true })
    .then((response) => {
      if (callBack) {
        callBack()
      }
      userLogout()
      Router.push('/')
      return response
    })
    .catch((err) => {
      return err
    })
}

export const userSignoutWithoutSession = async (callBack) => {
  userLogout()
  if (callBack) {
    callBack()
  }
  return Router.push('/Signin')
}