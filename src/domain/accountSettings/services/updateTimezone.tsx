import axios from "axios"
import { API_URL } from "../../../infrastructure/services/APIConfig"

export const updateTimezone = (data) => {
  return axios.post(`${API_URL}/users/updateTimezone`, data)
    .then((response) => {
      return response
    })
    .catch((err) => {
      return err
    })
}