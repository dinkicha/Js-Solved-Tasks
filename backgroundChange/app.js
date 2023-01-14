function colorChange() {
    const color = document.getElementById('search').value;
    document.body.style.backgroundColor = color;
    document.getElementById('search').value = ''; // deleting the input field when the button is clicked
}


 