import axios from "axios"
import { API_URL } from "./APIConfig"

export const getTimezones = () => {
  return axios.get(`${API_URL}/resources/get/timezones`)
    .then((response) => {
      return response.data.data.timezones.map((tz) => {
        return {
          value: tz.id,
          label: tz.timezone
        }
      })
    })
    .catch((err) => {
      return err
    })
}