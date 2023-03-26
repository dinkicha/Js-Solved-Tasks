import { logoutUser } from "./api/user.js";
import { html, render, page } from "./lib.js";
import { getUserData } from "./utils.js";

let header = document.querySelector("header");

let navTemplate = (user, logout) => html` <h1><a href="/">Orphelp</a></h1>
  <nav>
    <a href="/">Dashboard</a>
    ${user
      ? html` <div id="user">
          <a href="/myPosts">My Posts</a>
          <a href="/create">Create Post</a>
          <a @click=${logout} href="/">Logout</a>
        </div>`
      : html` <div id="guest">
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </div>`}
  </nav>`;

export function showNav() {
  let user = getUserData();
  render(navTemplate(user, logout), header);
}

function logout() {
  logoutUser();
  showNav();
  page.redirect("/");
}
