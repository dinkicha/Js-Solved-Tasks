function addItem() {
    //making an object with the fields
        const html = {
            text: document.getElementById("newItemText"),
            value: document.getElementById("newItemValue"),
            menu: document.getElementById("menu"),
        }
        //creating the option
        const e = document.createElement("option")
        e.textContent = html.text.value
        e.value = html.value.value
        html.text.value = ""
        html.value.value = ""
    
        html.menu.appendChild(e)
}