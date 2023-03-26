import { loginUser } from "./api/user.js";
import { html } from "./lib.js";
import { createSubmitHadler } from "./utils.js";

let loginTemplate = (onLogin) => html` <section id="loginPage">
  <form @submit=${onLogin} class="loginForm">
    <img src="./images/logo.png" alt="logo" />
    <h2>Login</h2>

    <div>
      <label for="email">Email:</label>
      <input
        id="email"
        name="email"
        type="text"
        placeholder="steven@abv.bg"
        value=""
      />
    </div>

    <div>
      <label for="password">Password:</label>
      <input
        id="password"
        name="password"
        type="password"
        placeholder="********"
        value=""
      />
    </div>

    <button class="btn" type="submit">Login</button>

    <p class="field">
      <span>If you don't have profile click <a href="/register">here</a></span>
    </p>
  </form>
</section>`;

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
