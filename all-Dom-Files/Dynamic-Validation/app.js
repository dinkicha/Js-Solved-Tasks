function validate() {
    document.getElementById('email').addEventListener('change', onChange);

    function onChange(ev) {
        const email = ev.target.value;

        if(/^[a-z]+\@[a-z]+\.[a-z]+$/.test(email)) {
            ev.target.className = '';  // be careful not to write email.target -> ev.target
        } else {
            ev.target.className= 'error';  
        }
    }
}