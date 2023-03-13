window.onload = function () {
  if (localStorage.getItem("accessToken")) {
    document.getElementById("user").style.display = "inline-block";
    document.getElementById("guest").style.display = "none";
    document.querySelector(".imeil span").textContent =
      localStorage.getItem("email");
  } else {
    document.getElementById("user").style.display = "none";
    document.getElementById("guest").style.display = "inline-block";
  }

  let form = document.querySelector("form");
  form.addEventListener("submit", registerUser);
};

async function registerUser(e) {
  e.preventDefault();
  let notification = document.querySelector(".notification"); // because it is class .
  let form = new FormData(e.target);
  let { email, password, rePass } = Object.fromEntries(form.entries());
  const url = "http://localhost:3030/users/register";
  if (email == "" || password == "") {
    return (notification.textContent = "All fields are required");
  }
  if (password !== rePass) {
    return (notification.textContent = "Passwords do not match");
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
  }).then(res => {
    if (res.ok == false) {
        let err = res.json();
        throw err;
    }
    return res.json();
  }).then(data => {
    localStorage.setItem('accessToken', data.accessToken);
    localStorage.setItem('email', data.email);
    localStorage.setItem('_id', data._id);
    window.location.href = 'index.html';
  })
  .catch(err => {
    notification.textContent = err.message;
  })

}
