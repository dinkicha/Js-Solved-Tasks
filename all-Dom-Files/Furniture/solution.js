function solve() {
  //we are getting the the tbody see html for more info 
  const table = document.querySelector('table.table tbody');

  //we are destructuring the input fields the first and the last
  const [input, output] = document.querySelectorAll('textarea');

  //we are destructuring the buttons the first and the last
  const [generate, buy] = document.querySelectorAll('button');

  //adding eventListeners to the two buttons so we can do something
  generate.addEventListener('click', generateButton);
  buy.addEventListener('click', buyButton);


  //Making the function that we assign to do when the buttons are clicked
  function generateButton(e) {

    //we are parsing the input field because it comes like a JSON format
    const data = JSON.parse(input.value);

    //we are making a loop that is gonna make new html elements
    for (let item  of data) {
        const row = document.createElement('tr');

        const imgCell = document.createElement('td');

        const nameCell = document.createElement('td');

        const priceCell = document.createElement('td');

        const decCell = document.createElement('td');

        const checkCell = document.createElement('td');

        //we are creating the elements that are in these td's up here
        //creating the element then assigning it and after we appendChild it to the to td
        const img = document.createElement('img');
        img.src = item.img;
        imgCell.appendChild(img);
        //we do this for every other element
        const name = document.createElement('p');
        name.textContent = item.name;
        nameCell.appendChild(name);

        const price = document.createElement('p');
        price.textContent = item.price;
        priceCell.appendChild(price);

        const decFactor = document.createElement('p');
        decFactor.textContent = item.decFactor;
        decCell.appendChild(decFactor);

        const check = document.createElement('input');
        check.type = 'checkbox';
        checkCell.appendChild(check);

        //after that we are appending all these elements to the row element
        row.appendChild(imgCell);
        row.appendChild(nameCell);
        row.appendChild(priceCell);
        row.appendChild(decCell);
        row.appendChild(checkCell);

        //here we are appending the row element to the table
        table.appendChild(row);
    }
  }
        //Here we are buying the furniture
        // input[type="checkbox"]:
        // returns all checkBoxes and :checked returns all checkboxes that are true
        function buyButton(e) {
        const furniture = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
        .map(b => b.parentElement.parentElement) // from the button it goes to the cell and after that to the row
        .map(r => ({ // we are making un object that have 3 elements we start from the first one because the zeroth element is the image
          name: r.children[1].textContent,
          price: Number(r.children[2].textContent), //Numbering because these two are price and decFactor
          decFactor: Number(r.children[3].textContent)
        }));

        //we are creating varibles 
        const names = [];
        let total = 0;
        let decFactor = 0;

        //we are pushing the names to the empty array and += on the math things
        for (let item of furniture) {
            names.push(item.name);
            total += item.price;
            decFactor += item.decFactor;
        }

        //we are joining it because the task is like this and toFixed too
        // but we are / length because we need average decFactor
        const result = `Bought furniture: ${names.join(', ')}
Total price: ${total.toFixed(2)}
Average decoration factor: ${decFactor / furniture.length}`

        //setting the text to the textArea above the buy button
  output.value = result
      }
}