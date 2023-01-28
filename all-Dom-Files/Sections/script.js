function create(words) {
  const content = document.getElementById("content"); //getting content field with 'id'

  for (let word of words) {
    let division = document.createElement("div"); //create a <div>
    const para = document.createElement("p"); //create a <p>
    para.textContent = word; //assigning textContect to <p> to be the word of the array
    para.style.display = "none"; //display: none so it will not be visible

    division.appendChild(para); //appending <p> to the <div>

    content.appendChild(division); //appending <div> to the content (css see)

    division.addEventListener("click", onShow); //adding eventListener for click and revel function
   }

   function onShow(ev) {
     ev.currentTarget.children[0].style.display = ""; //function too see the <p> when we click
   }
   
}
