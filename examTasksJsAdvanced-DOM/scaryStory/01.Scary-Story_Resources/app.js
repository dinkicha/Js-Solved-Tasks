window.addEventListener("load", solve);

function solve() {
  const formButton = document.getElementById("form-btn");
  const inputFields = Array.from(document.getElementsByTagName("input"));

  formButton.addEventListener("click", onPreview);

  function onPreview(e) {
    e.preventDefault();
    let [firstName, lastName, age, storyTitle] = inputFields.map(
      (e) => `${e.value}`);
    let genre = document.getElementById("genre");
    let story = document.getElementById("story");
    let storyReturn = story.value;
    if (
      firstName == "" ||
      lastName == "" ||
      age == "" ||
      storyTitle == "" ||
      genre == "" ||
      story.value == ""
    ) {
      return;
    }
    genre = genre.options[genre.selectedIndex].text;

    let list = document.getElementById("preview-list");
    let li = document.createElement("li");
    li.setAttribute("class", "story-info");
    li.innerHTML = `<article><h4>Name: ${firstName} ${lastName}</h4><p>Age: ${age}</p><p>Title: ${storyTitle}</p><p>Genre: ${genre}</p><p>${story.value}</p></article>`;

    let saveButton = document.createElement("button");
    saveButton.setAttribute("class", "save-btn");
    saveButton.textContent = "Save Story";
    saveButton.addEventListener("click", completedStory);

    let editButton = document.createElement("button");
    editButton.setAttribute("class", "edit-btn");
    editButton.textContent = "Edit Story";
    editButton.addEventListener("click", editedStory);

    let deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "delete-btn");
    deleteButton.textContent = "Delete Story";
    deleteButton.addEventListener("click", deletedStory);

    li.appendChild(saveButton);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    list.appendChild(li);

    formButton.disabled = true;
    for (let i = 0; i < inputFields.length; i++) {
      inputFields[i].value = "";
    }
    story.value = "";

    function completedStory() {
      let main = document.getElementById("man");
      main.innerHTML = `<h1>Your scary story is saved!</h1>`;
    }

    function editedStory() {
      let inputInfo = [firstName, lastName, age, storyTitle, genre, story];
      for (let i = 0; i < inputFields.length; i++) {
        inputFields[i].value = inputInfo[i];
      }
      story.value = storyReturn;
      formButton.disabled = false;
      li.remove();
    }

    function deletedStory() {
      li.remove();
      formButton.disabled = false;
    }
  }
}
