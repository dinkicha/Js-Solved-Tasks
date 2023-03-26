import { registerUser } from "./api/user.js";
import { html } from "./lib.js";
import { createSubmitHadler } from "./utils.js";

let registerTemplate = (onRegister) => html`
<section @submit=${onRegister} id="register-page" class="content auth">
<form id="register">
    <div class="container">
        <div class="brand-logo"></div>
        <h1>Register</h1>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="maria@email.com">

        <label for="pass">Password:</label>
        <input type="password" name="password" id="register-password">

        <label for="con-pass">Confirm Password:</label>
        <input type="password" name="confirm-password" id="confirm-password">

        <input class="btn submit" type="submit" value="Register">

        <p class="field">
            <span>If you already have profile click <a href="#">here</a></span>
        </p>
    </div>
</form>
</section>
   `;

export function showRegister(ctx) {
  ctx.render(registerTemplate(createSubmitHadler(onRegister)));

  async function onRegister({ email, password, ['confirm-password']: passwordConfirmation}) {
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
