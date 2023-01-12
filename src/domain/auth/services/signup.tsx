import axios from "axios"
import { API_URL } from "../../../infrastructure/services/APIConfig"
import { signupPayload } from "../model/authModel"

export const userSignup = (data: signupPayload) => {
  return axios.post(`${API_URL}/users/register`, data)
    .then((response) => {
      return response
    })
    .catch((err) => {
      return err
    })
}