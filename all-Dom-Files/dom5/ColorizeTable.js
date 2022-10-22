function colorize() {
    const elements = document.querySelectorAll('table tr');
    
    for (let i = 1; i < elements.length; i+=2) {
        elements[i].style.backgroundColor = 'Teal';
    }
}