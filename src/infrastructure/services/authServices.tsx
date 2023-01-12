export const setToken = (token: string) => {
  localStorage.setItem("jwtToken", token)
}

export const getToken = () => {
  return localStorage.getItem("jwtToken")
}

export const clearToken = () => {
  localStorage.removeItem("jwtToken")
  removeRememberMeRefreshTime()
  return localStorage.removeItem("userDetails")
}

export const userLogout = () => {
  return clearToken()
}

export const isLoggedIn = () => {
  if (localStorage.getItem("jwtToken")) {
    return true
  }
  return false
}

export const setUserToLocalStorage = (user) => {
  localStorage.setItem("userDetails", JSON.stringify(user))
}

export const rememberMeRefreshTime = (time) => {
  localStorage.setItem("rememberMeRefreshTime", time)
}

export const getRememberMeRefreshTime = () => {
  return localStorage.getItem("rememberMeRefreshTime")
}

export const removeRememberMeRefreshTime = () => {
  return localStorage.removeItem("rememberMeRefreshTime")
}

export const getUserFromLocalStorage = () => {
  // use JSON.parse(data)
  return localStorage.getItem("userDetails")
}