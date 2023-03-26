export function getUserData() {
  return JSON.parse(localStorage.getItem("userData"));
}

export function setUserData(userData) {
  localStorage.setItem("userData", JSON.stringify(userData));
}

export function clearUserData() {
  localStorage.removeItem("userData");
}

export function createSubmitHadler(callback) {
  return function(event) {
    event.preventDefault();
    let form  = new FormData(event.target);
    let data = Object.fromEntries(form.entries());
    
    callback(data);
  }
}