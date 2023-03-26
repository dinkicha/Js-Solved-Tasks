import { registerUser } from "./api/user.js";
import { html } from "./lib.js";
import { createSubmitHadler } from "./utils.js";

let registerTemplate = (onRegister) => html`
        <section @submit=${onRegister} id="register">
          <div class="form">
            <h2>Register</h2>
            <form class="login-form">
              <input
                type="text"
                name="email"
                id="register-email"
                placeholder="email"
              />
              <input
                type="password"
                name="password"
                id="register-password"
                placeholder="password"
              />
              <input
                type="password"
                name="re-password"
                id="repeat-password"
                placeholder="repeat password"
              />
              <button type="submit">register</button>
              <p class="message">Already registered? <a href="/login">Login</a></p>
            </form>
          </div>
        </section>
   `;

export function showRegister(ctx) {
  ctx.render(registerTemplate(createSubmitHadler(onRegister)));

  async function onRegister({ email, password, ['re-password']: passwordConfirmation}) {
    if (email == "" || password == "") {
      return alert("All fields are required");
    }
    if (password !== passwordConfirmation) {
        return alert('Passwords do not match');
    }
    await registerUser(email, password);
    ctx.updateNav();
    ctx.page.redirect('/');
  }
}
