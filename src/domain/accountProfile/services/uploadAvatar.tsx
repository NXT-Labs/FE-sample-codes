import axios from "axios"
import { API_URL } from "../../../infrastructure/services/APIConfig"

export const uploadAvatar = (data) => {
  return axios.post(`${API_URL}/users/uploadAvatar`, data,
    {
      headers: {
        "Content-type": "multipart/form-data"
      }
    }
  )
    .then((response) => {
      return response
    })
    .catch((err) => {
      return err
    })
}