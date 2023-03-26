export function getUserData() {
  return JSON.parse(localStorage.getItem("userData"));
}

export function setUserData(userData) {
  localStorage.setItem("userData", JSON.stringify(userData));
}

export function clearUserData() {
  localStorage.removeItem("userData");
}
