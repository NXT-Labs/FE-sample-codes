import axios from "axios"
import { API_URL } from "../../../infrastructure/services/APIConfig"

export const updatePassword = (data) => {
  return axios.post(`${API_URL}/users/updatePassword`, data, { withCredentials: true })
    .then((response) => {
      return response
    })
    .catch((err) => {
      return err
    })
}