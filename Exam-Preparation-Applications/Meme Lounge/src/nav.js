import { logoutUser } from "./api/user.js";
import { html, render, page } from "./lib.js";
import { getUserData } from "./utils.js";

let header = document.querySelector("nav");

let navTemplate = (user, logout) => html`

<a href="/allMemes">All Memes</a>
 <!-- Logged users -->
<div class="user">
    ${
      user
        ? html`<div class="profile">
            <span>Welcome, ${user.email}</span>
            <a href="/profile">My Profile</a>
            <a @click=${logout} href="javascript:void(0)">Logout</a>
          </div>
          <a href="/create">Create Meme</a>`
        : html`<div class="guest">
            <div class="profile">
              <a href="/login">Login</a>
              <a href="/register">Register</a>
            </div>
            <a class="active" href="/">Home Page</a>
          </div>`
    }`;

export function showNav() {
  let user = getUserData();
  render(navTemplate(user, logout), header);
}

function logout() {
  logoutUser();
  showNav();
  page.redirect("/");
}
