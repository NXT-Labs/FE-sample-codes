import axios from "axios"
import { API_URL } from "../../../infrastructure/services/APIConfig"

export const updateGameIds = (data) => {
  return axios.post(`${API_URL}/users/updateGameIds`, data)
    .then((response) => {
      return response
    })
    .catch((err) => {
      return err
    })
}