import axios from "axios"
import { API_URL } from "../../../infrastructure/services/APIConfig"

export const updateInfo = (data) => {
  return axios.post(`${API_URL}/users/updateInfo`, data, { withCredentials: true })
    .then((response) => {
      return response
    })
    .catch((err) => {
      return err
    })
}