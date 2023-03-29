import { logoutUser } from "./api/user.js";
import { html, render, page } from "./lib.js";
import { getUserData } from "./utils.js";

let header = document.querySelector("header");

let navTemplate = (user, logout) => html`
  <nav>
    <img src="./images/headphones.png" />
    <a href="/">Home</a>
    <ul>
    <li><a href="/catalog">Catalog</a></li>
    <li><a href="/search">Search</a></li>
      ${user
        ? html` <li><a href="/create">Create Album</a></li>
            <li>
              <a @click=${logout} href="javascript:void(0)">Logout</a>
            </li>`
        : html`
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Register</a></li>`}
    </ul>
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
