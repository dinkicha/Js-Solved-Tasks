import { loginUser } from "./api/user.js";
import { html } from "./lib.js";
import { createSubmitHadler } from "./utils.js";

let loginTemplate = (onLogin) => html` 
<section @submit=${onLogin} id="loginPage">
<form>
    <fieldset>
        <legend>Login</legend>

        <label for="email" class="vhide">Email</label>
        <input id="email" class="email" name="email" type="text" placeholder="Email">

        <label for="password" class="vhide">Password</label>
        <input id="password" class="password" name="password" type="password" placeholder="Password">

        <button type="submit" class="login">Login</button>

        <p class="field">
            <span>If you don't have profile click <a href="/register">here</a></span>
        </p>
    </fieldset>
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
    ctx.page.redirect('/');
  }
}
