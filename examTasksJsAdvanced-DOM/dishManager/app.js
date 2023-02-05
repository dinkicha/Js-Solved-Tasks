window.addEventListener("load", solve);

function solve() {
  let inputFields = Array.from(document.getElementsByTagName("input"));
  const submitButton = document.getElementById("form-btn");
  const counter = document.getElementById("progress-count");
  const saveButton = document.getElementById('clear-btn');

  submitButton.addEventListener("click", onPreview);

  function onPreview(e) {
    e.preventDefault();

    let [firstName, lastName, age] = inputFields.map((e) => `${e.value}`);
    let gender = document.getElementById("genderSelect");
    gender = gender.options[gender.selectedIndex].text;
    //every time when we have dropdown menu

    let information = document.getElementById("task");
    let informationText = information.value;

    if (
      firstName == "" ||
      lastName == "" ||
      age == "" ||
      gender == "" ||
      information == ""
    ) {
      return;
    }

    let list = document.getElementById("in-progress");
    let li = document.createElement("li");
    li.setAttribute("class", "each-line");
    li.innerHTML = `<article><h4>${firstName} ${lastName}</h4><p>${gender}, ${age}</p><p>Dish description: ${information.value}</p></article>`;

    let editButton = document.createElement("button");
    editButton.setAttribute("class", "edit-btn");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", editedManager);

    let completeButton = document.createElement("button");
    completeButton.setAttribute("class", "complete-btn");
    completeButton.textContent = "Mark as complete";
    completeButton.addEventListener("click", completedManager);

    li.appendChild(editButton);
    li.appendChild(completeButton);
    list.appendChild(li);

    gender.selectIndex = gender - 1;
    for (let i = 0; i < inputFields.length; i++) {
      inputFields[i].value = "";
    }
    information.value = "";

    counter.textContent = Number(counter.textContent) + 1;

    function editedManager() {
      let inputInfo = [firstName, lastName, age, gender, information];
      for (let i = 0; i < inputFields.length; i++) {
        inputFields[i].value = inputInfo[i];
      }
      information.value = informationText;

      counter.textContent = Number(counter.textContent) - 1;
      li.remove();
    }

    function completedManager() {
      editButton.remove();
      completeButton.remove();
      counter.textContent = Number(counter.textContent) - 1;
      let list3 = document.getElementById('finished');
      li.remove()
      list3.appendChild(li);

    }

    saveButton.addEventListener('click', savedButton) 


    function savedButton() {
      let list2 = document.getElementById('finished');
      list2.innerHTML = '';
    }
  }
}
