function deleteByEmail() {
    const emailText = document.querySelector('input[name="email"]').value;
    let table = document.querySelectorAll('tbody td:nth-child(2)');
    
    for (let td of table) {
        if(td.textContent == emailText) {
            td.parentNode.removeChild(td);
            document.getElementById('result').textContent = 'Deleted.';
            document.querySelector('input[name="email"]').value = ' ';
        }
    }
    document.getElementById('result').textContent = 'Not found.';
}
