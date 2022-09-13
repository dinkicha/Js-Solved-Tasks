function firstApp() {
    alert('Благодарим за информацията!');
    return true;
}
function password(){
    if(password.length < 3) {
        console.log('Паролата трябва да е мининум 3 символа');
    } else {
        console.log('Добър избор за парола!');
    }
}