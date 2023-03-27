import { loginUser } from "./api/user.js";
import { html } from "./lib.js";
import { createSubmitHadler } from "./utils.js";

let loginTemplate = (onLogin) => html` 
<section @submit=${onLogin} id="login">
<form id="login-form">
    <div class="container">
        <h1>Login</h1>
        <label for="email">Email</label>
        <input id="email" placeholder="Enter Email" name="email" type="text">
        <label for="password">Password</label>
        <input id="password" type="password" placeholder="Enter Password" name="password">
        <input type="submit" class="registerbtn button" value="Login">
        <div class="container signin">
            <p>Dont have an account?<a href="/register">Sign up</a>.</p>
        </div>
    </div>
</form>
</section>

`;

export function showLogin(ctx) {
  ctx.render(loginTemplate(createSubmitHadler(onLogin)));

  async function onLogin({ email, password }) {
    if (email == "" || password == "") {
      return alert("Please enter your email and password");
    }
    await loginUser(email, password);
    ctx.updateNav();
    ctx.page.redirect('/allMemes');
  }
}
