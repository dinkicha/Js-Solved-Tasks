import { showHomePage } from "./homePage.js";
import { hideSelections } from "./utils.js";

export function showRegisterPage(e) {
    e.preventDefault();
    hideSelections();
    document.getElementById('form-sign-up').style.display = 'block';

    document.getElementById('register-form').addEventListener('submit', registerUser);
}
async function registerUser(e) {
    e.preventDefault();
    let form = new FormData(e.target);
    let { email, password, repeatPassword } = Object.fromEntries(form.entries());
    const url = "http://localhost:3030/users/register";
    if (email == "" || password == "") {
      return (alert('All fields are required'));
    }
    if (password !== repeatPassword) {
      return (alert('Passwords do not match'));
    }
    await fetch(url, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
    }).then(async (res) => {
      if (res.ok == false) {
          let err = await res.json();
          throw err;
      }
      return await res.json();
    }).then(data => {
      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('email', data.email);
      localStorage.setItem('id', data._id);
      showHomePage();
    })
    .catch(err => {
      alert(err.message);
    })
  
  }