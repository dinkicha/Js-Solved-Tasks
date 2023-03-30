import { logoutUser } from "./api/user.js";
import { html, render, page } from "./lib.js";
import { getUserData } from "./utils.js";

let header = document.getElementById("site-header");

let navTemplate = (user, logout) => html` <nav class="navbar">
  <section class="navbar-dashboard">
    <a href="/dashboard">Dashboard</a>
    ${user
      ? html` <div id="user">
          <span>Welcome, ${user.email}</span>
          <a class="button" href="/myBooks">My Books</a>
          <a class="button" href="/create">Add Book</a>
          <a @click=${logout} class="button  href="javascript:void(0)">Logout</a>
        </div>`
      : html` <div id="guest">
          <a class="button" href="/login">Login</a>
          <a class="button" href="/register">Register</a>
        </div>`}
  </section>
</nav>`;

export function showNav() {
  let user = getUserData();
  render(navTemplate(user, logout), header);
}

function logout() {
  logoutUser();
  showNav();
  page.redirect("/dashboard");
}
