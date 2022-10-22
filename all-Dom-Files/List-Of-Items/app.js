function addItem() {
    // getting input text
    const userText = document.getElementById('newItemText').value;
    // getting the ul list from the HTML
    let liItems = document.getElementById('items');
    // creating new li element for the ul
    let addedElement = document.createElement('li');
    // adding the userText to the new ul element(li)
    addedElement.textContent = userText;
    // setting the new li element to the DOM
    liItems.appendChild(addedElement);
    // deleting the input text when the button is clicked
    document.getElementById('newItemText').value = '';
}