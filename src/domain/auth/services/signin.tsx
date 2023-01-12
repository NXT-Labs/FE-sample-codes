import axios from "axios"
import { API_URL } from "../../../infrastructure/services/APIConfig"
import { signinPayload } from "../model/authModel"

export const userSignin = (data: signinPayload) => {
  return axios.post(`${API_URL}/users/session/login`, data, { withCredentials: true })
    .then((response) => {
      return response
    })
    .catch((err) => {
      return err
    })
}