import { logoutUser } from "./api/user.js";
import { html, render, page } from "./lib.js";
import { getUserData } from "./utils.js";

let header = document.querySelector("header");

let navTemplate = (user, logout) => html` <header>
<nav>
    <a class="active" href="/">Home</a>
    <a href="/listing">All Listings</a>
    <a href="/search">By Year</a>
    ${user ? html` <div id="profile">
    <a>Welcome ${user.username}</a>
    <a href="/myListings">My Listings</a>
    <a href="/create">Create Listing</a>
    <a @click=${logout} href="javascript:void(0)">Logout</a>
</div>` : html`<div id="guest">
<a href="/login">Login</a>
<a href="/register">Register</a>
</div>`}
</nav>
</header>`;

export function showNav() {
  let user = getUserData();
  render(navTemplate(user, logout), header);
}

function logout() {
  logoutUser();
  showNav();
  page.redirect("/");
}
