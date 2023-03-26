import { logoutUser } from "./api/user.js";
import { html, render, page } from "./lib.js";
import { getUserData } from "./utils.js";

let header = document.querySelector("header");

let navTemplate = (user, logout) => html` <nav>
  <section class="logo">
    <img src="./images/logo.png" alt="logo" />
  </section>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/dashboard">Dashboard</a></li>
    ${user
      ? html` <li><a href="/create">Create Postcard</a></li>
          <li @click=${logout}><a href="javascript:void(0)">Logout</a></li>`
      : html`<li><a href="/login">Login</a></li>
          <li><a href="/register">Register</a></li>`}
  </ul>
</nav>`;

export function showNav() {
  let user = getUserData();
  render(navTemplate(user, logout), header);
}


function logout() {
    logoutUser();
    showNav();
    page.redirect('/');
}