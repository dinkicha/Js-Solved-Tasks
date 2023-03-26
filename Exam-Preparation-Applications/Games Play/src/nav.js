import { logoutUser } from "./api/user.js";
import { html, render, page } from "./lib.js";
import { getUserData } from "./utils.js";

let header = document.querySelector("header");

let navTemplate = (user, logout) => html`
  <h1><a class="home" href="/">GamesPlay</a></h1>
  <nav>
    <a href="/dashboard">All games</a>
    ${user
      ? html` <div id="user">
          <a href="/create">Create Game</a>
          <a @click=${logout} href="javascript:void(0)">Logout</a>
        </div>`
      : html` <div id="guest">
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </div>`}
  </nav>
`;

export function showNav() {
  let user = getUserData();
  render(navTemplate(user, logout), header);
}

function logout() {
  logoutUser();
  showNav();
  page.redirect("/");
}
