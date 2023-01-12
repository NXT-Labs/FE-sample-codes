import axios from "axios"
import { API_URL } from "../../../infrastructure/services/APIConfig"
import { fypPayload } from "../model/authModel"

export const forgotYourPassword = (data: fypPayload) => {
  return axios.post(`${API_URL}/users/forgotPassword`, data)
    .then((response) => {
      return response
    })
    .catch((err) => {
      return err
    })
}