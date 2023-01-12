import axios from "axios"
import { API_URL } from "../../../infrastructure/services/APIConfig"

export const updatePhone = (data) => {
  return axios.post(`${API_URL}/users/updatePhone`, data)
    .then((response) => {
      return response
    })
    .catch((err) => {
      return err
    })
}