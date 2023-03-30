import { registerUser } from "./api/user.js";
import { html } from "./lib.js";
import { createSubmitHadler } from "./utils.js";

let registerTemplate = (onRegister) => html`
<section id="register-page" class="register">
            <form @submit=${onRegister} id="register-form" action="" method="">
                <fieldset>
                    <legend>Register Form</legend>
                    <p class="field">
                        <label for="email">Email</label>
                        <span class="input">
                            <input type="text" name="email" id="email" placeholder="Email">
                        </span>
                    </p>
                    <p class="field">
                        <label for="password">Password</label>
                        <span class="input">
                            <input type="password" name="password" id="password" placeholder="Password">
                        </span>
                    </p>
                    <p class="field">
                        <label for="repeat-pass">Repeat Password</label>
                        <span class="input">
                            <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password">
                        </span>
                    </p>
                    <input class="button submit" type="submit" value="Register">
                </fieldset>
            </form>
        </section>
`;

export function showRegister(ctx) {
  ctx.render(registerTemplate(createSubmitHadler(onRegister)));

  async function onRegister({ email, password, ["confirm-pass"]: repeatPassword }) {
    if (email == "" || password == "") {
      return alert("All fields are required");
    }
    if (password !== repeatPassword) {
        return alert('Passwords do not match');
    }
    await registerUser(email, password);
    ctx.updateNav();
    ctx.page.redirect('/dashboard');
  }
}
