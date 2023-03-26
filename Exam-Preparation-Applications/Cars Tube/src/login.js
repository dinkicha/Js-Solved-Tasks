import { loginUser } from "./api/user.js";
import { html } from "./lib.js";
import { createSubmitHadler } from "./utils.js";

let loginTemplate = (onLogin) => html` 
<section @submit=${onLogin} id="login">
<div class="container">
    <form id="login-form" action="#" method="post">
        <h1>Login</h1>
        <p>Please enter your credentials.</p>
        <hr>

        <p>Username</p>
        <input placeholder="Enter Username" name="username" type="text">

        <p>Password</p>
        <input type="password" placeholder="Enter Password" name="password">
        <input type="submit" class="registerbtn" value="Login">
    </form>
    <div class="signin">
        <p>Dont have an account?
            <a href="#">Sign up</a>.
        </p>
    </div>
</div>
</section>`;

export function showLogin(ctx) {
  ctx.render(loginTemplate(createSubmitHadler(onLogin)));

  async function onLogin({ username, password }) {
    if (username == "" || password == "") {
      return alert("Please enter your email and password");
    }
    await loginUser(username, password);
    ctx.updateNav();
    ctx.page.redirect('/');
  }
}
