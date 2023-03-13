export function hideSelections() {
    let sections = Array.from(document.getElementsByTagName('section'));
    sections.forEach(s => s.style.display = 'none');
}
export function checkLoginState() {
    let token = localStorage.getItem('accessToken');
    if (token != null) {
        let guestViews = Array.from(document.getElementsByClassName('guest'));
        guestViews.forEach(user => user.style.display = 'none');
        let userViews = Array.from(document.getElementsByClassName('user'));
        userViews.forEach(user => user.style.display = 'block');
        document.getElementById(
            "welcome-msg"
          ).textContent = `Welcome, ${localStorage.getItem("email")}`;
    } else {
        let userViews = Array.from(document.getElementsByClassName('user'));
        userViews.forEach(user => user.style.display = 'none');
        let guestViews = Array.from(document.getElementsByClassName('guest'));
        guestViews.forEach(user => user.style.display = 'block');
    }
}