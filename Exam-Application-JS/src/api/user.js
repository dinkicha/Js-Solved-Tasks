import { clearUserData, setUserData } from "../utils.js";
import { get, post } from "./api.js";

export async function loginUser(email, password) {
  let {
    _id,
    email: userEmail,
    accessToken,
  } = await post("/users/login", { email, password });

  setUserData({
    _id,
    email: userEmail,
    accessToken,
  });
}

export async function registerUser(email, password) {
  let {
    _id,
    email: userEmail,
    accessToken,
  } = await post("/users/register", { email, password });

  setUserData({
    _id,
    email: userEmail,
    accessToken,
  });
}

export async function logoutUser() {
  get("/users/logout");
  clearUserData();
}
