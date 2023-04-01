import { showCreate } from "./create.js";
import { showDetails } from "./details.js";
import { showEdit } from "./edit.js";
import { showHome } from "./home.js";
import { page, render } from "./lib.js";
import { showLogin } from "./login.js";
import { showNav } from "./nav.js";
import { getUserData } from "./utils.js";
import { showRegister } from "./register.js";
import { showDashboard } from "./dashboard.js";


let main = document.querySelector('main');

page(decorateContext);
page('index.html', '/');
page("/", showHome);
page('/login', showLogin)
page('/register', showRegister);
page('/dashboard', showDashboard)
page('/create', showCreate);
page('/details/:id', showDetails);
page('/edit/:id', showEdit);



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