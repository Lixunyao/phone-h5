import Cookies from 'js-cookie'

const h5kenKey = 'Admin-h5-Token'
export function getToken() {
  return Cookies.get(h5kenKey)
}

export function setToken(token) {
  return Cookies.set(h5kenKey, token)
}

export function removeToken() {
  return Cookies.remove(h5kenKey)
}
// export function removeOrtherToken() {
//   Cookies.remove(oPTokenKey)
//   Cookies.remove(mirTokenKey)
//   Cookies.remove(psTokenKey)
//   Cookies.remove(spvTokenKey)
//   Cookies.remove(AckenKey)
// }