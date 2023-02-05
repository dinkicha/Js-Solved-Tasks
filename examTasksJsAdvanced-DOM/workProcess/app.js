function solve() {
  let inputFields = Array.from(document.getElementsByTagName("input"));
  const hireWorkerButton = document.getElementById("add-worker");
  hireWorkerButton.addEventListener("click", onPreview);
  let salarySum = 0; // don't put in the onPreview function because it will be invoked every time
  function onPreview(e) {
    e.preventDefault();

    let [firstName, lastName, email, dateOfBirth, position, salary] =
      inputFields.map((e) => `${e.value}`);

    if (
      firstName == "" ||
      lastName == "" ||
      email == "" ||
      dateOfBirth == "" ||
      position == "" ||
      salary == ""
    ) {
      return;
    }

    let table = document.getElementById("tbody");
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    tr.innerHTML = `<td>${firstName}</td><td>${lastName}</td><td>${email}</td><td>${dateOfBirth}</td><td>${position}</td><td>${salary}</td>`;

    let firedButton = document.createElement("button");
    firedButton.setAttribute("class", "fired");
    firedButton.textContent = "Fired";

    let editButton = document.createElement("button");
    editButton.setAttribute("class", "edit");
    editButton.textContent = "Edit";

    td.appendChild(firedButton);
    td.appendChild(editButton);
    tr.appendChild(td);
    table.appendChild(tr);

    let htmlSumTag = document.getElementById("sum");
    salarySum += Number(salary);
    htmlSumTag.textContent = salarySum.toFixed(2);

    for (let i = 0; i < inputFields.length; i++) {
      inputFields[i].value = "";
    }

    editButton.addEventListener("click", editing);
    firedButton.addEventListener("click", firing);

    function editing() {
      let inputInfo = [
        firstName,
        lastName,
        email,
        dateOfBirth,
        position,
        salary,
      ];
      for (let i = 0; i < inputFields.length; i++) {
        inputFields[i].value = inputInfo[i];
      }
     tr.remove();
      salarySum -= Number(salary);
      htmlSumTag.textContent = salarySum.toFixed(2);
    }

    function firing() {
    tr.remove();
      salarySum -= Number(salary);
      htmlSumTag.textContent = salarySum.toFixed(2);
    }

  }
}
solve();
