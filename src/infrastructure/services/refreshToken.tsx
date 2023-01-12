import axios from "axios"
import { API_URL } from "./APIConfig"

export const refreshToken = () => {
  return axios.post(`${API_URL}/users/session/refreshToken`, {}, { withCredentials: true })
    .then((response) => {
      return response
    })
    .catch((err) => {
      return err
    })
}