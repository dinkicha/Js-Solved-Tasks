window.addEventListener("load", solve);

function solve() {
  let inputsFields = Array.from(document.getElementsByTagName("input"));
  let nextStepButton = document.getElementById("next-btn");
  let ticketsInfoList = document.getElementsByClassName("ticket-info-list")[0];
  let confirmedSectionUl = document.getElementsByClassName("confirm-ticket")[0];
  let body = document.getElementById("body");

  nextStepButton.addEventListener("click", onPreview);

  function onPreview(e) {
    e.preventDefault();

    let [firstName, lastName, numberOfPeople, date, days] = inputsFields.map(
      (e) => `${e.value}`
    );

    if (
      firstName == "" ||
      lastName == "" ||
      numberOfPeople == "" ||
      date == "" ||
      days == ""
    ) {
      return;
    }

    let li = document.createElement("li");
    li.setAttribute("class", "ticket");
    li.innerHTML = `<article><h3>Name: ${firstName} ${lastName}</h3><p>From date: ${date}</p><p>For ${days} days</p><p>For ${numberOfPeople} people</p></article>`;

    let editButton = document.createElement("button");
    editButton.setAttribute("class", "edit-btn");
    editButton.textContent = "Edit";

    let continueButton = document.createElement("button");
    continueButton.setAttribute("class", "continue-btn");
    continueButton.textContent = "Continue";

    editButton.addEventListener("click", edited);
    continueButton.addEventListener("click", continued);


    li.appendChild(editButton);
    li.appendChild(continueButton);
    ticketsInfoList.appendChild(li);

    nextStepButton.disabled = true;
    for (let i = 0; i < inputsFields.length; i++) {
      inputsFields[i].value = "";
    }


    function edited() {
        let inputInfo = [firstName, lastName, numberOfPeople, date, days];
        for (let i = 0; i < inputsFields.length; i++) {
            inputsFields[i].value = inputInfo[i];
        }
        nextStepButton.disabled = false;
        li.remove();
    }

    function continued() {
        li.remove();

        li.setAttribute('class', 'ticket-content');

        editButton.remove();
        continueButton.remove();

      let confirmButton = document.createElement("button");
      confirmButton.setAttribute("class", "confirm-btn");
      confirmButton.textContent = "Confirm";

      let cancelButton = document.createElement("button");
      cancelButton.setAttribute("class", "cancel-btn");
      cancelButton.textContent = "Cancel";

      confirmButton.addEventListener("click", confirmed);
      cancelButton.addEventListener("click", cancelled);

      li.appendChild(confirmButton);
      li.appendChild(cancelButton);
      confirmedSectionUl.appendChild(li);

    }

    function confirmed() {
      body.innerHTML = `<h1 id="thank-you">Thank you, have a nice day!</h1>`;

      let backButton = document.createElement("button");
      backButton.setAttribute("id", "back-btn");
      backButton.textContent = "Back";

      backButton.addEventListener("click", () => {
        document.location.reload(true);
      });

      body.appendChild(backButton);
    }

    function cancelled() {
      
      nextStepButton.disabled = false;
      li.remove();
    }
  }
}
