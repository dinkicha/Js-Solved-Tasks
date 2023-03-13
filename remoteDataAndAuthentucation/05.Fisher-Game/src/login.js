window.onload = function() {
    if (localStorage.getItem('accessToken')) {
        document.getElementById('user').style.display = 'inline-block';
        document.getElementById('guest').style.display = 'none';
        document.querySelector('.imeil span').textContent = localStorage.getItem('email');

    } else {
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'inline-block';
    }
    let form = document.querySelector('form');
    form.addEventListener('submit', loginUser);
};

async function loginUser(ev) {
    ev.preventDefault();
    let notification = document.querySelector('.notification'); // because it is class .
    let formData = new FormData(ev.target);
    let { email, password } = Object.fromEntries(formData.entries());
    const url = 'http://localhost:3030/users/login';
    await fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
    }).then(response =>  {
        if (response.ok === false) {
            let err = response.json();
            throw err;
        }
        return response.json();
    })
      .then(data => {
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('_id', data._id);
        localStorage.setItem('email', data.email);
        window.location.href = 'index.html';
      }).catch(error => {
        notification.textContent = 'Please try again';
      })

}
