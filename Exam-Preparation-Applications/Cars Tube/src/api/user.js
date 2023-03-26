import { clearUserData, setUserData } from "../utils.js";
import { get, post } from "./api.js";

export async function loginUser(username, password) {
  let {
    _id,
    username: pusername,
    accessToken,
  } = await post("/users/login", { username, password });

  setUserData({
    _id,
    username: pusername,
    accessToken,
  });
}

export async function registerUser(username, password) {
  let {
    _id,
    username: pusername,
    accessToken,
  } = await post("/users/register", { username, password });

  setUserData({
    _id,
    username: pusername,
    accessToken,
  });
}

export async function logoutUser() {
  get("/users/logout");
  clearUserData();
}
