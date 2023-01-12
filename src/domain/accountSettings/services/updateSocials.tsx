import axios from "axios"
import { API_URL } from "../../../infrastructure/services/APIConfig"

export const updateSocials = (data) => {
  return axios.post(`${API_URL}/users/updateSocials`, data)
    .then((response) => {
      return response
    })
    .catch((err) => {
      return err
    })
}