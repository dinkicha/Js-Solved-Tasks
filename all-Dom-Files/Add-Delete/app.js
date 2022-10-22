function addItem() {  
    // getting the ul list from the HTML
    let liItems = document.getElementById('items');
    
    // getting input text
    let newItemText = document.getElementById('newItemText');
    
    //creating new li element
    let addedElement = document.createElement('li');
    
    // adding the userText to the new ul element(li)
    addedElement.innerHTML = `${newItemText.value} <a href="#">[Delete]</a>`
    
    // setting the new li element to the DOM
    liItems.appendChild(addedElement);
    
    //adding eventListener
    liItems.addEventListener('click', deleteItem);

    // deleting the input text when the button 'ADD' is clicked
    document.getElementById('newItemText').value = '';

    function deleteItem(item) {
        let element = item.target.parentNode
        element.remove()
    }
}