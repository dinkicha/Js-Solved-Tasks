import { registerUser } from "./api/user.js";
import { html } from "./lib.js";
import { createSubmitHadler } from "./utils.js";

let registerTemplate = (onRegister) => html`
  <section @submit=${onRegister} id="registerPage">
    <form>
      <fieldset>
        <legend>Register</legend>

        <label for="email" class="vhide">Email</label>
        <input
          id="email"
          class="email"
          name="email"
          type="text"
          placeholder="Email"
        />

        <label for="password" class="vhide">Password</label>
        <input
          id="password"
          class="password"
          name="password"
          type="password"
          placeholder="Password"
        />

        <label for="conf-pass" class="vhide">Confirm Password:</label>
        <input
          id="conf-pass"
          class="conf-pass"
          name="conf-pass"
          type="password"
          placeholder="Confirm Password"
        />

        <button type="submit" class="register">Register</button>

        <p class="field">
          <span>If you already have profile click <a href="#">here</a></span>
        </p>
      </fieldset>
    </form>
  </section>
`;

export function showRegister(ctx) {
  ctx.render(registerTemplate(createSubmitHadler(onRegister)));

  async function onRegister({
    email,
    password,
    ["conf-password"]: passwordConfirmation,
  }) {
    if (email == "" || password == "") {
      return alert("All fields are required");
    }
    if (password !== passwordConfirmation) {
      return alert("Passwords do not match");
    }
    await registerUser(email, password);
    ctx.updateNav();
    ctx.page.redirect("/");
  }
}
