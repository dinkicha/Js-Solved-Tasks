import { clearUserData, getUserData } from "../utils.js";

const host = "http://localhost:3030";

export async function request(method, url, data) {
  let object = {
    method: method,
    headers: {},
  };

  if (data != undefined) {
    object.headers["Content-Type"] = "application/json";
    object.body = JSON.stringify(data);
  }

  let user = getUserData();

  if (user != null) {
    object.headers["X-Authorization"] = user.accessToken;
  }

  try {
    let response = await fetch(host + url, object);

    if (response.status == 204) {
      return response;
    }

    let result = await response.json();

    if (response.ok == false) {
      if (response.status == 403) {
        clearUserData();
      }
      throw result;
    }

    return result;
  } catch (err) {
    alert(err.message);
    throw err;
  }
}

export const get = request.bind(null, "get");
export const post = request.bind(null, "post");
export const put = request.bind(null, "put");
export const del = request.bind(null, "delete");
