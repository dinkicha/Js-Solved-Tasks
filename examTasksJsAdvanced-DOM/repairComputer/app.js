window.addEventListener("load", solve);

function solve() {
  let inputFields = Array.from(document.getElementsByTagName("input"));
  const sendFormButton = document.getElementsByTagName("button")[0];
  const clearButton = document.getElementsByClassName("clear-btn")[0];
  let completedOrders = document.getElementById("completed-orders");
  sendFormButton.addEventListener("click", onPreview);

  function onPreview(e) {
    e.preventDefault();

    let [clientName, clientPhone] = inputFields.map((e) => `${e.value}`);
    let productType = document.getElementById("type-product");
    let description = document.getElementById("description");
    let descriptionProblem = description.value;
    let productTypeValue = productType.value;
    if (description == "" || clientName == "" || clientPhone == "") {
      return;
    }

    let received = document.getElementById("received-orders");
    let divContainer = document.createElement("div");
    divContainer.setAttribute("class", "container");
    divContainer.innerHTML = `<h2>Product type for repair: ${productTypeValue}</h2><h3>Client information: ${clientName}, ${clientPhone}</h3><h4>Description of the problem: ${descriptionProblem}</h4>`;

    let startButton = document.createElement("button");
    startButton.setAttribute("class", "start-btn");
    startButton.textContent = "Start repair";

    let finishButton = document.createElement("button");
    finishButton.setAttribute("class", "finish-btn");
    finishButton.textContent = "Finish repair";

    divContainer.appendChild(startButton);
    divContainer.appendChild(finishButton);
    received.appendChild(divContainer);

    for (let i = 0; i < inputFields.length; i++) {
      inputFields[i].value = "";
    }
    description.value = "";

    finishButton.disabled = true;

    startButton.addEventListener("click", repairingStarted);
    finishButton.addEventListener("click", finishedRepairing);

    function repairingStarted() {
      startButton.disabled = true;
      finishButton.disabled = false;
    }

    function finishedRepairing() {
      divContainer.remove();
      let divContainer2 = document.createElement("div");
      divContainer2.setAttribute("class", "container");
      divContainer2.innerHTML = `<h2>Product type for repair: ${productTypeValue}</h2><h3>Client information: ${clientName}, ${clientPhone}</h3><h4>Description of the problem: ${descriptionProblem}</h4>`;
      completedOrders.appendChild(divContainer2);
    }

    clearButton.addEventListener("click", clearing);

    function clearing() {
      let completedTasks = Array.from(
        document.getElementsByClassName("container")
      );
      for (const completedTask of completedTasks) {
        if (completedTask.parentElement.id == "completed-orders") {
          completedTask.remove();
        }
      }
      //check the task if you have it on some other task
    }
  }
}
