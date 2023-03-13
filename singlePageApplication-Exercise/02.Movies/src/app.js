import { showHomePage } from "./homePage.js"
import { showLoginPage } from "./login.js"
import { showRegisterPage } from "./register.js"
import { hideSelections } from "./utils.js"

window.onload = function() {
    hideSelections()
    showHomePage()

    document.querySelector("a[href='/login']").addEventListener('click', showLoginPage);
    document.querySelector("a[href='/logout']").addEventListener('click', showLogoutUser);
    document.querySelector("a[href='/register']").addEventListener('click', showRegisterPage);
}

async function showLogoutUser(e) {
    e.preventDefault();
    const url = "http://localhost:3030/users/logout";
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Authorization": localStorage.getItem("accessToken"),
      },
    });
    localStorage.clear();
    showLoginPage();
  }