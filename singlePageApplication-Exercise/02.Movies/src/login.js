import { showHomePage } from "./homePage.js";
import { hideSelections } from "./utils.js";

export function showLoginPage(e) {
    e.preventDefault();
    hideSelections();
    document.getElementById('form-login').style.display = 'block';

    document.getElementById('login-form').addEventListener('submit', loginUser);
}

async function loginUser(ev) {
    ev.preventDefault();
    let formData = new FormData(ev.target);
    let { email, password } = Object.fromEntries(formData.entries());
    const url = 'http://localhost:3030/users/login';
    await fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
    }).then(async (response) =>  {
        if (response.ok === false) {
            let err = await response.json();
            throw err;
        }
        return await response.json();
    })
      .then(data => {
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('id', data._id);
        localStorage.setItem('email', data.email);
        showHomePage();
      }).catch(error => {
        alert(error.message);
      })

}