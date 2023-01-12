import axios from "axios"
import { API_URL } from "./APIConfig"

export const verifyEmail = async (userId, verificationToken) => {
  return axios.post(`${API_URL}/users/verifyUser/${userId}/${verificationToken}`)
    .then((response) => {
      return response
    })
    .catch((err) => {
      return err
    })
}