let loadButton = document.getElementById("loadBooks");
let form = document.querySelector("form");
let tbody = document.querySelector("tbody");

loadButton.addEventListener("click", loadBooks);
form.addEventListener("submit", addBook);
tbody.addEventListener("click", bookAction);

window.onload = function () {
  loadBooks();
};

async function loadBooks(e) {
  const url = "http://localhost:3030/jsonstore/collections/books";
  let response = await fetch(url);
  let data = await response.json();

  tbody.innerHTML = "";

  for (const [bookId, book] of Object.entries(data)) {
    let tr = document.createElement("tr");
    tr.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>
                <button data-id="${bookId}">Edit</button>
                <button data-id="${bookId}">Delete</button>
            </td>
            `;
    tbody.appendChild(tr);
  }
}
async function addBook(ev) {
  ev.preventDefault();
  let formData = new FormData(ev.target);
  let { title, author } = Object.fromEntries(formData.entries());

  if (title === '' || author === '') {
    return;
  }

  let url = "http://localhost:3030/jsonstore/collections/books";
  let data = { title, author };
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {})
    .catch((err) => {
      alert(err.message);
    });
  loadBooks();
}

function bookAction(event) {
  if (event.target.tagName === "BUTTON") {
    if (event.target.textContent === "Edit") {
      editBook(event.target.getAttribute("data-id"));
    } else if (event.target.textContent === "Delete") {
      deleteBook(event.target.getAttribute("data-id"));
    }
  }
}

async function editBook(bookId) {
  document.querySelector("form h3").textContent = "Edit FORM";
  document.querySelector("form button").textContent = "Save";
  const url = `http://localhost:3030/jsonstore/collections/books/${bookId}`;
  const response = await fetch(url);
  const data = await response.json();
  const { title, author } = data;
  document.querySelector("input[name=title]").value = title;
  document.querySelector("input[name=author]").value = author;
  document.querySelector("input[name=title]").value;
  form.removeEventListener("submit", addBook);
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    let formData = new FormData(event.target);
    let { title, author } = Object.fromEntries(formData.entries());
    await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, author }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        loadBooks();
        document.querySelector("form h3").textContent = "FORM";
        document.querySelector("form button").textContent = "Submit";
        form.removeEventListener("submit", this);
        form.addEventListener("submit", addBook);
      })
      .catch((err) => {
        alert(err.message);
      });
  });
}

async function deleteBook(bookId) {
  await fetch(`http://localhost:3030/jsonstore/collections/books/${bookId}`, {
    method: "DELETE",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      loadBooks();
    })
    .catch((err) => {
      alert(err.message);
    });
}
