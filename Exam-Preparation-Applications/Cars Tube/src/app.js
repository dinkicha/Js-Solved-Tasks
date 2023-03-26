import { showCreate } from "./create.js";
import { showDetails } from "./details.js";
import { showEdit } from "./edit.js";
import { showHome } from "./home.js";
import { page, render } from "./lib.js";
import { showListings } from "./listings.js";
 import { showLogin } from "./login.js";
import { showMyListings } from "./myListings.js";
import { showNav } from "./nav.js";
import { showRegister } from "./register.js";
import { showSearch } from "./search.js";
import { getUserData } from "./utils.js";

let main = document.getElementById('site-content');

page(decorateContext);
 page('index.html', '/');
page("/", showHome);
page('/login', showLogin)
page('/register', showRegister);
page('/listing', showListings)
page('/create', showCreate);
 page('/details/:id', showDetails);
 page('/edit/:id', showEdit);
page('/myListings', showMyListings);
page('/search', showSearch);


showNav();
page.start();

function decorateContext(ctx, next) {
  ctx.render = renderMain;
    ctx.updateNav = showNav;
    ctx.userData = getUserData();
  next();
}

function renderMain(content) {
  render(content, main);
}