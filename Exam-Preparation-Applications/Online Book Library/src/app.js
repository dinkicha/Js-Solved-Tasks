import { page, render } from "./lib.js";
import { showLogin } from "./login.js";
import { showNav } from "./nav.js";
import { getUserData } from "./utils.js";
import { showRegister } from "./register.js";
import { showCreate } from "./create.js";
import { showDashboard } from "./dashboard.js";
import { showDetails } from "./details.js";
import { showEdit } from "./edit.js";
import { showProfile } from "./myBooks.js";


let main = document.getElementById("site-content");

page(decorateContext);
page('/login', showLogin);
page('/register', showRegister);
page('/create', showCreate);
page('/dashboard', showDashboard);
page('/details/:id', showDetails);
page('/edit/:id', showEdit);
page('/myBooks', showProfile);

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
