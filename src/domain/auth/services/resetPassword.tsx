import axios from "axios"
import { API_URL } from "../../../infrastructure/services/APIConfig"
import { resetPayload } from "../model/authModel"

export const resetPassword = (data: resetPayload, userId: number | string, verificationToken: string | number) => {
  return axios.post(`${API_URL}/users/passwordCreate/${userId}/${verificationToken}`, data)
    .then((response) => {
      return response
    })
    .catch((err) => {
      return err
    })
}