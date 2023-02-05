window.addEventListener("load", solve);

function solve() {
  let inputFields = Array.from(document.getElementsByTagName("input"));
  const addButton = document.getElementById("add-btn");
  let allHitsContainer = document.getElementsByClassName("all-hits-container")[0];
  let saved = document.getElementsByClassName('saved-container')[0];
  let likes = document.querySelector('.likes p');

  addButton.addEventListener("click", onPreview);

  function onPreview(e) {
    e.preventDefault();

    let [genre, nameOfTheSong, authorOfTheSong, dateOfCreation] =
      inputFields.map((e) => `${e.value}`);

    if (
      genre == "" ||
      nameOfTheSong == "" ||
      authorOfTheSong == "" ||
      dateOfCreation == ""
    ) {
      return;
    }

    let divHitsInfo = document.createElement("div");
    divHitsInfo.setAttribute("class", "hits-info");
    divHitsInfo.innerHTML = `<img src="./static/img/img.png"><h2>Genre: ${genre}</h2><h2>Name: ${nameOfTheSong}</h2><h2>Author: ${authorOfTheSong}</h2><h3>Date: ${dateOfCreation}</h3>`;

    let saveButton = document.createElement("button");
    saveButton.setAttribute("class", "save-btn");
    saveButton.textContent = "Save song";

    let likeButton = document.createElement("button");
    likeButton.setAttribute("class", "like-btn");
    likeButton.textContent = "Like song";

    let deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "delete-btn");
    deleteButton.textContent = "Delete";
    
    likeButton.addEventListener("click", likedSong);
    saveButton.addEventListener("click", savedSong);
    deleteButton.addEventListener("click", deleteSong);

    divHitsInfo.appendChild(saveButton);
    divHitsInfo.appendChild(likeButton);
    divHitsInfo.appendChild(deleteButton);
    allHitsContainer.appendChild(divHitsInfo);

    for (let i = 0; i < inputFields.length; i++) {
      inputFields[i].value = "";
    }

    function savedSong() {
      saveButton.remove();
      likeButton.remove();
      saved.appendChild(divHitsInfo);
    }
    
    function likedSong() {
      let totalLikes = Number(likes.textContent.match(/(\d+)/)[0]) + 1;
      likes.textContent = `Total Likes: ${totalLikes}`;
      likeButton.disabled = true;
    }

    function deleteSong() {
      divHitsInfo.remove();
    }
  }
}
