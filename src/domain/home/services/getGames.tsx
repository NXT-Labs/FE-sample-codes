import axios from "axios"
import { API_URL } from "../../../infrastructure/services/APIConfig"

export const getGames = async (offset, limit) => {
  return axios.get(`${API_URL}/games/get/all`,
    {
      params: {
        offset, limit
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