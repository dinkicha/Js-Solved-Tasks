import { clearUserData, setUserData } from "../utils.js";
import { get, post } from "./api.js";

export async function loginUser(email, password) {
  let {
    _id,
    email: userEmail,
    accessToken,
    username: firstUsername
  } = await post("/users/login", { email, password });

  setUserData({
    _id,
    email: userEmail,
    accessToken,
    username: firstUsername
  });
}

export async function registerUser(email, username, password) {
  let {
    _id,
    email: userEmail,
    accessToken,
    username: firstUsername
  } = await post("/users/register", { email, username , password });

  setUserData({
    username: firstUsername,
    _id,
    email: userEmail,
    accessToken,
  });
}

export async function logoutUser() {
  get("/users/logout");
  clearUserData();
}
