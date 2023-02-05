function solve() {
  let inputFields = Array.from(document.getElementsByTagName("input"));
  let addToListButton = document.getElementById("add");
  let ResetButton = document.getElementById("reset");
  let sendList = document.getElementsByClassName("sent-list")[0];
  let deleteList = document.getElementsByClassName("delete-list")[0];
  let ul = document.getElementById("list");
  let message = document.getElementById("message");


  addToListButton.addEventListener("click", firstThing);
  ResetButton.addEventListener("click", secondThing);

  function firstThing(e) {
    e.preventDefault();

    let [recipient, title] = inputFields.map((e) => `${e.value}`);

    let secondMessage = message.value;
    if (recipient == "" || title == "" || secondMessage == "") {
      return;
    }


    
    let li = document.createElement("li");
    li.innerHTML = `<h4>Title: ${title}</h4><h4>Recipient Name: ${recipient}</h4><span>${messageText}</span>`;

    let divForButtons = document.createElement("div");
    divForButtons.setAttribute("id", "list-action");

    let sendButton = document.createElement("button");
    sendButton.setAttribute("id", "send");
    sendButton.setAttribute("type", "submit"); // look at the photo
    sendButton.textContent = "Send";

    let deleteButton = document.createElement("button");
    sendButton.setAttribute("id", "delete");
    sendButton.setAttribute("type", "submit"); // look at the photo again
    deleteButton.textContent = "Delete";
    
    sendButton.addEventListener("click", sendMessage);
    deleteButton.addEventListener("click", deleteMessage);

    divForButtons.appendChild(sendButton);
    divForButtons.appendChild(deleteButton);
    li.appendChild(divForButtons);
    ul.appendChild(li);


    for (let i = 0; i < inputFields.length; i++) {
      inputFields[i].value = "";
    }
    message.value = "";

    function sendMessage() {
      li.remove();
      li.innerHTML = `<span>To: ${recipient}</span><span>Title: ${title}</span>`;
      divForButtons.setAttribute("id", "");
      divForButtons.setAttribute("class", "btn");
      deleteButton.setAttribute("id", "");
      deleteButton.setAttribute("class", "delete");
      sendButton.remove();
      li.appendChild(divForButtons);
      sendList.appendChild(li);
    }

    function deleteMessage() {
      li.remove();
      li.innerHTML = `<span>To: ${recipient}</span><span>Title: ${title}</span>`;
      divForButtons.remove();
      deleteList.appendChild(li);
    }
  }
  function secondThing(e) {
    e.preventDefault();
    for (let i = 0; i < inputFields.length; i++) {
      inputFields[i].value = "";
    }
    message.value = "";
  }
}
solve();
