function toggle() {
 const div = document.querySelector('#extra');
 const btn = document.querySelector('.button'); // We use querySelector not querySelectorAll because we have only one item(button)

 if(div.style.display === 'block') {
    btn.textContent = 'More';
    div.style.display = 'none';
 } else {
    btn.textContent = 'Less';
    div.style.display = 'block';
 }
}