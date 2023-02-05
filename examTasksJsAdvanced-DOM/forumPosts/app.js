window.addEventListener("load", solve);

function solve() {
  let inputFields = Array.from(document.getElementsByTagName("input"));
  let publishButton = document.getElementById("publish-btn");
  let clearButton = document.getElementById('clear-btn');

  publishButton.addEventListener("click", onPreview);

  function onPreview(e) {
    e.preventDefault();
    let [title, category] = inputFields.map((e) => `${e.value}`);
    let textArea = document.getElementById("post-content");
    let textAreaSecond = textArea.value;

    if (title == "" || category == "" || textArea.value == "") {
      return;
    }

    let list = document.getElementById('review-list');
    let li = document.createElement('li');
    li.setAttribute('class', 'rpost');
    li.innerHTML = `<article><h4>${title}</h4><p>Category: ${category}</p><p>Content: ${textArea.value}</p></article>`;

    let editButton = document.createElement('button');
    editButton.setAttribute('class', 'action-btn edit');
    editButton.textContent = 'Edit';

    let ApproveButton = document.createElement('button');
    ApproveButton.setAttribute('class', 'action-btn approve');
    ApproveButton.textContent = 'Approve';


    li.appendChild(editButton);
    li.appendChild(ApproveButton);
    list.appendChild(li);

    editButton.addEventListener('click', editedSection);
    ApproveButton.addEventListener('click', approvedSection);

    for (let i = 0; i < inputFields.length; i++) {
      inputFields[i].value = "";
    }
    textArea.value = '';

    function editedSection() {
      let inputInfo = [title, category, textArea];
      for (let i = 0; i < inputFields.length; i++) {
        inputFields[i].value = inputInfo[i];
      }
      textArea.value = textAreaSecond;
      li.remove();
    }

    function approvedSection() {
      let lastList = document.getElementById('published-list');

      let li3 = document.createElement('li');
      li3.setAttribute('class', 'rpost');
      li3.innerHTML = `<article><h4>${title}</h4><p>Category: ${category}</p><p>Content: ${textArea.value}</p></article>`;
      lastList.appendChild(li3);

      editButton.remove();
      ApproveButton.remove();
      li.remove();
    }

    clearButton.addEventListener('click', clearedButton);

    function clearedButton() {
      let li2 = document.getElementById('published-list');
      li2.innerHTML = '';
    }

  }
}